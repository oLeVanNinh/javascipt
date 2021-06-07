## InnoDB locking
InnoDB là một engine được sử dụng phố biến của mysql. Nội dung bài này sẽ đi tìm hiểu về các loại lock được sử dụng trong InnoDB và deadlock

## Shared and Exclusive Locks
InnoDB triển khai lock chuẩn ở cấp độ row, với 2 loại lock là  shared (S) locks và exclusive (X) locks:
+ Shared (S) lock cho phép transaction giữ lock có thể đọc một row
+ Exclusive (X) lock cho phép transaction giữ lock có thể thực hiện update hay xóa một row

Nếu transaction T1 giữ  shared (S) lock trên row r thì request đến từ transaction T2 trên row r được xử lý như sau:
+ Request bởi T2 cho s lock có thể được cấp phát ngay lập tức. Kết quả là cả T1 và T2 đều giữ s lock trên row r
+ Request bở T2 cho x lock ko thể thực hiện ngay lập tức

Nếu T1 giữ exclusive (X) lock trên row r, request từ transaction T2 khác để lấy exclusive (X) lock trên row r ko được thực hiện ngay lập tức. Thay vào đó, T2
phải đợi T1 giải phóng lock trên row r.

## Intention Locks
InnoDB hỗ trợ multiple granularity locking cho phép cùng tồn tại row lock và table lock. Ví dụ, một câu lệnh sql `LOCK TABLES ... WRITE` sẽ sử dụng một
exclusive lock trên một bảng cụ thể. Để có thể sử dụng lock ở mức độ chi tiết cụ thể trên từng bản ghi, InnoDB sử dụng intention locks. Intention locks là lock
ở tầng table chỉ định kiểu lock được sử dụng (shared hay exclusive) mà một transaction yêu cầu sau đó cho một row. Có 2 loại intention lock:
+ Intention shared lock (IS) chỉ ra rằng một transaction có ý định sử dụng shared lock cho một column trên table
+ Intention exclusive lock (IX) chỉ ra rằng một transaction có ý định sử dụng exclusive lock cho một column trên table

Ví dụ, `SELECT ... FOR SHARE` đặt một IS lock, and `SELECT ... FOR UPDATE` đặt một IX lock.

Giao thức của intentions lock như sau:
+ Trước khi một transaction có thể giành được shared lock trên một row hay table, nó trước hết phải giành được IS lock hay cao hơn trên table
+ Trước khi một transaction có thể giành được exclusive lock trên một row hay table, nó trước hết phải giành được IX lock trên table

Lock được cấp chô một transaction nếu nó tương thích với lock đã tồn tại. Transaction sẽ chờ cho đến khi lock đã tồn tại mâu thuẫn với lock mới được giải phóng
trước khi cấp lock mới.

Intention lock ko chặn bất cứ thứ gì ngoại trừ full table request (Ví dụ, `LOCK TABLES ... WRITE`). Mục đích của intentions lock là để cho thấy ai đó đang lock một
row hay chuẩn bị lock một row nào đó.

Dự liệu của một transaction sử dụng intention lock tương tự khi sử dụng câu lệnh `LOCK TABLES ... WRITE`
```sql
TABLE LOCK table `test`.`t` trx id 10080 lock mode IX
```

## Record Locks
Record lock là lock trên index của một record. Ví dụ: `SELECT c1 FROM t WHERE c1 = 10 FOR UPDATE;` ngăn cản những transaction khác thực hiện insert, update hay
delete row mà giá trị của row thỏa mãn `t.c1` là 10

Record lock luôn lock index record kể cả khi table được định nghĩa ko có index. Trong trường hợp này, InnoDB tạo một cụm index ẩn và sử dụng index này cho record
lock.

