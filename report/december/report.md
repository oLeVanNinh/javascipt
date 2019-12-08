# Sử dụng generator function Javascript
## 1. Generator function
Generators là một kiểu function mới được hỗ trợ trong chuẩn ES6, hoàn toàn khác so với những function thông thường. Generator function là function sinh ra một
chuỗi các giá trị, nhưng không phải tại một thời điểm như những function thông thường khác mà trên mỗi lần được gọi hay request đến. Ta phải thực hiện gọi
trực tiếp generator function cho đến khi function không còn giá trị mới để trả về nữa, generator function cho phép tạm dừng (suspend) và tiếp tục quay trở lại
thực thi (resumes) tại vị trí mà function tạm dừng. Example:
```javascript
function* OrderGenerator() {
  yield "One";
  yield "Two";
  yield "Three";
}
```
 Để thực hiện khai báo và sử dụng generator function, ta thêm kí hiệu `*`(askterisk) vào sau từ khóa function, việc này cho phép ta sử dụng từ khóa `yield` bên trong function. Trong ví dụ trên ta khởi tạo `OrderGenerator`, function này sử lý sinh ra một chuỗi các giá trị `One, Two, Three`. Để lấy ra chuỗi giá trị này, khác với function thông thường chỉ việc gọi `FunctionName()` thì ta sử dụng một vòng lặp như sau:
```javascript
for (let order of OrderGenerator()) {
  console.log(order)
}

// One
//  Two
//  Three
// undefine
```
Phía bên phải của vòng `for-of` ta đặt kết quả từ việc gọi generator function, nhưng để ý kĩ hơn thì trong phần body của `OrderGenerator` không hề sử dụng từ khóa return để trả lại gía trị khi function được gọi, nếu là function bình thường thì khi ko sử dụng return sẽ mặc định trả về giá trị là `undefined`, nhưng trong trường hợp này điều đó không xảy ra, trên thực tế khi gọi generator function thay vì excute function thì nó khởi tạo một object được gọi là iterator. Trong ví dụ trên nếu không sử dụng vòng lặp để lấy giá trị của generator function thì ta sẽ làm như sau:
