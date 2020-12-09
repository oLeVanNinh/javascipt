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
Phần maping được dùng khai báo map kiểu instance với các arch và ami tương ứng trong từng region, được sử dụng cụ thể khi ở phần tạo instance trong template

## Resources
### VPC
* Tạo VPC
Để tạo VPC ta chỉ cần tạo resource VPC, trong đó giá trị `Type` là `AWS::EC2::VPC`, mọi resourc đều phải được khai báo `Type`, từ đó mà CloudFormation xác định
được resource cần tạo tương ứng với AWS. Khi tạo các resource trên console ta cần điền các tham số tương ứng cho resource đó, tương tự khi làm trên CloudFormation
ta sẽ khai báo các thông số này ở giá trị `Properties`, tùy mỗi loại resource khác nhau sẽ có các giá trị properties tương ứng khác nhau
Để tra cứu ta chỉ việc google "Tên resource" + cloudformation, sẽ dẫn đến trang document của resource đó, như trường hợp này document của VPC:
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html

Trong đó toàn bộ các thuộc tính tương ứng để khai báo 1 resource VPC trên CloudFormation như sau:

```yaml
Type: AWS::EC2::VPC
Properties:
  CidrBlock: String
  EnableDnsHostnames: Boolean
  EnableDnsSupport: Boolean
  InstanceTenancy: String
  Tags:
    - Tag
```
Ko phải mọi giá trị `Properties` đều là bắt buộc, như của VPC thì chỉ có `CidrBlock`, trường hợp này ta chỉ cần tạo VPC đơn giản với `CidrBlock` là `10.0.0.0/16` nên sẽ trông như sau:
```yaml
Resources:
  VPC:
    Type: 'AWS::EC2::VPC'
    Properties:
      CidrBlock: 10.0.0.0/16
```
* Tạo subnet:
Làm tương tự với VPC, để tạo public subnet như sau:

```yaml
PublicSubnetA:
  Type: 'AWS::EC2::Subnet'
  Properties:
    VpcId: !Ref VPC
    CidrBlock: 10.0.0.0/24
    AvailabilityZone: us-east-1a
    MapPublicIpOnLaunch: true
```
Ở đây có sử dụng instrinsic function là `Ref`, cách sử dụng
```
// yml
!Ref resource
// JSON
{ "Ref": resource },
```
`Ref` có thể sử dụng với paramter hay logical resource được khai báo trong CloudFormation, khi dùng với paramenter sẽ trả về giá trị của parameter, còn khi dùng với resource thì trả về giá trị của resource thường là physical ID
Bên trên là sample của một subnet, các subnet còn lại làm tương tự, chỉ việc thay đổi các `Properties` tương ứng như khi tạo bằng tay trên console

* Tạo InternetGateway
Default VPC sẽ được attach với 1 InternetGateway, trong trường hợp này ta phải tự tạo InternetGateway và attach nó với VPC vừa tạo, làm với CloudFormation như sau:

```yaml
VPCInternetGateway:
  Type: 'AWS::EC2::InternetGateway'
VpcGatewayAttachment:
  Type: 'AWS::EC2::VPCGatewayAttachment'
  Properties:
    InternetGatewayId: !Ref VPCInternetGateway
    VpcId: !Ref VPC
```
Đầu tiên là tạo InternetGateway, sau đó là tạo VPCGatewayAttachment để attach InternetGateway với VPC

* RouteTable, Route
Để dễ quản lý ta ko gộp chung toàn bộ các rule vào trong 1 route mà chia ra các route table tương ứng, trên CloufFormation sẽ làm bằng cách:
1. Tạo route table: phần mẫu bên dưới dùng để tạo route table cho các public subnet
```yaml
  PublicRT:
    Type: 'AWS::EC2::RouteTable'
    Properties:
      VpcId: !Ref VPC
```