Dữ liệu transaction khi sử dụng record lock tương tự khi dùng câu lệnh `SHOW ENGINE INNODB STATUS`:
```sql
RECORD LOCKS space id 58 page no 3 n bits 72 index `PRIMARY` of table `test`.`t`
trx id 10078 lock_mode X locks rec but not gap
Record lock, heap no 2 PHYSICAL RECORD: n_fields 3; compact format; info bits 0
 0: len 4; hex 8000000a; asc     ;;
 1: len 6; hex 00000000274f; asc     'O;;
 2: len 7; hex b60000019d0110; asc        ;;
```

## Gap Locks
Gap lock là lock trên một khoảng index record hay lock một khoảng trước hay sau index record cuối cùng. Ví dụ `SELECT c1 FROM t WHERE c1 BETWEEN 10 and 20 FOR UPDATE;`
ngăn cản transaction khác insert giá trị 15 vào column t.c1 bất kể là giá trị đó đã tồn tại trong bảng hay chưa bởi vì gap lock sẽ lock toàn bộ các giá trị
trong một khoảng.

Khoảng lock có thể mở rộng trên một giá trị index, nhiều giá trị index hay thậm chí là rỗng.

Gap lock là sự đánh đổi giữa performance và concurrency và chỉ đươc dùng trong vài isolate level của transaction chứ ko phải tất cả

Gap lock không cần thiết đối với các câu lệnh lock các hàng bằng cách sử dụng index duy nhất để tìm kiếm một row duy nhất. (Điều này không bao gồm trường hợp
điều kiện tìm kiếm chỉ bao gồm một số column dùng multiple index; trong trường hợp đó, gap lock xảy ra.)
Ví dụ: nếu cột id có một index duy nhất, câu lệnh sau chỉ sử dụng lock record cho hàng có giá trị id 100 và không quan trọng liệu các session
khác có chèn row vào khoảng trống trước hay không:

```sql
SELECT * FROM child WHERE id = 100;
```
Nếu `id` chưa được đánh index hay index ko phải duy nhất thì câu lệnh sẽ lock khoảng trước đó.

Cũng cần lưu ý ở đây rằng conflict locks có thể được giữ trên một khoảng bởi các transaction khác nhau. Ví dụ: transaction A có thể giữ một shared gap lock (gap S-lock) trên một khoảng trong khi transaction B giữ một exclusive gap lock (gap X-lock) trên cùng một khoảng. Lý do cho phép các khóa khoảng cách xung đột được phép là nếu một bản ghi bị xóa khỏi một index,
thì các khóa khoảng cách được giữ trên bản ghi bởi các transaction khác nhau phải được hợp nhất.

Gap lock cách có thể bị vô hiệu hóa. Điều này xảy ra nếu bạn thay isolate level của transaction thành `READ COMMITTED`. Trong trường hợp này, gap lock bị vô
hiệu khi dùng để tìm kiếm hay scan index và chỉ được sử dụng khi kiểm tra ràng buộc về  foreign-key và trường hợp bị trùng lặp key.

