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


### Để đặt chỗ thì cần các tác nhân có thể tham gia là:
- S2: Restaurant Board (Quản Lý Cửa Hàng)
- C1: Ứng Dụng Mini LINE
- S1: Máy Tính Bảng A (Thiết Bị Lễ Tân)
- S3: Màn Hình Hiển Thị (Tùy Chọn)



### Quy trình Chờ hàng Online (順番待ち - Waitlist) Của C1
#### Bước 1: Màn hình chính
- Hiển thị tên nhà hàng "Restaurant Name"
- 2 lựa chọn: Đặt chỗ (ご予約) và Chờ hàng online (オンライン順番待ち) ✓
- Navigation bar ở cuối
#### Bước 2: Xem trạng thái chờ hiện tại
- Số nhóm đang chờ: 
- Thời gian ước tính:
- 2 nút: Xếp hàng (順番を取る) và Xem thông tin số đang chờ (取得済み待機者を確認)
#### Bước 3: Đăng ký chờ hàng. Form điền thông tin:
- Số người (Bắt buộc):
- Tên (Bắt buộc):
- Số điện thoại (Bắt buộc):
- Email (tùy chọn):
- Thời gian đến (任意): 選択してください (Dropdown)
- Chọn loại chỗ ngồi:
- Nút Đăng ký (受付ける)
#### Bước 4: Hoàn tất - Nhận mã số
- Thông báo "Đăng ký chờ hoàn tất" (順番待ち登録が完了しました)
- Mã số của bạn: R-0005 (2名/テーブル席)
- Thời gian chờ ước tính: 約25分 (khoảng 25 phút)
- Hiển thị mã QR để check-in
- Hướng dẫn: "Vui lòng xuất trình mã này cho nhân viên"
- Nút Xác nhận trạng thái chờ (待ち状況を確認する)
#### Bước 5: Theo dõi trạng thái chờ
- Số đang được gọi: R-003 (màu xanh dương)
- Số của bạn: R-005 (màu xanh lá, được highlight)
- Thời gian chờ còn lại: 約10分 (khoảng 10 phút)
- Hàng đợi tiếp theo: R-004 → R-005 (bạn) → R-006
- Danh sách số chờ khác: R-007, R-008
- Ghi chú: "Còn 5 nhóm nữa đến lượt bạn"
- Nút Cập nhật thông tin (情報を更新する)

### Logic Tạo và Quản lý Hàng chờ (Waitlist) của S2
1. Tổng quan hệ thống
- Theo dõi số bàn đang sử dụng (8/12) và số nhóm chờ (10組)
- Tính toán thời gian chờ ước tính theo thời gian thực
- Quản lý danh sách chờ theo số thứ tự (受付 #01, #02, #03...)
- Tích hợp đa kênh: Walk-in, LINE, Web
2. Quy trình thêm khách vào hàng chờ
- Bước 1: Thu thập thông tin
    - Số điện thoại* (bắt buộc) → Tìm kiếm khách cũ tự động
    - Tên khách: Tự động điền nếu là khách quen
    - Số người: Dropdown chọn số lượng
    - Loại chỗ ngồi: Dropdown chọn
    - Kênh: Tự động nhận diện (Check-in/LINE/Web/Điện thoại)
- Bước 2: Gán bàn thông minh
    - Hệ thống hiển thị popup "適切なテーブル" (Bàn phù hợp)
    - Gợi ý danh sách bàn phù hợp dựa trên:
    - Số người (capacity matching)
    - Loại chỗ ngồi yêu cầu
    - Trạng thái bàn (trống, đang dọn)
    - Nhân viên chọn bàn → Nhấn "確認する" (Xác nhận)
- Bước 3: Tạo số thứ tự
    Hệ thống tự động sinh mã: 受付 #0X (số tăng dần)
    Lưu thông tin: Tên, SĐT, Số người, Loại bàn, Thời gian đăng ký
    Khách nhận thông báo qua LINE/SMS với mã số và thời gian chờ ước tính