# 1. Giới thiệu Puppeteer.
Trước khi nói về puppeteer ta nhắc đến khái niệm headless browser: dịch cho vui thì là browser không đầu nghĩa là browser chạy mà không cần giao diện.  Khi đó để giao tiếp với browser này chúng ta phải thao tác qua command-line interface.<br/>
Puppeteer là một thư viện của NodeJS cung cấp các API để làm việc và thao tác với Chrome hay Chromium thông qua code, chạy ở chế độ mặc định là headless. Tất cả những thao tác có thể thực hiện bằng tay trên các trình duyệt này đều có thể thực hiện trên Puppetter.<br/>
Vài thứ có thể thực hiện với Puppeteer:
 * Tạo ảnh chụp màn hình và PDF của page
 * Tự động submit form, tạo các pre-rendered content
 * Tạo môi trường automation testing
 
Chúng ta sẽ sử dụng Pupperteer để crawl ảnh từ page có sẵn.
# 2. Tiến hành
Để crawl ta sử dụng 3 thư viện của NodeJS là fs, puppetter và image-downloader. Tiến hành cài đặt:
```
npm i --save puppeteer
npm i --save fs
npm i --save image
```
Khởi tạo và require các thư viện tương ứng
```javascript
const puppeteer = require('puppeteer');
const dowload = require('image-downloader');
const fs = require('fs');
const dir = './images-group';
```
Ta sẽ lưu ảnh dowload về một folder, ta sẽ kiểm tra xem folder đó có tồn tại hay không, nếu không thì tạo folder đó:
```javascript
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}
```
Trang tiến hành crawl là một group kín nên ta sẽ phải tiến hành đăng nhập,và truy cập vào phần hình ảnh của group đó, phần này làm cũng khá đơn giản, làm như bình thường khi ta thao tác bằng tay trên browser là truy cập vào trang chủ `fb.com` sau đó nhập email và password, đăng nhập và đi đến page photos, implement bằng code với puppeteer ta sẽ làm như sau:
```javascript
(async () => {
  const ID = {
    email: username,
    password: password
  }
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://facebook.com');
  await page.type('#email', ID.email);
  await page.type('#pass', ID.password);
  await page.evaluate(() => {.
    document.querySelectorAll("input[data-testid='royal_login_button']")[0].click();
  })
  await page.waitFor(1000)
  await page.goto("https://www.facebook.com/groups/gaixinhchonloc/photos/")
})
```
Giải thích một chút:
* ` puppeteer.launch()` hàm này mở browser
* `browser.newPage()` mở một page mới bằng browser
* `page.goto` visit trang với địa chỉ url có trước
* `page.evaluate` đánh giá đoạn script bên trong và thực thi như trong console của trình duyệt.
* ` page.waitFor` dừng lại đợi một khoảng thời gian.
Đến phần này ta đã đăng nhập thành công và visit đến phần photos của group. Đến phần này ta có lưu ý như sau: phần ảnh hiển thị trên lưới grid dưới dạng background-image nên khi get url của ảnh này ta chỉ thu được ảnh dạng kích thước nhỏ, nên để thu được ảnh với kích thước đầy đủ ta cần tiến hành mở từng ảnh một sau đó dowload. Vậy cách làm ở đây sẽ là sử dụng một array để lưu trữ link đến từng ảnh một sau đó lần lượt dùng mở từng từng link và download từng ảnh về bằng image-downloader. Để get toàn bộ src ta viết một function như sau:
```javascript
async function getSrc(page) {
  let srcs = await page.evaluate(() => {
    const links = document.querySelectorAll('tbody > tr > td > div.itemsPlutoniumRedesign > a'); // select toàn bộ link
    return [].map.call(links, a => a.href) // lấy thuộc tính href
  })
  srcs = await srcs.filter(a => !a.match("user_video_tab")); // loại bỏ các thẻ video.
  return srcs;
}
```

Để download cũng khá đơn giản dùng một vòng lặp qua toàn bộ các link get được, mở các link, lấy link ảnh và download:
```javascript
const srcs = await getSrc(page);

  for (var i in srcs) {
    let a = srcs[i];
    // đi đến page a
    await page.goto(a);
    // đợi trình duyệt load.
    await page.waitFor(1500);

   // get thuộc tính href của ảnh
    const image_url = await page.evaluate(() => {
      const element = document.querySelector('img.spotlight');
      let url;
      if (element === null) {
        url = "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png"
      }
      else {
        url = element.src;
      }
      return url;
    });

// download về bằng image-downloader
    await dowload.image({
      url: image_url,
      dest: dir
    })
  }
```
