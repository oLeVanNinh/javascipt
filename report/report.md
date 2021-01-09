## Viết code với hiệu năng tốt trong Ruby on Rails như thế nào?
Tại Shopify, chúng tôi sử dụng Ruby on Rails cho hầu hết các dự án của mình.  Đối với cả Rails và Ruby, luôn bị cộng đồng kì thị vì performance kém
Bạn sẽ thường xuyên tìm thấy những ví dụ về các cá nhân (và toàn bộ công ty) tìm cách tránh xa Ruby on Rails và tìm thứ gì đó tốt hơn. Mặt khác, có rất nhiều
người đã sử dụng Ruby on Rails và tìm thấy thành công, ngay cả ở quy mô của chúng tôi, xử lý hàng triệu yêu cầu mỗi phút (RPM)
Một phần thành công của Shopify với Ruby on Rails là sự nhấn mạnh vào việc viết fast code. Nhưng, làm thế nào để bạn thực sự viết được fast code? Nói chung,
đó là bối cảnh nhạy cảm với vấn đề bạn đang cố gắng giải quyết. Hãy nói về một số cách để bắt đầu viết fast code trong Active Record, Rails và Ruby.

## Hiệu năng của Active Record
Active Record là ORM (Object Relational Mapper) mặc định của Rails. Active Record được sử dụng để tương tác với cơ sở dữ liệu của bạn bằng cách tạo và thực thi
các câu lệnh Structured Query Language (SQL). Có nhiều cách để truy vấn khối lượng lớn một các kém hiệu quả. Dưới đây là một số gợi ý để giúp giữ cho các truy vấn
hiệu quả hơn.

### Biết khi nào thì câu lệnh SQL được thực thi.
Active Record  thực hiện các câu query theo kiểu lazy. Để thực hiện truy vấn hiệu quả, bạn phải biết khi nào thì truy vấn của mình được thực hiện. Phương thức
tìm kiếm, tính toán, gọi các quan hệ sẽ làm các câu truy vấn được thực thi. Dưới đây là ví dụ:
```ruby
post.comments << user.comments.build
#    (0.1ms)  begin transaction
#  Comment Create (0.4ms)
#  INSERT INTO "comments" ("created_at", "updated_at", "post_id", "user_id")
#  VALUES (?, ?, ?, ?)  [["created_at", "2019-07-11 22:16:43.818858"], ["updated_at", "2019-07-11 22:16:43.818858"], ["post_id", 1], ["user_id", 2]]
#    (6.9ms)  commit transaction
```
Đây là đoạn code đang thêm một comment vào một post và tự động lưu nó vào cơ sở dữ liệu. Điều này ko rõ ràng là nó tự động tạo thêm comment với, sau đó tự động thêm comment đó vào post, rồi lưu tất cả vào database trong một transaction. Những loại gotchas kiểu này sẽ dễ được phát hiện hơn thông qua tài liệu và kinh nghiệm

### Chọn ít hơn nếu có thể
Một cách khác để truy vấn hiệu quả là chỉ chọn những gì bạn cần. Mặc định, Active Record chọn tất cả các cột trong trong SQL với  SELECT *. Thay vào đó, bạn có thể tận dụng `SELECT` và `PLUCK` kiểm soát các câu lệnh đã chọn của mình:

```ruby
Blog.select(:id)
#   Blog Load (0.2ms)  SELECT "blogs"."id" FROM "blogs" LIMIT
# => #<ActiveRecord::Relation [#<Blog id: 1>, #<Blog id: 2>, #<Blog id: 3>, #<Blog id: 4>, ...]>

Blog.pluck(:id)
#   (0.1ms)  SELECT "blogs"."id" FROM "blogs"
# => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```
Ở đây truy vấn lấy ra tất ID của tất cả các blog. Lưu ý `select` trả về  Active Record Relation object còn `pluck` thì trả về mảng chúa các ID

## Quên đi Query Cache
Bạn có biết rằng nếu bạn thực thi cùng một SQL trong vòng đời của một request Active Record sẽ chỉ truy vấn cơ sở dữ liệu một lần? Query Cache à một trong những tuyến phòng thủ cuối cùng chống lại việc thực thi SQL ko cần thiết. Nó trông như thế này:

```ruby

Blog Load (0.2ms)  SELECT "blogs".* FROM "blogs" WHERE "blogs"."id" = ? LIMIT ?  [["id", 1], ["LIMIT", 1]]
CACHE Blog Load (0.0ms)  SELECT "blogs".* FROM "blogs" WHERE "blogs"."id" = ? LIMIT ?  [["id", 1], ["LIMIT", 1]]
CACHE Blog Load (0.0ms)  SELECT "blogs".* FROM "blogs" WHERE "blogs"."id" = ? LIMIT ?  [["id", 1], ["LIMIT", 1]]

```
Trong ví dụ, các câu lệnh `SELECT` tiếp theo sử dụng cùng parameter được lấy dữ liệu ra từ cache. Mặc dù điều này hữu ích, nhưng phụ thuộc vào query cache là một ý tưởng tồi. Query cache lưu dưc liệu vào memory, vì vậy nó chỉ tồn tại trong thời gian ngắn. Cache có thể bị vô hiệu hóa, vì vậy nếu code của bạn sẽ chạy cả bên trong và bên ngoài một request, nó có thể không phải lúc nào cũng hiệu quả.


