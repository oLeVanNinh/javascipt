## Quản lý tiến trình trong linux
### 1. Hiểu về tiến trình trong linux
Khi máy tính khởi động, trước hết nó sẽ bắt đầu kernel, kernel sẽ chịu trách nhiệm bắt đầu tiến trình đầu tiên gọi là tiến trình `init`, tiến trình này sẽ chịu trách nhiệm cho tất cả các tiến trình khác. Khi bắt đầu khởi chạy một tiến trình, `init` sẽ bắt đầu tiến trình đó như là tiến trình con của nó. Ví dụ, `init` sẽ bắt đầu tiến trình `mingetty`, tiến trình này sẽ chịu trách nhiệm mở một login shell và từ `mingetty` tiến trình `bash` được khởi chạy và cho phép người dùng làm việc với command line

Quan hệ giữa các tiến trình này là quan hệ cha-con (parrent-child), `int` là tiến trình đầu tiên và là tiến trình cha khởi chạy tiến trình `mingetty`,  tiến trình `mingetty` lại là tiến trình cha của tiến trình `bash` và mọi command được chạy từ `bash` là tiến trình con của tiến trình bash

Để chạy một tiến trình, Linux kernel làm việc với một queue chứa những tiến trình có thể chạy được, mọi tiến trình phải đợi cho đến lượt mình để chạy. Mọi tiến trình đều có một lượng system time như nhau trước khi nó nhường chỗ cho một tiến trình khác, nếu một tiến trình cần nhiều hơn, có thể sử dụng function `nice` để tăng thếm system time cho tiến trình đó.

Trong vài trường hợp, bạn phải tự dừng một tiến trình nào đó, có thể xảy ra trong trường hợp tiến trình ko phản hồi, và nó có thể làm ảnh hưởng đến tiến trình khác. Để dùng một tiến trình, Linux kernel sẽ tìm tiến trình cha của tiến trình cần được dừng lại và thông báo là tiến trình con này cần được dừng. Trong trường hợp bình thường, một tiến trình cha sẽ luôn tồn tại trước khi mọi tiến trình con của nó được dừng lại. Trong trường hợp tiến trình cha bị dừng trước khi tiến trình con được dừng thì tiến trình con đó không thể dừng và trở thành zomebie process.

Có 2 cách để một tiến trình có thể xử lý nhiều task. Cách thứ nhất là khởi chạy một instance mới của tiến trình đó để xử lý request tiếp theo. Trong trường hợp này, ta sẽ thấy tiến trình được list lại nhiều lần khi sử dụng lệnh `ps aux`. Cách thứ 2 là là một tiến trình master được khởi chạy với một thread, khi có một request mới thì một thread mới được khởi chạy.

