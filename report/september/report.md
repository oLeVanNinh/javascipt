## 1. Controlling access với getter và setter.
Javascript là một ngôn ngữ hướng đối tượng, nhưng hướng đối tượng theo cách `javascript và phần còn lại của thế giới`. Javascript không hỗ trợ class cũng như
accessiblity như `public private` như trong các ngôn ngữ OOP khác. Mọi thuộc tính của đối tượng trong javascript đều có thể truy cập và thay đổi.
```javascript
function Ninja(level) {
  this.level = level
}

const ninja = new Ninja(100)
```
Ở đây ta định nghĩa Ninja constructor và tạo object ninja từ contructor với thuộc tính `level`. Nếu muốn thay đổi giá trị của thuộc tính ta có thể truy cập và
gán trực tiếp:
```javascript
ninja.level = 20;
```
Cách trên thuận tiện nhưng phát sinh một số vấn đề như sau:
- Ta muốn đảm bảo rằng thuộc tính `level` luôn nhận vào một giá trị hợp lệ, ví dụ để đảm bảo luôn gán một giá trị là một số thay vì là một chuỗi như `ninja.level = 'awesome'`
- Ta ta muốn log lại mọi sử thay đổi của thuộc tính `level`

Trong trường hợp này ta có thể xử lý bằng cách tạo một `private varialbe` và giá trị của sử dụng `getter` và `setter` để đọc và ghi cho `variable`. Thật ra bản
chất của `private` trong javascript là bao đóng `variable` đó trong một `scope` và khi đó, `private variable` chỉ được nhìn thấy trong `scope` đó và không thấy được từ phía bên ngoài.
Khi đó ta có thể làm như sau:
```javascript
function Ninja() {
  let _level // Định nghĩa biến, underscore là convention và được hiểu là prive

  this.getLevel = function() {   // Getter
    return _level;
  }

  this.setLevel = function(level) { // Setter
    _level = level;
  }
}

const ninja = new Ninja();
ninja.setLevel(100);
ninja.getLevel(); // 100
```
Nếu muốn log tất cả giá trị thay đổi ta chi việc mở rộng `getLevel` và `setLevel` function:
```javascript
...
  this.getLevel = function() {   // Getter
    console.log('Return level value')
    return _level;
  }

  this.setLevel = function(level) { // Setter
    console.log(`Level value change from ${_level} to ${level}`)
    _level = level;
  }
...
````

## 2. Định nghĩa `getter` và `setter`
Trong javascript, có 2 cách để định nghĩa `getter` và `setter`:
- Khi khởi tạo object bằng cách chỉ định trực tiếp với 2 từ khóa `get` và `set`
- Sử dụng hàm built-in `Object.defineProperty`

Cách 1: sử dụng keyword `get` và `set`:
```javascript
// Khởi tạo đối tượng sử dụng phương thức object literal:
const ninja = {
  level: 0,

  get getLevel() {
    return this.level;
  },

  set setLevel(level) {
    this.level = level
  }
}

ninja.setLevel = 200;
ninja.getLevel // 200
```

Cách 2: Sử dụng `Object.defineProperty`:
Trong cách ở phía trên, object được tạo ra bằng cách sử dụng literal nên thuộc tính của `level` được xem như là `public` có nghĩa là có thể truy cập và thay đổi trực
tiếp từ bên ngoài, bằng cách sử dụng  `defineProperty` ta sẽ implement `getter` và `setter` cho thuộc tính `private`
```javascript
function Ninja() {
  let _level = 0;

  Object.defineProperty(this, 'skillLevel' {
    get: () => {
      console.log('Get method is called');
      return _level;
    },
    set: (value) => {
      console.log('Set method is called');
      _level = value;
    }
  })
}

const ninja = new Ninja();
ninja._level // undefined
ninja.skillLevel = 10; // Set method is called
ninja.skillLevel // Get method is called; 10
```
Trong ví dụ trên, ta định nghĩa constructor `Ninja` tương tự như ví dụ phần mở đầu, với `_level private variable`, tiếp theo khi object với được khởi tạo
 thì nó được `reference` bởi `this` keyword, tiếp đó ta định nghĩa thuộc tính `skillLevel` bằng cách sử dụng hàm buil-in `Object.defineProperty`:
```javascript
  Object.defineProperty(this, 'skillLevel' {
    get: () => {
      console.log('Get method is called');
      return _level;
    },
    set: (value) => {
      console.log('Set method is called');
      _level = value;
    }
  })
```
Bởi vì ta muốn control được `private varible` nên ở đây ta chỉ định cụ thể cả `get` và `set`, `get` và `set` được định ngĩa bở `Object.defineProperty` sẽ có chung scope với
`private` _level, cả 2 phương thức đều tạo một `closure` quanh `private variable` và ta chỉ có thể nhìn thấy `private variable` qua 2 phương thức trên.

Bằng cách control `variable` qua getter và setter ta có thể dễ dàng theo dõi sự thay đổi của `private variable` bằng cách loggin hay thiết lập varidation cho `variable`
chỉ bằng việc thêm vào và mở rộng `setter` và `getter` method. Ví dụ như ta có thể thêm validation:

```javascript
...
  set: value => {
    if(!Number.isInteger(value)){
    throw new TypeError("Skill level should be a number");
  }
  _level = value;
  }
...

ninja.skillLevel = 'awesome' // Throw expection
```
