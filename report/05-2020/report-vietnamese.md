# Dynamo DB

## 1. Giới thiệu về DynamoDB
Dynamo DB là một loại dịch vụ về có sở dữ liệu, được xây dựng trên nền tảng NoSQL, được AWS cũng cấp cho người dùng dưới dạng DaaS - Database as a Service, nghĩa là bạn chỉ việc trả tiền mà ko phải lo lắng về việc quản lý infrastructure của
hệ thống, thay vào đó AWS sẽ lo hết từ A-Z cho bạn:
+ Performace: Fast and consistent
+ Kiến trúc có tính mở rộng cao High scalable architecture
+ Cấu trúc linh hoạt, hỗ trợ lưu trữ dạng key - value và document

DynamoDB phù hợp để sử dụng trong các ứng dụng liên quan đến big data, quảng cáo, gaming, dữ liệu theo thời gian, IoT và các ứng dụng khác cần thực hiện việc write dữ liệu lớn với độ trễ thấp và có dữ liệu yêu cầu schema động
## 2. DynamoDB components
## 2. Thành phần của DynamoDB
DynamoDB có 3 thành phần cơ bản bao gồm: bảng, items, and thuộc tính:
+ **Bảng**: là thực thể DynomoDB sử dụng để lưu chứa dữ liệu, một bảng bao gồm nhiều dữ liệu
+ **Item**: tượng tự như record trong SQL, một bảng bao gồm nhiều item, mỗi item bao gồm nhiều thuộc tính. Item có thể lưu trữ dữ liệu lên đến 400 KB
+ **Thuộc tính**: thuộc tính là dữ liệu cơ bản của mỗi item, thuộc tính được thể hiện dưới dạng key-value. Ví dụ:

```json
# Item 1
{
  "name": "Zed",
  "age": 20
}

# Item 2:
{
  "name": "Thresh"
  "age": 23,
  "address": {
    "city": "HN",
    "state": "VN"
  }
}
```
#### Primary key
Khi tạo một bảng một bảng, tương tự như khi tạo bảng với hệ quản trị cơ sở dữ liệu SQl, ta cần chỉ định tên và primary key (khóa chính) cho bảng, primary key là công cụ
để đảm bảo tính độc nhất cho mỗi item trong bảng. Tất cả các thuộc tính của các item  trong một bảng có thể giống nhau nhưng buộc giá trị của primary key phải khác nhau với
mỗi item. DynamoDB hỗ trợ 2 loại primary key:
+ **Partition key**: là primary key đơn giản chỉ chứa duy nhất một thuộc tính duy nhất được gọi là partition key. Giá trị của partition key được sử dụng cho một hàm băm để xác định
phần vùng mà dữ liệu sẽ được lưu trữ, đây là lý do partition key được gọi là hash key. Trong trường hợp chỉ định mình partition key thì tất  cả item trong bảng phải có giá trị partition
key bắt buộc là khác nhau.
+ **Partition key and sort key**: là primary key sử dụng 2 hỗn hợp thuộc tính của item bao gồm một thuộc tính được chỉ định như partition key và một thuộc tính bổ sung được gọi là sort key.
Tương tự như trường hợp sử dụng mình partition key như là primary key, trong trường hợp này giá partition key cũng là đầu vào cho một hàm băm để xác định phần vùng mà dữ liệu được lưu trữ.
Trường hợp này cho phép 2 hoặc nhiều item có thể có giá trị partition key là giống nhau, khi đó tất cả item sẽ được lưu trữ trong cùng một phân vùng, sort key của các item trong cùng một phân
vùng phải khác nhau để đảm bảo trong toàn bộ bảng sẽ không có 2 item nào  có cùng primary key. Khi đọc dữ liệu có thể sử dụng sort key như thuộc tính để sắp xếp dữ liệu khi sử dụng query, sort key
còn được gọi là range key

```json
{
  "department_id": "VEU123", # Partition key
  "employee_id": "B1234",  # Sort key
  "employee_name": "Cloud"
}
```

#### Secondary indexes

