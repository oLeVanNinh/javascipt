## AWS CloudFormation

CloudFormation là service được cung cấp bởi AWS giúp cho người sử dụng dễ dàng build và setup cũng như provision các tài nguyên trên AWS với thời gian nhanh
nhất và giảm bớt công sức bỏ ra để quản lý. Việc sử dụng CloudFormation đem lại các lợi ích như:
+ Sử dụng như một công cụ Iaac, toàn bộ tài nguyên trên AWS được quản lý trên các template, dễ dàng để làm tự động hóa
+ Giúp provision tài nguyên trên môi trường một cách nhanh chóng, điều này có  vẻ là hiển nhiên việc tự động hóa bao giờ cũng thực hiện nhanh chóng hơn là
thao tác bằng tay của con người, ngoài ra trong trường hợp xảy ra sự cố cần khôi phục thì việc tự động hóa cũng giảm  thời gian RTO của hệ thống, tưởng tưởng
chỉ cần đưa lên cái template, bấm vài nút tạo là xong
+ Giúp hạn chế lỗi con người vì mọi thứ được tự động hóa
+ Có thể dùng như document, và sử dụng với các công cự quản lý như source control giúp việc quản lý hệ thống trên AWS trở nên dễ dàng hơn

## Sử dụng CloudFormation trên console
Từ console => Service => CloudFormation => Create Stack => With new resources
![](imgs/console.png)

Ở đây có 3 option để tạo:
+ Template is ready: sử dụng khi đã có trước template, có thể upload file trực tiếp từ máy local hoặc nhập URL của file đã lưu trên s3
+ Use a sample template: Sử dụng template mà AWS đã cũng cấp sẵn
+ Create template in Designer: đây là công cụ khá hữu ích để build template, có thể nhìn trực quan được hệ thống hiện tại, có validate template, chuyển đổi qua lại
định dạng template giữa YAML và JSON

![](imgs/designer.png)

## Các thành phần của template

CloudFormation template có thể viết dưới 2 format là JSON và YAML, so với JSON thì YAML ngắn gọn hơn, ngoài ra còn hỗ trợ comment. Một CloudFormation template đầy
đủ sẽ gồm các thành phần

```yaml
AWSTemplateFormatVersion:
Description:
Parameters:
Mappings:
Resources:
Outputs:
```

+ AWSTemplateFormatVersion: Là vesion chỉ định cho cho template, nếu thành phần này ko được chỉ định trong template thì khi build CloudFormation tự động lấy version mới nhất, hiện tại thì version mới nhất là `2010-09-09` và cũng là giá trị duy nhất hợp lệ
+ Description: cho phép điền comment để giải thich về template
+ Parameters: cho phép truyền tham số tùy chỉnh vào khi tạo template, khi tạo trên console  sẽ có step để chọn các tham số này
![](imgs/paramter.png)

+ Mappings: sử dụng để tạo một tập giá trị key - value, được dùng để lấy các giá trị tương ứng với các key cho trước khi cần dùng đến bằng cách sử dụng instrinsic funtion `Fn::FindInMap`
+ Resources: Là thành phần bắt buộc phải có của template, nếu ko có sẽ ko thể tạo được stack, phần này dùng để khai báo các resource trên stack cần khởi tạo
+ Outputs: phần này dùng để khi báo các giá trị cần sau khi stack được tạo xong, giá trị sẽ hiển thị ở phần output trên UI console, như trường hợp tạo một load blancer sau khi resource được tạo xong, có thể bạn muốn DNS name của load balancer đó để truy cập thử

## Tạo stack với CloudFormation
Template dự định tạo trên designer sau trông như sau:
![](imgs/scale.png)

Template trên dùng để tạo các resource theo kiểu bastion host :
+ Tạo custom VPC bao gồm: 3 public subnet, 3 app private subnet và 3 db private subnet nằm ở 3 availability zone khác nhau
+ App instance group nằm trong apprivate subnet, chỉ cho phép SSH traffic đi từ bastion và HTTP traffic từ Load Balancer đi vào
+ RDS database nằm trong db private subnet, chỉ cho phép SQL traffic đi vào từ security group

