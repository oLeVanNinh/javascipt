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
```javascript
function* OrderGenerator() {
  yield "One";
  yield "Two";
}

const orderGenerator = OrderGenerator();

const result1 = orderGenerator.next();
console.log(result1.value); // One

const result2 = orderGenerator.next();
console.log(result2.value) // Two
```
Qua ví dụ trên khi ta gán `const orderGenerator = OrderGenerator();` thì một iterator được khởi tạo, khi
gọi `result1 = weaponsIterator.next();` phần code phía trong iterator được thực thi đến khi gặp từ khóa yield, nó trả về kết quả hiện tại và được bao đóng trong 1 object
```javascript
result1 // {value: "One", done: false}
```
Qúa trình cứ tiếp diễn cho đến khi không còn phần code có thể thực thi bên trong generator function, khi đó kết quả cuối cùng có dạng
```javascript
{value: undefined, done: true}
```
## 2. Sử dụng generator function
### Sử dụng generator để sinh ID
Khi khởi tạo object, thông thường thì mỗi unique id sẽ được gán cho object đó. Cách đơn giản nhất là
sử dụng biến đếm global nhưng làm như thế thì sẽ làm cho code trở lên lộn xộn, cách tốt hơn là sử dụng generator function để sinh ID như sau:
```javascript
function* IdGenerator() {
  let id = 0;
  while(true) {
    yield ++id;
  }
}

const idIterator = IdGenerator();
const obj1 = { id: idIterator.next().value };
const obj2 = { id: idIterator.next().value };
const obj3 = { id: idIterator.next().value };
```
Thay vì sử dụng biến global ta chỉ việc sử dụng biến local id, đại diện cho biến đếm ID. Vì chỉ là biến local nên ta ko sợ việc nó bị thay đổi ngoài bởi code của người khác mà chỉ có thể thay đổi bên trong function. Sử dụng từ khóa `yield` bên trong vòng lặp vô hạn cộng với khả năng `suppend` và `resume` của genator function cho phép ta khởi tạo `id` mới mỗi khi `next` được gọi đối với `iterator generator`
### Sử dụng generator để duyệt cây DOM
Webpage được xây dựng dưa trên DOM, cấu trúc dưới dạng cây gồm các HTML node, ở mỗi node ngoại trừ document root node, mỗi node đều chỉ có một node cha và có thể không hoặc có nhiều node con. Bởi vì DOM là thành phần cơ bản của phát triển web, phần lớn code dựa trên việc duyệt các node DOM. Một trong những cách dễ nhất để thực hiện là sử dụng đệ quy và thăm từng node trên cây DOM. Giả sử thành phần HTML:
```html
<div id="subTree">
  <form>
    <input type="text"/>
  </form>
  <p>Paragraph</p>
  <span>Span</span>
</div>
<script>
  function t]traverseDOM(element, callback) {
    callback(element);
    element = element.firstElementChild;
    while (element) {
      traverseDOM(element, callback);
      element = element.nextElementSibling;
    }
  }
  const subTree = document.getElementById("subTree");
  traverseDOM(subTree, function(element) {
    console.log(element.nodeName);
  }
</script>
```
Trong ví dụ trên, ta sử dụng một function được gọi đệ quy để duyệt qua toàn bộ các node con của element có id là `subtree`, trong quá trình xử lý sẽ in ra toàn  bộ các kiểu node được thăm, trong trường hợp này thì output là DIV , FORM , INPUT , P , và SPAN .
Trường hợp này, sử dụng generator function ta có thể xử lý như sau:
```javascript
function* DomTraversal(element){
  yield element;
  while (element) {
    yield* DomTraversal(element);
    element = element.nextElementSibling;
  }
}

const subTree = document.getElementById("subTree");
for(let element of DomTraversal(subTree)) {
  console.log(element.nodeName);
}
```
Cũng tương tự như ví dụ ban đầu, ta sử dụng một function được gọi để quy để thăm các node của cây DOM, nhưng bằng việc sử dụng generator function ta tránh được syntax sử dụng khi gọi callback liên tục, trường hợp callback lồng nhau quá nhiều dẫn đến tình trạng callback hell. Kết quả khi duyệt các node ta chỉ việc tạo một iterator object là lần duyệt qua tất cả các gía trị khả dĩ của object đó, cho đến khi duyệt hết toàn bộ.
