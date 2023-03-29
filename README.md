# Frontend Ecommerce resource
## Dev enviroment, deploy, cách vận hành

### Server link
```
const url_server =window.location.host.includes('localhost') ?  'http://localhost:5000' :'https://backendasm3.ducminh27.repl.co'
```
Server trên deploy là https://backendasm3.ducminh27.repl.co và trên dev enviroment là http://localhost:5000 và deploy server có coldstart nên sẽ load sản phẩm lần đầu tiên trong 30s

### Deploy site

https://asm3-mon5.web.app
### Cách hoạt động
Toàn bộ Frontend này đều được viết với Get request và query string, chưa được chuẩn mực lắm.

## Chức năng

### Đăng ký, đăng nhập, thoát
Có thể vào https://asm3-mon5.web.app/signin để đăng nhập với username aaa1@a.com và password 4444 hoặc tạo tài khoản mới trong https://asm3-mon5.web.app/signup Sau khi đăng nhập sẽ có thể dùng giỏ hàng trong https://asm3-mon5.web.app/cart . Logout sẽ clear session trên server và xóa cookie của browser(thực hiện trên server thông qua get request https://backendasm3.ducminh27.repl.co/signout
)

### Cửa hàng
Chức năng phân loại dựa theo category trong query string của get request tới /products của server
### Sản phẩm riêng biệt
Sử dụng hook uselocation để lấy id trên URL của frontend, đưa id này vào detail/id trên server. Cho phép thêm sản phẩm vào giỏ hàng
### Giỏ hàng và checkout của https://asm3-mon5.web.app/checkout và https://asm3-mon5.web.app/cart
Fetch tới /cart/userid của server, nên sẽ không có return được nếu chưa đăng nhập. Giỏ hàng sẽ hiển thị đầy đủ hình ảnh, số lượng... còn checkout chỉ hiển thị tổng cộng số tiền từ mọi sản phẩm trong giỏ của user