Để đọc dữ liệu từ bảng, DynomoDB hỗ trợ 2 phương thức:
+ Scan: cho phép đọc và filter linh hoạt dựa trên tất cả thuộc tính của item trong bảng, điểm trừ là scan trên toàn bảng, nghĩa là tất cả item trong bảng sẽ được đọc qua 1 lần
+ Query: cho phép truy vấn dựa trên primary key, sử dụng hiệu quả hơn scan, mỗi lần đọc dữ liệu sẽ scan trên phần vùng của primary key, nơi mà dữ liệu được lưu chứ chứ ko scan
trên toàn bộ table, điểm trừ là khó truy vấn linh hoạt, vì mỗi lần phải chỉ định primary key cụ thể mới có thể sử dụng query.

Để tăng tính linh hoạt khi truy vấn dữ liệu, ngoại trừ primary key cố định được chỉ định khi khởi tạo bảng, DynamoDB còn hỗ trợ tạo thêm index thứ hai trong một bảng. Có 2 loại index
mà DynamoDB hỗ trợ:

+ **Global Secondary Index (GSI)**: tượng tự như primary key có thể bao gồm partition key hoặc một cặp partition key và sort key, sử dụng thuộc tính của item khác với primary key. GSI có thể
khởi tạo sau khi bảng được tạo.
+ **Local Secondary Index (LSI)**: sử dụng chung partition key với primary key nhưng chỉ định sort key khác với primary key . LSI phải được tạo khi khởi tạo bảng, nghĩa là một bảng
đang sử dụng sẽ không thể tạo thêm LSI.

DynamoDB cho phép tạo tối đa 20 GSI và 5 LSI trên mỗi bảng
+ Mỗi index phải được liên kết với một bảng được gọi là bảng cơ sở
+ DynamoDB tự động bảo trì trạng thái của các trạng thái, mỗi khi có dữ liệu được thêm, sửa, xóa, Dynamo cũng tự động cập nhập lại các index tương ứng.

## 3. Tính nhất quán và thông lượng của DynamoDB
DynamoDB là dịch vụ có tính khu vực (regional), khi một bảng được tạo, nó tự động được sao chép trong 3 AZ (Availability Zone), AWS sẽ đảm bảo việc đồng bộ giữa các bảng này.
Khi thực hiện viết dữ liệu vào một bảng, nếu việc ghi dữ liệu thành công sẽ trả về statú 200 nghĩa là dữ liệu đã được ghi và đã được đồng bộ với các bằng
nằm ở AZ khác. AWS hỗ trợ 2 chế độ để đọc dữ liệu:
+ **Eventually consisten reads**: dữ liệu được đọc từ non-leader node, kết quả dữ liệu đọc được có thể không phải dữ liệu mới nhất sau khi vừa hoàn thành một
hoạt động ghi dữ liệu nào đó, vì dữ liệu được lưu trữ ở nhiều AZ nên sẽ mất thời gian để đồng bộ dữ liệu ở giữa các AZ, nếu thực hiện đọc dữ liệu sau đó một
khoảng, sau khi đã được đồng bộ, dữ liệu mới nhất sẽ được trả về
+ **Strongly consistent reads**: dữ liệu được đọc từ leader node, luôn trả về dữ liệu mới nhất

*Node ở đây được hiểu là nơi DynamoDB sử đụng để lưu trử dữu liệu, DynamoDB tự động sao chép dữ liệu trong 3 AZ, nghĩa là sẽ có 1 leader-note và 2 non-leader node*

Mặc định DynamoDB sẽ đọc dữ liệu ở chế độ eventually consisten read, nếu cần đọc dữ liệu ở mode strongly consistent reads thì cần chỉ định cụ thể,
khi đọc dữ lệu bằng cách sử dụng *GetItem*, *Query*, và *Scan* có thể sử dụng *ConsitentRead* parameter, khi giá trị của parameter này được đặt là
true,  strongly consistent reads sẽ được dùng để đọc dữ liệu

DynamoDB hỗ trợ tự động scale để mở rộng hiệu suất đọc và ghi của bằng, tuy nhiên, nếu không sử dụng tính này này, bạn sẽ phải tự quản lý cho phù hợp
với yêu cầu của bằng. Khả năng đọc và ghe của bảng được đo lường bằng đơn vị đọc và ghi (read capacity units and write capacity unit)

