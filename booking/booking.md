Role hệ thống: https://v-cast.s3.ap-northeast-1.amazonaws.com/Device_Design_vi.htm
### Staff
S1: Máy Tính Bảng A (Thiết Bị Lễ Tân)
S2: Restaurant Board (Quản Lý Cửa Hàng)
S3: Màn Hình Hiển Thị (Tùy Chọn)
S4: Máy Tính Bảng Nhân Viên Phục Vụ
S5: Máy Tính Bảng KDS
S6: Máy Tính Bảng / PC POS
S7: Mini App Line Đăng Ký Ca Làm Việc của staff
### Customer
C1: Ứng Dụng Mini LINE
C2: Web đặt đồ mang đi
C3: Web đặt món của nhà hàng
C4: Tablet đặt món của nhà hàng
### Admin
A1 (A2): Trang web quản trị của nhà hàng
TA1: Quản Trị Viên Tenant (Quản Lý Trụ Sở)
SA1: Quản Trị Viên Hệ Thống


### Để booking thì cần các tác nhân có thể tham gia là:
- S2: Restaurant Board (Quản Lý Cửa Hàng)
- C1: Ứng Dụng Mini LINE

### Follow cơ bản sẽ như sau:
#### C1 có thể đặt chỗ qua app của mình: Các chức năng cần thiết bên C1 là sau khi truy cập Liff Mà muốn booking thì cần làm action sau:
Bước 1: Màn hình chính
- Hiển thị tên nhà hàng "Restaurant Name"
- 2 lựa chọn: Đặt chỗ (ご予約) và Chờ hàng online (オンライン順番待ち)
- Navigation bar ở cuối màn hình
Bước 2: Điền thông tin đặt chỗ, Form nhập liệu gồm:
- Tên: 
- Số điện thoại: 
- Ngày: 
- Giờ: 
- Số người: 
- Loại chỗ ngồi: 
- Nút Xác nhận đặt chỗ (予約を確定する)
Bước 3: Chọn gói/menu (Bước này có thể có hoặc không tuỳ vào nhà hàng có settup gói hay không). Nếu không thì qua luôn màn hình thành công của bước 5.
Bước 4: Xác nhận và thanh toán (Nếu chọn gói thì cần thanh toán)
Bước 5: Hoàn tất - Mã QR
- Thông báo "Đặt chỗ hoàn tất" (予約が完了しました)
- Hiển thị mã QR để check-in tại cửa hàng
- Thông tin đặt chỗ: Gói + Số người + Ngày giờ
- Hướng dẫn: "Vui lòng xuất trình QR khi đến"
- Nút Xem lịch sử đặt chỗ
Bước 6: Quản lý đặt chỗ, Danh sách các đơn đã đặt với:
- Tên gói + Ngày giờ + Số người + Tổng tiền
- Trạng thái: Đang hoạt động / Đã hủy
- Các nút: Hủy (キャンセル) và Xem chi tiết (詳細を見る)

#### Hoặc S2 có thể tạo booking cho khách hàng bằng cách nhấn nút thêm trong phần quản lý booking. Các bước chi tiết đặt chỗ được mô tả chi tiết ở:(Tóm tắt: Các trường cần điền khi S2 tạo đơn đặt chỗ mới)

### Tóm tắt: Cài đặt Đặt chỗ được setting ở A2 như sau:
Hệ thống Cài đặt Đặt chỗ cung cấp một bộ công cụ quản lý toàn diện cho phép cửa hàng tùy chỉnh quy trình nhận và xử lý đặt chỗ từ khách hàng. Cửa hàng có thể bật/tắt tính năng tiếp nhận đặt chỗ online từ LINE và Web, đồng thời lựa chọn giữa hai chế độ xác nhận: Xác nhận tự động (đặt chỗ được chấp nhận tức thì) hoặc Xác nhận sau khi cửa hàng xác nhận (đơn đặt chỗ sẽ ở trạng thái "Đang chờ xác nhận" cho đến khi nhân viên phê duyệt). Về thanh toán, hệ thống hỗ trợ cả thanh toán online và thanh toán tại cửa hàng, tuy nhiên khi chọn thanh toán online, khách hàng sẽ không thể hủy đặt chỗ. Chính sách hủy cho phép cửa hàng thiết lập thời gian tối thiểu trước khi khách hàng có thể hủy (ví dụ: 24 giờ trước).
Về mặt lịch trình, cửa hàng có thể cấu hình khung giờ hiển thị lịch đặt chỗ (ví dụ: 9:00-23:00), thiết lập thời gian sử dụng cho mỗi nhóm khách (60 phút), và thời gian dọn dẹp giữa các ca (15 phút). Đặc biệt, tính năng Khung thời gian có thể đặt chỗ cho phép cửa hàng xác định các khung giờ cụ thể phục vụ trong ngày và áp dụng cho từng ngày trong tuần (ví dụ: 11:00-14:00 và 17:00-22:00). Hệ thống còn tích hợp tính năng thông báo nhắc nhở tự động, gửi tin nhắn cho khách hàng trước giờ đến cửa hàng (ví dụ: 1 giờ trước) với nội dung tùy chỉnh, giúp giảm tỷ lệ khách không đến (no-show) và nâng cao trải nghiệm dịch vụ.