## Parameter cho template

```yaml
Parameters:
  AMIName:
    Type: String
    Description: Name for AMI creation
    ConstraintDescription: Name for image
    MinLength: '6'
    MaxLength: '64'
  DBName:
    Default: MyDatabase
    Description: MySQL database name
    Type: String
    MinLength: '1'
    MaxLength: '64'
  DBUser:
    NoEcho: 'true'
    Description: Username for MySQL database access
    Type: String
    MinLength: '1'
    MaxLength: '64'
    AllowedPattern: '[a-zA-Z][a-zA-Z0-9]*'
    ConstraintDescription: must begin with a letter and contain only alphanumeric characters
  DBRootPassword:
    NoEcho: 'true'
    Description: Password for mysql access
    Type: String
    MinLength: '8'
    MaxLength: '41'
    AllowedPattern: '[a-zA-Z0-9]*'
    ConstraintDescription: must contain only alphanumeric characters
  InstanceType:
    Description: WebServer EC2 instance type
    Type: String
    Default: t2.small
    AllowedValues:
      - t1.micro
      - t2.nano
      - t2.micro
      - t2.small
      - t2.medium
      ...
    ConstraintDescription: must be a valid EC2 instance type.
  KeyName:
    Description: Name of an existing EC2 KeyPair to enable SSH access to the instances
    Type: 'AWS::EC2::KeyPair::KeyName'
    ConstraintDescription: must be the name of an existing EC2 KeyPair.
  SSHLocation:
    Description: The IP address range that can be used to SSH to the EC2 instances
    Type: String
    MinLength: '9'
    MaxLength: '18'
    Default: 0.0.0.0/0
    AllowedPattern: '(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})/(\d{1,2})'
    ConstraintDescription: must be a valid IP CIDR range of the form x.x.x.x/x.
```
Các paremter dùng trong templete bao gồm: AMIName được dùng để đặt tên cho image khi tạo ami để update vào Lauchconfiguation, DBUser, DBName, DBRootPassword được dùng để tạo RDS, KeyName để chỉ định key khi được sử dụng SSH khi tạo EC2, và SSH location để chỉ định source ip được SSH vào instance

Cấu trúc của 1 parameter như sau và các thuộc tính được dùng cho các paramter trên:
+ Tên parameter
- Description: Mô tả về parameter
- Type: Kiểu của parameter, CloudFormation hỗ nhiều các kiểu như String, Number, List<Nubmer>, ngoài ra còn có thể list ra các resource khác như AWS::EC2::KeyPair::KeyName (keypem), List\<AWS::EC2::VPC::Id> (list các VPC), List\<AWS::EC2::SecurityGroup::Id> (list các security group), ...
- Min, MaxLength: giới hạn về số lượng kí tự của parameter
- Default: giá trị mặc định của paramenter
- AllowedPattern: cho phép khai báo một pattern như regex để đảm bảo dữ liệu của parameter phải tuân theo pattern đó
- NoEcho: tượng tự như password trong form HTML, khi khai báo là true thì giá trị của field sẽ ko được hiển thị trên UI mà bị ẩn đi

## Maping

```yaml
Mappings:
  AWSInstanceType2Arch:
    t1.micro:
      Arch: HVM64
    t2.nano:
      Arch: HVM64
    ...
  AWSInstanceType2NATArch:
    t1.micro:
      Arch: NATHVM64
    t2.nano:
      Arch: NATHVM64
    ...
  AWSRegionArch2AMI:
    us-east-1:
      HVM64: ami-0080e4c5bc078760e
      HVMG2: ami-0aeb704d503081ea6
    ...
```
Phần maping được dùng khai báo map kiểu instance với các arch và ami tương ứng trong từng region

## Resources
### VPC
