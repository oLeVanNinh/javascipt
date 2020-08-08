# Làm quen với NGNIX
## 1. Giới thiệu về NGINX
NGINX là một phần mềm viết vào năm 1999 và mã nguồn mở vào năm 2004 bởi Igor Sysoev. Ban đầu ngĩn được viết để giải quyết vấn đề [C10K problem](https://en.wikipedia.org/wiki/C10k_problem) vào thời điểm đó khi các web server gặp khó khăn trong việc xử lý số lượng request lớn tại cùng 1 thời điểm (10K). Sau thời điểm được open-source, NGINX tiếp tục được phát triển bới cộng đồng và công ty NGINX được thành lập và bản NGINX PLUS được phát triển để thương mại với nhiều [tính năng](https://www.nginx.com/products/nginx/#compare-versions) hơn

Về cơ bản NGINX được sử dụng mới những mục đích chính sau:
+ Sử dụng để làm web server
+ Sử dụng làm reverse proxy
+ Sử dụng làm load balancer

So sánh NGINX và Apache
| NGINX      | Apache |
| :---        |    :----:   |
| Sử dụng các lệnh chỉ thị để cấu hình  | Sử dụng các lệnh chỉ thị để cấu hình |
|  Chỉ sử dụng 1 process với nhiều worker  | Chạy nhiều process     |
|Hỗ trợ động modules bên thứ ba|Hỗ trợ động modules bên thứ ba|
|Performance tương đương với Apache khi dùng nội dung động (dynamic content)|Performance tương đương với NGINX khi dùng nội dung động (dynamic content)|
|Performance tốt hơn Apache khi dùng đối vời file tĩnh|Performance thấp hơn NGINX khi dùng đối vời file tĩnh|

## 2. Cấu hình mặc định của NGINX
Cấu hình mặc định của NGINX được cài đặt bở file lưu trữ trong thư mực `/etc/nginx/nginx.conf`:
```conf
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
	worker_connections 768;
}

http {
	sendfile on;
	tcp_nopush on;
	tcp_nodelay on;
	keepalive_timeout 65;
	types_hash_max_size 2048;

  ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE
	ssl_prefer_server_ciphers on;

  access_log /var/log/nginx/access.log;
	error_log /var/log/nginx/error.log;

	include /etc/nginx/conf.d/*.conf;
	include /etc/nginx/sites-enabled/*;
}
```
NGINX sử dụng các chỉ thị (directive) để thiết lập giá trị các thuộc tính của cấu hình, làm việc với NGINX nghĩa là phải cấu hình server NGINX chạy đúng với nhu cầu sử dụng thực tế. Dưới đây là directive cấu hình mặc định:
+ `user`: 
