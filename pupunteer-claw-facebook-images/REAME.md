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
