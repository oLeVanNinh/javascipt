![](https://github.com/oLeVanNinh/javascipt/blob/master/post/images/first.png)
# What is this?
Làm việc với javascript chắc hẳn bản từng làm sử dụng "this" (mặc dùng js sida nhưng nó càng ngày được sử dụng rộng rãi).Nếu bạn từng nghĩ "this" là trỏ đến chính nó thì bạn nên đọc qua bài viết này, còn nếu không thì bạn vẫn nên đọc qua bài viết này =))This là keyword thường gặp trong javascript, dễ gây nhầm lẫn, để hiểu về this, hãy cũng xem xét qua ví dụ sau đây:
> Although John is handsome, he still F.A
Trong câu trên, John là đối tượng được đề cập, he ở đây dùng để chỉ John, nếu thay "he" bằng "John" thì nghĩa của câu cũng không có gì thay đổi cả, John vẫn là thằng F.A. "This" cũng được hiểu theo nghĩa tương tự như trường hợp của "he", nó sẽ refer đến một đối tượng.
```javascript
const name = "John";
const function showName() {
  console.log(this.name)
}

showName();   // "John"  this được gọi bởi object window

const ngoctrinh = {
  name: "Ngoc Trinh",
  showName: function() {
    console.log(this.name);
  }
}

ngoctrinh.showName();  // "Ngoc Trinh" this được gọi bởi object ngoctrinh

const thuytop = {
  name: "Thuy Top"
}

ngoctrinh.showName.apply(thuytop); // "Thuy Top" this refer đến object thuytop,
```

# Một số lỗi thường gặp khi sử dụng "this"
![](https://github.com/oLeVanNinh/javascipt/blob/master/post/images/second.jpg)
## 1. Khi hàm sử dụng this được truyền vào như một callback.
Giả sử ta có một button, mỗi khi click vào ta cần sử lí event click:
```javascript
$('button').click(ngoctrinh.showName);
```
Bạn click vào cái button, mở chrome developer tooth, mở console, click lia lịa vào cái button và chờ đợi Ngoc Trinh xuất hiện trên màn hình, nhưng đáp lại bạn chỉ làm chỉ là khoảng trắng mờ mịt, và những con số cứ không ngừng tăng lên theo số lần click của bạn. Bạn ôm đầu và tự nhủ: " WTF? ". Nếu bạn để ý kĩ một chút thì hàm showName được định nghĩa trong object ngoctrinh nhưng gọi hàm showName lúc này chính là cái button mà bạn click, this lúc này không phải chỉ đến object ngoctrinh mà chính là cái button mà bạn click vào. Để giải quyết cho trường này ta sử dụng bind để trói showName với ngoctrinh:
```javascript
 $('button').click(ngoctrinh.showName.bind(ngoctrinh)
```
## 2. Khi this bên trong closure
Sơn Tùng là người rất thích xem phim, đặc biệt là JAV (ý mình ở đây là Japan Anime), Sơn Tùng có một list các Idol và Sơn Tùng muốn in ra danh sách các idol đó:
```javascript
  const sontung = {
    name: "Son Tung",
    idols: ["Aino Kishi", "Alice Miyuki", "Aoi Shirosaki", "Shino Megumi"],
   
    showIdols: function() {
      this.idols.forEach(function(idol) {
        console.log(`${idol} is idol of ${this.name}`);
        })
      }
    }
    
    sontung.showIdols(); // hàm chạy sai, Sơn Tùng méo thấy tên của mình -_-
```
Vấn của Sơn Tùng là trong closure là biến this của outer function không thể truy cập bởi inner function, mà chỉ có thể truy cập chính nó, nghĩa là hàm callback của forEach sẽ không truy cập thuộc tính name của sontung Object, mà chỉ có thể truy cập được các biến định nghĩa trong showIdols function. Solution trong trường hợp này là :
```javascript
// solution 1: gán this cho một biến trong showIdols để callback trong forEach có thể access
  const sontung = {
    name: "Son Tung",
    idols: ["Aino Kishi", "Alice Miyuki", "Aoi Shirosaki", "Shino Megumi"],
   
    showIdols: function() {
      const  sontungName = this;
      this.idols.forEach(function(idol) {
        console.log(`${idol} is idol of ${sontungName.name}`);
        })
      }
    }
    
  sontung.showIdols(); // hàm chạy đúng
    
   // solution 2: Sử dụng arrow function cho callback:
  const sontung = {
    name: "Son Tung",
    idols: ["Aino Kishi", "Alice Miyuki", "Aoi Shirosaki", "Shino Megumi"],
    showIdols: function() {
      this.idols.forEach((idol) => {
        console.log(`${idol} of ${this.name}`)
      })
      }
    }
    
sontung.showIdols();
```
## 3.Trường hợp hàm được gán cho một biến
Trường hợp này ít khi xảy ra, đó là khi có một hàm và hàm đó được gán cho một biến. Sau khi gọi thì hàm chạy không đúng như mong đợi. Cùng xem lại ví dụ cho trường hợp 1:
```javascript
const ngoctrinh = {
  name: "Ngoc Trinh",
  showName: function() {
    console.log(this.name);
  }
}

const showName = ngoctrinh.showName;
showName(); // Hàm chạy ko đúng, vì object gọi hàm lúc này là window
```
Solution trong trường hợp này cùng giống trường hợp 1, ta sử dụng bind().
```javascript
const showName = ngoctrinh.showName.bind(ngoctrinh);
```