#### Read capacity units
DynamoDB xử lý hoạt dộng đọc dự trên mode đọc nào được sử dụng, consistency hay strongly. Với mỗi read capacity unit, DynamoDB có thể xử lý một e strongly consistent read mỗi giây hoặc
2 eventual consistent reads mỗi dây. Khối lượng dữ liệu có thể xử lý  của mỗi read capacity unit khi đọc dữ liệu ở chết độ strongly consistent read là 4 KB, nếu kích thước dữ liệu cần đọc
vượt quá 4 KB, cần thêm  read capacity unit để xử lý. Việc sử dụng chế độ đọc nào và kích thước của dữ liệu sẽ quyết định xem bao nhiêu read capacity unit cần được sử dụng:

+ 1 read capacity unit = 1 strong consistent read
+ 1 read capacity unit = 2 eventual consistent read
+ 1 item với kích thước dữ liệu dữ liệu không vượt quá 4 KB và dữ liệu được đọc ở mode strong consistent read thì cần 1 read capacity unit để xử lý, nếu kích thước dữ liệu lơn hơn 4 kB nhưng nhỏ hơn 8 kB, nó  vẫn cần thêm một read capacity unit để xử lý
+ 1 item với kích thước dữ liệu không vượt quá 8 KB thực hiện đọc dữ liệu ở mode eventually consistent read thì cần 1 read capacity unit để xử lý,nếu kích thước dữ liệu lơn hơn 8 kB nhưng nhỏ hơn 16 kB, nó  vẫn cần thêm một read capacity unit để xử lý

#### Write capacity units
Khác với hoạt động động dữ liệu, hoạt động ghi dữ liệu chỉ có thể thực hiện trên leader node ở chết độ strongly consistency. 1  write capacity unit có thể thực hiện xử lý được 1 strongly consistent write
mỗi giây với kích thước dữ liệu xử lý tối đa là 1 kB. Nếu dữ liệu cần xử lý vượt quá 1 kb thì cần sử dụng thêm write capacity unit
+ 1 write capacity unit = 1 hoạt động ghi với kích thước dữ liệu lên đến  1 KB
+ Nếu kích thước dữ liệu cần ghi lơn hơn 1 KB thì cần thêm write capcity unit để xử lý
+ Nếu kích thước dữ liệu bé hơn 1 KB thì vẫn cần 1 write capcity unit để xử lý

#### Tính toán thông lượng của bảng
Trong trường hợp không sử dụng tính năng auto scale của DynomoDB mà tự tính thông lượng của bảng, giả sử khởi tạo bảng với 5 read capacity units và 5 write capacity units thì bảng này có thể thực hiện:
+ Strongly consistent read lên đến 20 KB môi giây = *5 read capacity units x 4 KB*
+ Eventually constent lên đến 40 KB mỗi giây = *5 read capacity units x 8 KB*
+ Strongly consistent write lên đến  5 KB mỗi giây = *5 write capacity x 1 KB*

## 4. DynomoDB best practices
+ Primary bao gồm partition key sẽ ảnh hưởng đến việc dữ liệu sẽ được lưu trữ ở partition nào, vì thế cần lựa thuộc tính để sử dụng để sử dụng làm partition kì càng riêng biệt càng tốt
để tối ưu thông lượng của bảng và việc truy vấn hiểu quả hơn
+ Dự liệu tối đã mỗi item có thể lưu chỉ 4 kB nên đối với đối tượng có dự liệu lớn có thể lưu trữ lên s3 hoặc Glacier, sau đó lưu trữ meta data vào trong item của DynamoDB
+ Mặc định  *Scan*  sẽ đọc dữ liệu trên toàn bảng nên sẽ tón nhiều read capacity units, thay vào đó để cho hiệu quả, sử dụng *Query* chỉ đọc dữ liệu trên một partition
+ Create LSI for frequently queried attributes on the table apart from primary key attributes to improve query performance
+ Tạo LSI cho nhưng câu truy vấn thường được sử dụng ngoài primary key để tối ưu hiệu suất, cần thiết kế cần thận LSI vì key này chỉ có thể khởi tạo khi khởi tạo bảng và không thể xóa.