### 2. Monitoring process
Công cụ hữu ích để để quản lý tiến trình là `top`. Cách sử dụng đơn giản là gõ câu lệnh `top`vào terminal. Về cơ bản `top` sẽ hiển thị thông tin về tiến trình và sẽ được làm mới sau mỗi 5s. Kết quả sẽ được chia làm 2 phần,  phần đầu ở phía bên trên thể hiện thông tin về hệ thống, phần phía dưới hiển thị thông tin cho mỗi tiến trình đang chạy.
![](https://github.com/oLeVanNinh/javascipt/blob/master/report/04-2020/images/top.png)

Đối với phần thông  tin về hệ thống những thông tin cần lưu ý là:
- Thời gian khởi chạy và users
- Thống kê thông tin sử dụng CPU
- Tổng quan các task đang chạy: số lượng các task đang chạy, đang sleep, đã dừng và zombie
- Thông tin về memory sử dụng

Đối với phần thông tin cho tiến trình bên dưới, các thông tin thường được lưu ý là:
- PID: hay còn hiểu là process id, mỗi tiến trình sẽ có một unique id
- User: tên của user chạy tiến trình đó
- PR: chỉ ra độ ưu tiên của tiến trình, tiến trình có độ ưu tiên cao hơn sẽ được chạy trước
- NI: chỉ ra độ nice của một tiến trình, tiến trình có cùng độ ưu tiên nhưng nice thấp hơn sẽ chạy trước
- %MEM
- %CPU
- TIME: tổng thời gian tiến trình sử dụng CPU kể từ khi bắt đầu
- COMMAND: câu lệnh được sử dụng để chạy tiến trình

Trong trường hợp muốn quản lý tiến trình từ scrip thì `ps` là công cụ hữu ích trong trường hợp này. `ps` có nhiều option nhưng option thường được sử dụng là `ps aux`. Phần giá trị nhất của `ps` là sẽ hiển thị tất cả các tiến trình mà kết quả output ta có thể sử dụng `grep` để tìm thông tin của tiến trình mà mình cần. Tưởng tượng bạn thấy có zoombie process khi sử dụng `top`, để tìm ra tiến trình đó ta có thể sử dụng `ps aux | grep defunc`

### 3. Quản lý tiến trình
Công việc quản lý tiến trình thường được làm nhất là dừng các tiến trình. Nếu sử dụng `kill` command, ta có thể gửi tín hiệu (signal) đến tiến trình, về cơ bản bằng việc gửi tín hiệu đến tiến trình, ta  đã gửi cho tiến trình lệnh mà nó không thể bỏ qua. Một số tín hiệu thường được sử dụng:

|Tín hiệu   | Giá trị   | Comment   |
|---|---|---|
| SIGHUB  | 1  | Force một tiến trình đọc lại configuration mà ko dừng tiến trình đó, sử dụng trong trường hợp muốn update file configuration  |
| SIGKILL | 9  | Sử dụng brute force để kết thúc tiến trình, có rủi ro sẽ mất dữ liệu và chỉ sử dụng trong trường hợp tiến trình ko dừng khi sử dụng signal 15  |
| SIGTERM  | 15  | Yêu cầu dừng một tiến trình, và trình có thể ignore yêu cầu này  |
| SIGUSR1  | 30  | Gửi tín hiệu dừng định nghĩa bởi user  |


#### Dừng tiến trình với kill
Câu lệnh `kil`là câu lệnh phổ biến để gửi tín hiệu đến tiến trình, và nó rất dễ để sử dụng. Để thực hiện câu lệnh này ta cần truyền vào 2 parameter là tín hiệu và ID của tiến trình. Nếu ko truyền vào tín hiệu thì câu `kill` sẽ mặc định là sử dụng tín hiệu là 15 để yêu cầu kết thúc tiến trình.

Câu lệnh `kill` không làm việc với tên của tiến trình mà chỉ làm việc với ID của tiến trình, nghĩa là ta phải tìm ID của tiến trình mà muốn gửi tín hiệu đến, có thể làm việc đó với câu lệnh `ps` hoặc `pgrep`.
Có thể sử dụng câu lệnh `kill` với danh sách các ID:
```
kill 3019 3021 3022
```
#### Dừng tiến trình với killall
So với câu lệnh `kill` thì `killall` là câu lệnh đa năng hơn, đặc biệt trong  trường hợp nó cho phép ta làm việc với vài argument để chỉ định cụ  thể tiến trình muốn dừng. Một vài option hữu ích khi sử dụng `killall`:
- -I: option này dùng trong trường hợp ignore case nghĩa là bỏ qua phần biệt in hoa và in thường
- -i: interactive mode, cho phép xác nhận trước khi kil process
- -r: sử dụng với regular expression, hữu ích trong trường hợp ta ko có tên chính xác của process
- -u: option này chỉ dừng các tiến trình được sở hữu bởi user.

Ví dụ nếu muốn dừng tất cả các tiến trình đang chạy bởi user cloud ta dùng câu  lệnh:
```
killall -u cloud
```
Trường hợp muốn kết thúc tất cả tiến trình  `http`:
```
killall http
```