### Đây là các tường để lưu booking trên database  Reservations database

| info_customer_id | required / string | liên kết với bảng info customer ⇒ để lấy thông tin khách hàng |
| --- | --- | --- |
| customer_id | optional | xác định khách hàng đã start session hay chưa |
| store_id | required / string | đặt đơn này của store nào |
| line_user_id | optional | ID LINE nếu đặt qua LINE (không bắt buộc) |
| code | generated after creation | Mã đặt bàn sinh tự động để tra cứu |
| visit_date | optional | Ngày đến dự kiến |
| visit_time | optional | Giờ đến dự kiến |
| number_of_people | required / number > 0 | Số người để sắp xếp bàn phù hợp |
| table_id | optional | id của bàn được chọn |
| has_children | optional | Có trẻ em không để chuẩn bị ghế cao, đồ dùng |
| note | optional | Ghi chú đặc biệt từ khách (sinh nhật, kỷ niệm) |
| status | enum / required / number > 0 | pending/ check_in/ confirmed/ seated/ cancelled |
| preffer_seat_type | optional | Loại bàn ưu tiên (có thể khác seat_type nếu không còn chỗ) |
| course_id | jsonb / optional | ID các course/set menu đã chọn trước (lưu dạng JSON) |
| memo | optional | Ghi chú nội bộ của nhân viên |
| reservation_route | enum / required / number > 0 | Nguồn đặt bàn (phone/website/line) để đo hiệu quả kênh |

### Trạng thái của đặt chỗ được định nghĩa bằng enum:

| Giá trị | Số (Integer) | Mô tả |
| --- | --- | --- |
| pending | 0 | Đang chờ xác nhận booking |
| confirmed | 1 | Đặt chỗ đã đc xác nhận |
| check_in | 2 | Khách hàng đã checkin |
| seated | 3 | khách hàng đã ngồi vào bàn |
| completed | 4 | đặt chỗ đã đc phục vụ xong |
| cancelled | 5 | đặt chỗ bị hủy |

**Lưu ý:** Mặc định khi tạo sẽ là `pending`


### Tóm tắt: Các trường cần điền khi S2 tạo đơn đặt chỗ mới
1. Thông tin khách hàng (Bắt buộc)

Số điện thoại* (電話番号): Trường bắt buộc, có nút tìm kiếm để tra cứu thông tin khách hàng cũ
Tên người đặt chỗ (予約者名): Họ tên khách hàng
Có trẻ em không (子供の有無): Dropdown lựa chọn có/không và số lượng trẻ em
Số người (人数): Số lượng khách trong nhóm
Thông tin khách quen: Hệ thống tự động hiển thị số lần khách đã đặt chỗ (ví dụ: Lần thứ 5)

2. Thông tin đặt chỗ

Trạng thái đặt chỗ (予約ステータス): Dropdown chọn trạng thái (ví dụ: Đã xác nhận - 確定済み)
Kênh đặt chỗ (予約経路): Tự động nhận diện nguồn đặt chỗ (LINE, Web, Điện thoại...)
Ngày (日付): Chọn ngày đặt chỗ (Date picker)
Thời gian (時間): Chọn giờ đặt chỗ (Time picker)
Thời gian sử dụng (phút) (利用時間): Thời lượng dự kiến sử dụng dịch vụ

3. Thông tin bàn và dịch vụ

Loại chỗ ngồi mong muốn (希望席タイプ): Dropdown chọn kiểu phòng/bàn (ví dụ: Phòng kiểu Nhật - 和室)
Phân bổ bàn (割り当て可能席): Dropdown chọn bàn cụ thể từ danh sách bàn trống
Nội dung gói/menu (コース内容): Dropdown chọn gói dịch vụ (ví dụ: Premium Dinner Course ¥5,500/người)
Ghi chú đặc biệt (特記事項): Textarea nhập các yêu cầu đặc biệt của khách

4. Các hành động quản lý
Sau khi tạo đơn, hệ thống cung cấp các nút hành động:

Check-in: Xác nhận khách đã đến
Gửi nhắc nhở qua LINE: Gửi tin nhắn nhắc lịch hẹn
Thông báo tình trạng qua LINE: Cập nhật trạng thái đơn cho khách
Hủy đặt chỗ: Hủy đơn đặt chỗ
Lưu thay đổi/Đóng: Lưu thông tin hoặc đóng form

Lưu ý: Các trường có dấu (*) là bắt buộc phải điền. Hệ thống hỗ trợ tìm kiếm nhanh thông tin khách hàng qua số điện thoại và tự động gợi ý bàn trống dựa trên thời gian và số người đã chọn.

### Follow đặt chỗ bên