2. Tạo route: trong route table sẽ có các rule map các xem network đi từ đâu đến đâu, phần này là public nên ta sẽ map mọi request đến InternetGateway:
```yaml
  PublicRoute:
    Type: 'AWS::EC2::Route'
    Properties:
      RouteTableId: !Ref PublicRT
      DestinationCidrBlock: 0.0.0.0/0
      GatewayId: !Ref VPCInternetGateway
```
3. Liên kết subnet vào route table
```yaml
  PublicARouteAssociation:
    Type: 'AWS::EC2::SubnetRouteTableAssociation'
    Properties:
      RouteTableId: !Ref PublicRT
      SubnetId: !Ref PublicSubnetA
```
* NACL (Network Access Control List)
Phần này sẽ bao gồm:
1. Tạo ACL:
```yaml
  NetworkAclPublic:
    Type: 'AWS::EC2::NetworkAcl'
    Properties:
      VpcId: !Ref VPC
```
2. Liên kết subnet vào ACL: cần liên kết bao nhiêu subnet thì cần tạo bấy nhiêu association
```YAML
  SubnetNetworkAclAssociationPublicA:
    Type: 'AWS::EC2::SubnetNetworkAclAssociation'
    Properties:
      NetworkAclId: !Ref NetworkAclPublic
      SubnetId: !Ref PublicSubnetA
```
3. Tạo các rule allow hay deny khi có traffic đi vào: đây là public nên sẽ allow mọi traffic
```YAML
  NetworkAclEntryPublicInAllowAll:
    Type: 'AWS::EC2::NetworkAclEntry'
    Properties:
      NetworkAclId: !Ref NetworkAclPublic
      RuleNumber: 99
      Protocol: -1
      RuleAction: allow
      Egress: false
      CidrBlock: 0.0.0.0/0
  NetworkAclEntryPublicOutAllowAll:
    Type: 'AWS::EC2::NetworkAclEntry'
    Properties:
      NetworkAclId: !Ref NetworkAclPublic
      RuleNumber: 99
      Protocol: -1
      RuleAction: allow
      Egress: true
      CidrBlock: 0.0.0.0/0
```
* Tạo RDS cluster và rds instance
1. Tạo subnet group
Trước khi tạo RDS thì cần tạo subnet group để đảm bảo khi tạo RDS instance sẽ nằm trong subnet mong muốn, trường hợp này RDS instance sẽ nằm các private DB subnet:
```YAML
  DBSubnetGroup:
    Type: 'AWS::RDS::DBSubnetGroup'
    Properties:
      DBSubnetGroupName: rdssubnet
      DBSubnetGroupDescription: Private group subnet for db
      SubnetIds:
        - !Ref PrivateDBSubnetA
        - !Ref PrivateDBSubnetB
        - !Ref PrivateDBSubnetC
```
2. Tạo security group
Tạo 1 security group chỉ cho phép traffic đi vào từ instance security group:
```YAML
  DBSecurityGroup:
    Type: 'AWS::EC2::SecurityGroup'
    Properties:
      GroupDescription: Enable access to SQL connect
      VpcId: !Ref VPC
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: '3306'
          ToPort: '3306'
          SourceSecurityGroupId: !GetAtt
            - InstanceSecurityGroup
            - GroupId
```
Ở đây có sử dụng instrinsic function `GetAtt` để lấy thuộc tính của một logical resource trong template, syntax như sau:
```yaml
// YAML
!GetAtt
  - Logical resource name
  - Attribute
// JSON
{"Fn::GetAtt": ["Logical resource name", "Attribute"] }
```
Tùy loại resource nào mà các attribute hỗ trợ để get được cũng khác nhau, trường hợp ko có attribute tương ứng sẽ có lỗi khi tạo stack từ template

3. Tạo rds cluster:
```YAML
  DBCluster:
    Type: 'AWS::RDS::DBCluster'
    Properties:
      Engine: aurora-mysql
      EngineVersion: 5.7.mysql_aurora.2.04.7
      MasterUsername: !Ref DBUser
      MasterUserPassword: !Ref DBRootPassword
      DBSubnetGroupName: !Ref DBSubnetGroup
      VpcSecurityGroupIds:
        - !GetAtt
          - DBSecurityGroup
          - GroupId
```
Các thông tin username, passwor được lấy từ parameter, subnet và security group được lấy từ resource được tạo ở bên trên

