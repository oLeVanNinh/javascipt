# Code loader trong Ruby - Tìm hiểu về Zeitwerk
## Code loader là gì?
Code loader cho phép developer định nghĩa *class* và *module* trên các folder và các file khác nhau và sử dụng trên toàn bộ codebase mà ko cần phải require
một cách rõ ràng. Rails là một ví dụ điển hình về phần mềm sử dụng code loader. Lập trình trên Rails ko cần phải sử dụng *require* để load các model trước khi
sử dụng chúng trong controller. Trên thực tế, ở Rails 6, mọi thứ dưới thư mục *app* được tự động load khi khởi động ứng dụng, chỉ trừ một vài ngoại lệ.

Mặc dù dễ dàng nghĩ rằng code loading chỉ đơn thuần là sử dụng *require* nhưng thực tế ko đơn giản như vậy. Code loading có thể chia làm nhỏ thành 3 phần
như sau:
+ **Auto Loading**: Điều này có nghĩa là code được load khi được `require`.  Ví dụ, trong Rails, chạy `rails s` không load tất cả model hay controller.
Nhưng, trong lần truy cập đầu tiên gọi model `User`, autoload được chạy để tìm và load `User` model. Đây là chế độ autoload.  Điều này có lợi hơn trong
môi trường dev, chúng ta có thể khởi động nhanh hớn khi vào `rails console`. Config `Rails.config.autoload_path` kiểm soát những file hay folder nào được
auto load.
+ **Eager Loading**: Điều này có nghĩa là code được tải vào bộ nhớ khi khởi động ứng dụng mà ko đợi đến khi nó được gọi. Trong Rails, code được tải sẵn trong môi trường
production. Từ giải thích ở trên, code động load trong môi trường production sẽ dẫn đến thời gian phản hồi chậm, mỗi constant được yêu cầu phản hồi nhanh chóng khi được gọi.
`Rails.config.eager_load_paths ` kiểm soát các đường dẫn được dùng eager load
+ **Reloading**: Code loader liên tục theo dõi các thay đổi đối với tệp trong autoload_path và tải lại tệp khi nhận thấy bất kỳ thay đổi nào.
Trong Rails, điều này có thể khá hữu ích trong môi trường phát triển vì nó cho phép chúng ta chạy `rails s` và đồng thời thực hiện các thay đổi
mà không cần khởi động lại  rails server.

Chúng ta có thể dễ dàng nhận thấy rằng hầu hết các khái niệm này đã được phát triển và tồn tại trong Rails. Zeitwerk thay đổi điều này! Zeitwerk cho phép chúng
ta đưa tất cả các code loading vào bất kỳ dự án Ruby nào.

## Zeitwerk là gì?
Zeitwerk là code loader hiệu quả và an toàn cho Ruby và có thể được sử dụng trong bất kỳ dự án Ruby nào, bao gồm các Web framework (Rails, Hanami, Sinatra), CLI và gem.
Với nó, bạn có thể hợp stream chương trình của mình khi biết rằng các class và module có sẵn ở mọi nơi. Theo truyền thống, Rails và một số gem khác có code loader
tích hợp để kích hoạt chức năng này. Tuy nhiên, Zeitwerk trích xuất các khái niệm này thành một gem và cho phép các Rubyists áp dụng vào các dự án của họ.

## Cài đặt Zeitwerk
Điều đầu tiên, chúng ta cần cài đặt gem:

```bash
gem install zeitwerk

# OR in your Gemfile
gem 'zeitwerk', '~> 2.4.0'
```

## Cấu hình Zeitwerk
Hãy bắt đầu với những điều cơ bản:
```ruby
require 'zeitwerk'
loader = Zeitwerk::Loader.new
...
loader.setup
```
Đoạn code ở trên khởi tạo một loader instance và gọi `setup`.  Sau khi gọi `setup`, code loader đã sẵn sàng để tải.  Tuy nhiên, trước đó,tất cả
các cấu hình cần thiết trên code loader được đề cập.  Trong bài viết này, tôi sẽ trình bày một số cấu hình code loader và các quy ước để cấu trúc code của bạn.

+ Cấu trúc tệp: Để Zeitwerk hoạt động, các tệp và tên thư mục cần phải khớp với các module và tên class mà chúng xác định. Ví dụ:

```bash
  lib/my_gem.rb         -> MyGem
  lib/my_gem/foo.rb     -> MyGem::Foo
  lib/my_gem/bar_baz.rb -> MyGem::BarBaz
  lib/my_gem/woo/zoo.rb -> MyGem::Woo::Zoo
```
+ Root Namespaces: là những thư mục mà Zeitwerk có thể tìm thấy code của bạn. Khi các module và class được tham chiếu,
Zeitwerk biết tìm kiếm root namespace với tên tệp phù hợp.  Ví dụ:

```ruby
  require 'zeitwerk'
  loader = Zeitwerk::Loader.new
  loader.push_dir("app/models")
  loader.push_dir("app/controllers")

  // matches as follows
  app/models/user.rb                        -> User
  app/controllers/admin/users_controller.rb -> Admin::UsersController
```
Có hai cách chính để xác định root namespace cho hai trường hợp sử dụng khác nhau. Cách mặc định như ở bên dưới:
```ruby
  // init.rb
  require 'zeitwerk'
  loader = Zeitwerk::Loader.new
  loader.push_dir("#{__dir__}/bar")
  ...
  loader.setup

  // bar/foo.rb
  class Foo; end
```
Điều này có nghĩa là class Foo có thể được tham chiếu mà không cần chỉ định rõ ràng Bar::Foo , vì thư mục thanh hoạt động như một root namespace.
Cách thứ hai để xác định root namespace là chỉ định root namespace rõ ràng trong lệnh gọi push_dir:
```ruby
  // init.rb
  require 'zeitwerk'

  module Bar
  end
  loader = Zeitwerk::Loader.new
  loader.push_dir("#{__dir__}/src", namespace: Bar)
  loader.setup

  // src/foo.rb
  class Bar::Foo; end
```
Có một số điều cần lưu ý đoạn code này:
1. Module `Bar` đã được định nghĩa trước khi được sử dụng bởi `push_dir`. Nếu module chúng ta muốn sử dụng được xác định bởi bên thứ ba,
thì chúng ta cần dùng `require` để load code trước khi chúng ta sử dụng nó trong lệnh gọi push_dir.

2. Lệnh `push_dir` chỉ định rõ ràng namespace Bar

3.Tệp src / foo.rb định nghĩa `Bar::Foo`, không phải `Foo` và không cần tạo thư mục, như `src/bar/foo.rb`.
+ Code loader độc lập: Theo thiết kế, Zeitwerk cho phép từng dự án hoặc ứng dụng dependency quản lý cây dự án riêng lẻ của nó.
Điều này có nghĩa là cơ chế load code của mỗi dependency được quản lý bởi dependency đó.  Ví dụ: trong Rails 6, Zeitwerk xử lý việc load code
cho ứng dụng Rails và cho phép từng dependency đá quý quản lý cây dự án của riêng nó một cách riêng biệt.
Đó là một điều kiện lỗi khi có các tệp chồng chéo giữa nhiều  code loader.
+ Autoloading: Với thiết lập trên, khi lệnh gọi `setup` được thực hiện, tất cả các class và module sẽ có sẵn theo yêu cầu.
+ Reloading: để cho phép reloading, code loader phải được định cấu hình rõ ràng cho nó. Ví dụ:
```ruby
  loader = Zeitwerk::Loader.new
  ...
  loader.enable_reloading # you need to opt-in before setup
  loader.setup
  ...
  loader.reload
```
`loader.reload` gọi reload trên cây dự án một cách nhanh chóng và bất kỳ thay đổi mới nào sẽ hiển thị ngay lập tức.
Tuy nhiên, chúng ta vẫn cần một cơ chế xung quanh để phát hiện các thay đổi đối với hệ thống tệp và gọi `loader.reload`.
Một phiên bản đơn giản được hiển thị bên dưới:
```ruby
  require 'filewatcher'

  loader = Zeitwerk::Loader.new
  ...
  loader.enable_reloading
  loader.setup
  ...

  my_filewatcher = Filewatcher.new('lib/')
  Thread.new(my_filewatcher) {|fw| fw.watch {|filename| loader.reload } }
```

## Sử dụng Zeitwerk trong Rails
Zeitwerk được sử dụngtheo mặc định trong Rails 6.0. Tuy nhiên, bạn có thể sử dụng classic code loader của Rails:
```ruby
# config/application.rb
config.load_defaults "6.0"
config.autoloader = :classic
```
## Sử dụng Zeitwerk trong Gem
Zeitwerk cung cấp một phương pháp thuận tiện cho đgem, miễn là chúng sử dụng cấu trúc gem tiêu chuẩn (lib/special_gem).
Phương pháp tiện lợi này có thể được sử dụng như sau:
```
# lib/special_gem.rb
require 'zeitwerk'

module SpecialGem
end

loader = Zeitwerk::Loader.for_gem
loader.setup
```

Với cấu trúc gem tiêu chuẩn, lệnh gọi for_gem thêm thư mục lib làm root namespace, cho phép mọi code trong thư mục lib được tìm thấy tự động


Ref: https://www.honeybadger.io/blog/ruby-code-loader-zeitwerk/