Ngoài ra còn có các tác dụng khác của việc sử dụng isolation level `READ COMMITTED`. Record lock trên các bản ghi không match với điều kiện `WHERE` trên câu lệnh
SQL được giải phóng ngay sau đó. Với câu lệnh `UPDATE, InnoDB thực hiện “semi-consistent” read, như vậy nó trả về phiên bản mới nhất đã commit cho MySQL nhờ vậy
mà MySQL có thể xác định row có match với điều kiện `WHERE` trong câu lệnh `UPDATE`

## Next-Key Locks

Next-key lock is sự kết hợp của record lock trên index của record và gap lock trên khoảng trước của index record

InnoDB thực hiện lock ở tầng row theo như cách mà nó thực hiện tìm kiếm hay scan trên index của table. Nó đặt một shared hay exclusive lock trên mỗi index record
mà nó gặp phải, bởi vậy mà row-level lock bản chất là index record lock. Next-key lock trên index cũng ảnh hưởng đến khoảng trước index của record. Thực chất nó
là index record lock cộng với khoảng đằng trước của record index. Nếu một session có shared hay exclusive lock trên record R trên một index nào đó của record này,
session khác không thể chèn  một record mới vào khoảng ngay trước R index.

Giả sử index chứa các giá trị 10, 11, 13 và 20. Các next-key locks có thể có cho index này bao gồm các khoảng sau, trong đó dấu ngoặc tròn biểu thị loại trừ
điểm cuối của khoảng và dấu ngoặc vuông biểu thị sự bao gồm của điểm cuối

```
(negative infinity, 10]
(10, 11]
(11, 13]
(13, 20]
(20, positive infinity)
```
Trong khoảng cuối cùng, next-key lock lock khoảng trên giá trị lớn nhất là 20 và dương vô cùng. Dương vô cùng ở đây là giả code biểu thị giá trị index cao hơn
tồn tại trong danh sách index.

Mặc định InnoDB hoạt động với ` REPEATABLE READ` transaction isolation level. Trong trường hợp này, InnoDB sử dụng next-key lock để search và scan để ngăn
các phantom row.

Transaction data cho next-key lock có thể show bởi câu lệnh `SHOW ENGINE INNODB STATUS`

```sql
RECORD LOCKS space id 58 page no 3 n bits 72 index `PRIMARY` of table `test`.`t`
trx id 10080 lock_mode X
Record lock, heap no 1 PHYSICAL RECORD: n_fields 1; compact format; info bits 0
 0: len 8; hex 73757072656d756d; asc supremum;;

Record lock, heap no 2 PHYSICAL RECORD: n_fields 3; compact format; info bits 0
 0: len 4; hex 8000000a; asc     ;;
 1: len 6; hex 00000000274f; asc     'O;;
 2: len 7; hex b60000019d0110; asc        ;;
```

### Insert Intention Locks
Insert intention lock là một kiểu của gap lock được đặt bởi câu lệnh `INSERT` hoạt động trước khi chèn vào 1 row. Khóa này báo hiệu ý định chèn vào row mới,
theo cách nhiều transaction cùng muốn thực hiện chèn vào cũng một khoảng index không cần phải chờ transaction khác nếu chúng ko cùng thực hiện insert vào cùng
1 khoảng. Giả sử có index record với giá trị là 4 và 7, các transaction riêng biệt thực hiện chèn vào giá trị 5 và 6, mỗi transaction đều thực hiện lock ở
khoảng 4 và 7 với ý định giành đươc exclusive lock để chèn giá trị vào khoảng đã định trước nhưng ko chặn transaction khác vì không xảy ra xung đột

Ví dụ sau minh họa một transaction thực hiện một insert intention lock trước khi có được một exclusive lock trên bản ghi được chèn.
Ví dụ liên quan đến hai client, A và B.

Client A tạo 1 table chứa 2 index record và bắt đầu transaction và đặt một exclusive lock trên index record với ID lớn hơn 100. Exclusive lock bao gồm
khoảng trước record 102:
```sql
mysql> CREATE TABLE child (id int(11) NOT NULL, PRIMARY KEY(id)) ENGINE=InnoDB;
mysql> INSERT INTO child (id) values (90),(102);

mysql> START TRANSACTION;
mysql> SELECT * FROM child WHERE id > 100 FOR UPDATE;
+-----+
| id  |
+-----+
| 102 |
+-----+
```

Client B bắt đầu transaction để chèn record. Transaction giành lấy intention lock trong khi chờ exclusive lock:

```sql
mysql> START TRANSACTION;
mysql> INSERT INTO child (id) VALUES (101);
```
Dữ liệu transaction cho intention lock có thể show bởi câu lệnh `SHOW ENGINE INNODB STATUS`
```sql
RECORD LOCKS space id 31 page no 3 n bits 72 index `PRIMARY` of table `test`.`child`
trx id 8731 lock_mode X locks gap before rec insert intention waiting
Record lock, heap no 3 PHYSICAL RECORD: n_fields 3; compact format; info bits 0
 0: len 4; hex 80000066; asc    f;;
 1: len 6; hex 000000002215; asc     " ;;
 2: len 7; hex 9000000172011c; asc     r  ;;...
```
