## Scope là gì ?
> Scope refers to where variables and functions are accessible, and in what context it is being executed.
> 
  

-----

 Hiểu đơn giản thì scope là khả năng truy cập của một biến, hay hàm, trong cái context mà nó được thực thi. Ngoài context đó thì biến và hàm không thể nhìn thấy trực tiếp được nữa. Mỗi ngỗn ngữ sẽ có đặc trưng khác nhau về scope. Hầu hết ngôn ngữ với syntax C có block scope nghĩa là biến trong một block sẽ không thể nhìn thấy bên ngoài block, trong đó không bao gồm thằng Javascript mặc dù nó cũng có block syntax. Scope của Javascript là function scope nghĩa là một biến trong một function sẽ có thể truy cập mọi nơi trong function nhưng không thể nhìn thấy bên ngoài function đó. Let's give a try:
```javascript
var foo = function() {
  var a = 1, b = 2  // a = 1, b = 2
  
  var bar = function() {
    var b = 3, c = 3;
    a += b;  // a = 4, b = 3, c = 3
  };
// a = 1, b = 2, c undefined
  bar();
// a = 4, b = 2
};
```
Trong ví dụ trên ta thấy function bar() không có local varible a nhưng nó có thể access từ foo() function, ta thấy function nested bên trong function được iherit varible từ function đó. Từ đây sinh ra khái niệm lexical scope. Mặt khác, local varible b trong bar() được sử dụng ở phạm vi bên trong function này thay vì local varible b từ function foo().
## Closure
> Closure is when a function is able to remember and access its lexical scope even when
that function is executing outside its lexical scope
> 
Dịch đại khá là closure là khi một function có khả năng ghi nhớ và truy cập lexical scope của nó ngay cả khi function được thực thi bên ngoài lexical scope của nó.Hơi khó hiểu nhỉ. Let's try:
```javascript
function start(x){
  function increment(y){
    return x + y;
  }
  
  return increment
}

var myFunc = start(2);
alert(myFunc(5)); // 7
alert(start(2)(5)); // 7
```
Ở ví dụ trên, sau khi excute start() với tham số truyền vào là 2, chúng ta gán giá trị nó trả về (inner function increment) cho biến myFunc, và sau đó gọi myFunc(5), khi đó function increment() được excute, tức là function  increment được excute bên ngoài lexical scope của nó. Bình thường,  khi function start() được excute thì mọi inner scope của nó được giải phóng. Nhưng myFunc vẫn excute trả về kết quả là 7. Nghe có vẻ mâu thuẫn nhỉ? Điều này được giải thích bởi closure, khi closure được tạo, nó sẽ tạo một bao đóng, bao gồm context tại thời điểm closure được khởi tạo. Để hiểu cho đơn giản, ta xét trong trường hợp này, khi start được excute với giá trị  x = 2, sẽ trả về một function, được bao đóng lại với context hiện tại là 2. Khi myFunc được excute với giá trị truyền vào là 5, nhờ closure nó vẫn có gía trị biến x = 2, sẽ trả về giá trị là 7. 
      ![](https://images.viblo.asia/2b666894-facd-4050-ad48-59259fdd52ab.png)
## Loop và closure
Hãy xem thử ví dụ dưới đây:
```javascript
for (var i=1; i<=5; i++) {
  setTimeout(function() {
    console.log( i );
  }, i*1000 );
}
```
Nhìn đoạn code trên chắc phải bạn đoán là sẽ in ra các giá trị 1, 2, ... 5 trên màn hình console sau mỗi giây ko? Nếu đúng vậy thì bạn đang mắc lỗi ( bản thân mình cũng từng mắc lỗi này khi làm project trên freecodeCamp), thực tế console của bạn chỉ in ra 6 mỗi giây trong 5s. Điều này được giải thích như sau: 
1. Điều kiện chấm dứt của vòng lặp và x > 5 và giá trị đầu tiên là 6
2. Trong setTimeout, function là callback được excute sau vòng lặp, kể cả sau khi thời gian được set là 0, callback vẫn chạy sau khi vòng lặp hoàn thành, do đó chúng ta nhận được kết quả là 6.
Giải pháp: tạo ra "captures variales" của i tại mỗi thời điểm của vòng lặp.Trong trường hợp này ta sử dụng IIFE pattern. Có thể đọc thêm tại [IIFE.](https://medium.com/@vnknowledge/javascript-c%C4%83n-b%E1%BA%A3n-gi%E1%BB%9Bi-thi%E1%BB%87u-v%E1%BB%81-bi%E1%BB%83u-th%E1%BB%A9c-iife-606c4567e7ec)
```javascript
for (var i=1; i<=5; i++) {
  (function() {
    var j = i;
    setTimeout(function(){
      console.log(j);
    }, j*1000)
  })();
}
```
Với ES6 có thể sử dụng [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let).
```javascript
for (let i=1; i<=5; i++) {
  setTimeout(function() {
    console.log( i );
  }, i*1000 );
}
```

## Tham khảo: 
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
*   [You don't know js](https://www.amazon.com/You-Dont-Know-JS-Closures-ebook/dp/B00IV3J2A2/ref=sr_1_2?ie=UTF8&qid=1523812721&sr=8-2&keywords=you+don%27t+know+js)
*   [Closure và scope trong javascript - Kipalog](https://kipalog.com/posts/Closure-va-scope-trong-javascript)