4. Tạo rds instance:
```YAMl
  DBInstance:
    Type: 'AWS::RDS::DBInstance'
    Properties:
      DBClusterIdentifier: !Ref DBCluster
      DBInstanceClass: db.t2.medium
      Engine: aurora-mysql
```
Nếu tạo trên console, thì khi tạo cluster bắt buộc phải tạo instance, CloudFormation cho phép tạo cluster trước rồi mới tạo instance, phần `DBInstanceClass` thường sẽ dùng paramter nhưng do người viết lười nên fix luôn khi tạo.

* Tạo WebServer:
Ý tưởng của người viết là tạo 1 server, sau đó cài đặt ruby, rồi generate ra 1 app đơn giản, sau đó thì tạo AMI từ server này, dùng AMI để tạo cho 1 autoscaling, sau đó thì tắt instance, phần cài đặt toàn bộ sử dụng cloud-init, để viết chi tiết về phần này thì khá dài nên người viết sẽ skip và để link template bên dưới =))

* Tạo AMI
Ko phải mọi resource hiện tại đều được AWS hỗ trợ, trường hợp này cũng vây, CloudFormation ko hỗ trợ việc tạo AMI, nên trường hợp này cần dùng đến custom resource, các resource này sẽ khai báo `Type` kiểu `Custom::"Tên custom resource"`. Để tạo AMI ta cần tạo custom resource, sau đó dùng 1 lambda function để tạo AMI.

1. Tạo AMI custom resource
```YAML
  AMI:
    Type: 'Custom::AMI'
    Properties:
      ServiceToken: !GetAtt
        - AMIFunction
        - Arn
      InstanceId: !Ref WebServer
      ImageName: !Ref AMIName
```
`ServiceToken` là `Properties` duy nhất bắt buộc, là nơi là CloudFormation gửi resquest đến, bên dưới là `InstanceId` và `ImageName` sẽ được gửi kèm trong request

2. Tạo role cho Lambda: tạo role với policy cần thiết để tạo lamba function

```YAML
  LambdaExecutionRole:
    Type: 'AWS::IAM::Role'
    Properties:
      AssumeRolePolicyDocument:
        Version: 2012-10-17
        Statement:
          Effect: Allow
          Principal:
            Service:
              - lambda.amazonaws.com
          Action:
            - 'sts:AssumeRole'
      Path: /
      ManagedPolicyArns:
        - 'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole'
        - 'arn:aws:iam::aws:policy/service-role/AWSLambdaRole'
      Policies:
        - PolicyName: EC2Policy
          PolicyDocument:
            Version: 2012-10-17
            Statement:
              - Effect: Allow
                Action:
                  - 'ec2:DescribeInstances'
                  - 'ec2:DescribeImages'
                  - 'ec2:CreateImage'
                  - 'ec2:StopInstances'
                Resource:
                  - '*'
```
3. Tạo lambda function:
```YAML
  AMIFunction:
    Type: 'AWS::Lambda::Function'
    Properties:
      Handler: index.handler
      Role: !GetAtt
        - LambdaExecutionRole
        - Arn
      Code:
        ZipFile: !Join
          - ... function code
      Runtime: python3.8
      Timeout: '900'
```
Bên trên tạo lambda function, chứ năng là sẽ lấy instance id từ request được gọi sang custom resource, sau đó tạo AMI từ từ instance trên, sau khi tạo xong thì gửi lại AMI id cho custom resource, việc này được thực hiện thông qua cfn-response, tùy mỗi ngôn ngữ sẽ viết thư viện riêng

```python
# require sdk and cfn-response lib
import cfnresponse
import boto3

def handler(event, context):
  # Get information about instance
  ec2 = boto3.resource('ec2')
  instance_id = event['ResourceProperties']['InstanceId']
  image_name = event['ResourceProperties']['ImageName']
  instance = ec2.Instance(instance_id)

  # create image
  image = instance.create_image(Name=image_name)

  # resolved_image is write bellow but not showing here, it's wait until image creation complete and  send signal back to CloudFormation by using cfn-response:
  # cfnresponse.send(event, context, cfnresponse.SUCCESS, {'image_id': image.id}, image.id)
  # Usage of cfn-response: cfnresponse.send(event, context, status, data, physicalID)
  # CloudFormation will wait until get signal or timeout
  resolved_image(image, event, context)
  instance.stop()
```