### Tránh truy vấn trên những cột ko có index
Tránh truy vấn trên những cột ko có index, nó dẫn đến việc quét toàn bộ bảng không cần thiết. Theo quy mô, những truy vấn này có thể dẫn đếm timeout và gây ra sự cố. Đây là một trong những best practice ảnh hưởng trực tiếp đến hiệu quả truy vấn.

Giải pháp rõ ràng cho vấn đề này là đánh index cho các cột cần thực hiện truy vấn. Điều không phải lúc nào cũng rõ ràng, đó là cách thực hiện. Databases thường thường lock ghi dữ liệu vào bảng khi thực hiện đánh index, nghĩa là đối với cơ sở dữ liệu lớn thời gian lock có thể dài

Tại Shopify, chúng tôi sử dụng một công cụ được gọi là [Large Hadron Migrator](https://github.com/shopify/lhm) để giải quyết các vấn đề migration cho các bảng lớn. Trên tất cả bản mới nhất của  Postgres và MySQL hỗ trợ cả đánh index đồng thời.

## Hiệu suất của Rails
Thu rộng hơn từ Active Record, Rails còn nhiều phần khác như Active Support, Active Job, Action Pack, etc. Dưới đây là một best practice tổng quát để viết fast code trong Ruby on Rails.

### Cache mọi thứ
Nếu bạn không thể tạo ra thứ gì đó nhanh hơn, thì một giải pháp thay thế tốt là lưu vào bộ nhớ cache. Những thứ như biên dịch các view phức tạp, API gọi từ bên ngoài có thể được hưởng lợi rất nhiều từ cache. Đặc biệt nếu dữ liệu kết quả không thay đổi thường xuyên. Nhìn gần hơn với kĩ thuật cache cơ bản, tên cache và thời gian hết hạn rất quan trọng để sử dụng cache hiệu quả. Ví dụ:
```ruby

Rails.cache.fetch("plan_names") do
  Subscription::Plan.all.map(&:name)
end

Rails.cache.fetch("blog_#{blog.id}_posts_#{posts.max(:updated_at)}") do
  blog.posts.as_json
end

Rails.cache.fetch("comment_count", expires_in: 5.minutes) do
  Comment.approved.count
end
```
Ở block đầu tiên, chúng tôi cache tất cả tên subscription plan vô thời hạn. Block thứ hai cache JSON của một blog nhất định. Lưu ý cách các cache key thay đổi trong ngữ cảnh của một blog khác hay khi một blog mới được thêm vào. Cuối cùng, block code cache lại toàn bộ số lượng comment và tự động hết hạn sau 5 phút.

### Điều chỉnh nút thắt cổ chai
Nhưng những gì về hoạt động bạn không thể cache? Những thứ như gửi email, gửi một webhook,  hoặc thậm chí việc đăng nhập có thể bị lạm dụng bởi người dùng ứng dụng. Bản chất bất kỳ thao tác đắt tiền nào không thể cache đều phải được điều chỉnh.

Rails không có cơ chế điều chỉnh theo mặc định. Vì vậy, gem như `rack-attack` và  `rack-throttle` có thể giúp bạn điều chỉnh các request không mong muốn. Sử dụng `rack-attach`:
```ruby
Rack::Attack.throttle("limit login by IP", limit: 10, period: 15.minutes) do |request|
  if request.path == "/admin/sign_in" && request.post?
    request.ip
  end
end
```
Đoạn snippet giới hạn một IP nhất định gửi POST request đến admin 10 lần mỗi 15 phút. Tùy thuộc vào nhu cầu ứng dụng của bạn, bạn cũng có thể xây dựng các giải pháp đẩy mạnh hơn nữa stack bên trong ứng dụng Rails của mình. Các giải pháp điều chỉnh dựa trên Rack phổ biến vì chúng cho phép bạn điều chỉnh các request trước khi chúng đến được với ứng dụng Rails của bạn.

### Làm sau
Nền tảng của mô hình request-response chúng tôi làm việc với tư cách là nhà phát triển web là tốc độ. Giữ mọi thứ nhanh chóng cho người dùng là quan trọng. Vì vậy, nếu chúng ta cần làm một cái gì đó phức tạp và lâu dài thì sao?

Job cho phép chúng tôi chuyển công việc đến cho một process khác thông qua hệ thống Queue thường là Redis. Xuất tập dữ liệu, Xuất tập dữ liệu, kích hoạt subscription hoặc xử lý một khoản thanh toán đều là những ví dụ tuyệt vời background job. Dưới đây là ví dụ background job trong Rails:
```ruby
class ExportJob < ActiveJob::Base
  def perform(user:, exportable:)
    user.mail_export(exportable.to_csv)
  end
end

ExportJob.perform_later(
  user: user, exportable: blog.comments
)
```
Đây là một ví dụ đơn giản về cách bạn viết Job xuất CSV.  Active Job sử dụng trong Rails với các backend cụ thể như Sidekiq hay Resque

### Hạn chế dùng dependency
Hệ sinh thái của Ruby rất phong phú và có rất nhiều thư viện tuyệt vời mà bạn có thể sử dụng trong dự án của mình. Nhưng bao nhiêu là quá nhiều? Khi một dự án phát triển và trưởng thành,
dependency thường chuyển thành nợ phải trả.

Mỗi dependency sẽ thêm nhiều code hơn vào dự án của bạn. Điều này dẫn đến thời gian khởi động chậm hơn và tăng mức sử dụng bộ nhớ. Nhận thức được dependency của dự án và đưa ra quyết định có ý thức để giảm thiểu chúng giúp duy trì tốc độ trong thời gian dài.

Core của Shopify là nguyên khối, ví dụ, có ~500 gem dependency. Năm nay, chúng tôi đã thực hiện các bước để đánh giá việc sử dụng gem của mình và loại bỏ các gem không cần thiết nếu có thể. Điều này dẫn đến việc loại bỏ gem không sử dụng, giải quyết nợ kĩ thuật để loại bỏ gem cũ và sử dụng dịch vụ quản lý dependency.

## Ruby Performance
### Hạn chế sử dụng Metaprogramming
Thay đổi cấu trúc của chương trình trong thời gian chạy là một tính năng mạnh mẽ. Trong một dynamic language như Ruby, có những chi phí hiệu suất đáng kể liên quan đến metaprograming. Hãy xem định nghĩa method làm ví dụ:
```ruby
def regular
  "something"
end

define_method(:metaprogrammed) do
  "something"
end

class_eval(<<~RUBY)
  def also_metaprogrammed
    "something"
  end
RUBY
```
Đây là ba cách phổ biến để định nghĩa một method trong Ruby. Phương pháp phổ biến nhất đầu tiên sử dụng `def`. Phương thức thứ hai sử dụng `define_method` để định nghĩa là một phương thức của metaprogramming. Thứ ba sử dụng `class_eval` để đánh giá một chuỗi string trong thời gian chạy dưới dạng code.

```bash
Warming up --------------------------------------
                 def   311.979k i/100ms
       define_method   286.640k i/100ms
      class_eval def   317.837k i/100ms
Calculating -------------------------------------
                 def     10.980M (± 4.7%) i/s -     54.908M in   5.012622s
       define_method      7.751M (± 5.0%) i/s -     38.696M in   5.006272s
      class_eval def     10.399M (± 5.5%) i/s -     52.125M in   5.029591s
```
Đây là kết quả khi đo performance của ba phương pháp này bằng cách sử dụng gem benchmark-ips. Hãy tập trung vào nửa dưới của đo lường bao nhiêu lần Ruby chạy đoạn code trong 5s, với `def` nó chạy khoảng 10.9 triệu lần, 7.7 triệu lần cho `define_method` và khoảng 10.3 triệu lần cho `class_eval def`

Mặc dù đây là một ví dụ nhỏ, nhưng chúng tôi có thể kết luận rằng có sự khác biệt rõ ràng về hiệu suất liên quan đến việc bạn định nghĩa method như thế nào. Bây giờ, hãy xem xét lệnh gọi method:
```ruby
def obj.invoke
  "something"
end

def obj.method_missing(method_name, *args, &block)
  invoke
end

obj.invoke

obj.send(:invoke)

obj.invoke_via_method_missing
```
Điều này chỉ đơn giản là định nghĩa method `invoke` và method_missing trên một đối tượng có tên là obj. Sau đó, chúng tôi gọi method gọi một cách bình thường, sử dụng method `send` của metaprogramming và cuối cùng là qua method_missing.

```bash
Warming up --------------------------------------
             .invoke   314.828k i/100ms
       send(:invoke)   283.431k i/100ms
      method_missing   247.809k i/100ms
Calculating -------------------------------------
             .invoke     10.987M (± 7.8%) i/s -     54.780M in   5.020167s
       send(:invoke)      8.538M (± 4.2%) i/s -     42.798M in   5.022500s
      method_missing      5.824M (± 7.9%) i/s -     28.994M in   5.014984s
```
Ít ngạc nhiên hơn, method được gọi với `send` hay `method_missing` chậm hơn nhiều so với cách gọi thông thường. Mặc dù những khác biệt này có vẻ rất nhỏ, chúng tăng lên nhanh chóng khi code base lớn hoặc khi được gọi đệ quy nhiều lần. Như  rule of thumb, hạn chế dùng metaprogramming có thể ngăn nhưng phần chậm ko cần thiết.

Ref: https://shopify.engineering/write-fast-code-ruby-rails