* Tạo LauchConfig
```YAML
  LaunchConfig:
    Type: 'AWS::AutoScaling::LaunchConfiguration'
    DependsOn: AMI
    Properties:
      ImageId: !GetAtt
        - AMI
        - image_id
      KeyName: !Ref KeyName
      SecurityGroups:
        - !Ref InstanceSecurityGroup
      InstanceType: !Ref InstanceType
      UserData: !Base64
        'Fn::Join':
          - ''
          - - |
              #!/bin/bash -xe
            - |
              yum update -y aws-cfn-bootstrap
            - '/opt/aws/bin/cfn-signal -e 0 --stack '
            - !Ref 'AWS::StackName'
            - ' --resource WebServerGroup '
            - ' --region '
            - !Ref 'AWS::Region'
```
Đến khi AMI được tạo xong thì LauchConfig mới được tạo, ở phần UserData có sử dụng cfn-singal để gửi signal khi resource được tạo cho `WebServerGroup` sẽ được đề cập ở bên dưới.

* Tạo ALB, Listener, TargetGroup

```YAMl
  ApplicationLoadBalancer:
    Type: 'AWS::ElasticLoadBalancingV2::LoadBalancer'
    Properties:
      Subnets:
        - !Ref PublicSubnetA
        - !Ref PublicSubnetB
        - !Ref PublicSubnetC
      SecurityGroups:
        - !Ref ALBSecurityGroup
  ALBListener:
    Type: 'AWS::ElasticLoadBalancingV2::Listener'
    Properties:
      DefaultActions:
        - Type: forward
          TargetGroupArn: !Ref ALBTargetGroup
      LoadBalancerArn: !Ref ApplicationLoadBalancer
      Port: '80'
      Protocol: HTTP
  ALBTargetGroup:
    Type: 'AWS::ElasticLoadBalancingV2::TargetGroup'
    Properties:
      HealthCheckIntervalSeconds: 30
      HealthCheckTimeoutSeconds: 5
      HealthyThresholdCount: 3
      Port: 80
      Protocol: HTTP
      UnhealthyThresholdCount: 5
      VpcId: !Ref VPC
```

Snippet bên trên tạo 1 ALB, Lister và forward http traffic từ ALB vào Target Group, tương tự như khi tạo trên console.

* Tạo server autoscaling
```YAML
  WebServerGroup:
    Type: 'AWS::AutoScaling::AutoScalingGroup'
    Properties:
      VPCZoneIdentifier:
        - !Ref PrivateSubnetA
        - !Ref PrivateSubnetB
        - !Ref PrivateSubnetC
      LaunchConfigurationName: !Ref LaunchConfig
      MinSize: '2'
      MaxSize: '2'
      TargetGroupARNs:
        - !Ref ALBTargetGroup
      HealthCheckType: ELB
      HealthCheckGracePeriod: '300'
    CreationPolicy:
      ResourceSignal:
        Timeout: PT15M
    UpdatePolicy:
      AutoScalingRollingUpdate:
        MinInstancesInService: '1'
        MaxBatchSize: '1'
        PauseTime: PT15M
        WaitOnResourceSignals: 'true'
```
AutoScaling Group được tạo dùng LauchConfig được tạo bên trên, lý do ở LaunchConfig có sử dụng cfn-signal ở user data vì ở `WebServerGroup` ta dùng `CreationPolicy`, nghĩa là ta muốn resource CloudFormation đợi cho đến khi các EC2 instance được chạy thành công hết trước khi thay đổi trạng thái resource. AutoScaling dùng Rolling Update Policy, mỗi lần thực hiện update chỉ thay thế từng instance trong group

Template đầy đủ: https://github.com/oLeVanNinh/cloudFormationTemplate/blob/main/autoscaling.json
