# Backlog - Hệ thống Đặt chỗ (Booking System)

---

## Epic 1: Cài đặt Đặt chỗ (A2 - Admin)

### Feature 1.1: Cấu hình tiếp nhận đặt chỗ
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| A2-001 | Là Admin, tôi muốn bật/tắt tính năng đặt chỗ online từ LINE để kiểm soát kênh tiếp nhận | - Toggle ON/OFF cho LINE<br>- Lưu cài đặt thành công<br>- Áp dụng ngay lập tức | High |
| A2-002 | Là Admin, tôi muốn bật/tắt tính năng đặt chỗ từ Web để kiểm soát kênh tiếp nhận | - Toggle ON/OFF cho Web<br>- Lưu cài đặt thành công | High |
| A2-003 | Là Admin, tôi muốn chọn chế độ xác nhận (Tự động/Thủ công) để phù hợp với quy trình vận hành | - Radio button: Tự động / Xác nhận sau<br>- Mô tả rõ ràng cho từng option | High |

### Feature 1.2: Cấu hình thanh toán
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| A2-004 | Là Admin, tôi muốn cấu hình phương thức thanh toán (Online/Tại cửa hàng) | - Checkbox cho từng phương thức<br>- Hiển thị cảnh báo: thanh toán online = không thể hủy | High |
| A2-005 | Là Admin, tôi muốn thiết lập chính sách hủy (số giờ trước) để giảm no-show | - Input số giờ tối thiểu trước khi hủy<br>- Validation số dương<br>- Default: 24 giờ | Medium |

### Feature 1.3: Cấu hình lịch trình
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| A2-006 | Là Admin, tôi muốn cấu hình khung giờ hiển thị lịch đặt chỗ (VD: 9:00-23:00) | - Time picker cho giờ bắt đầu/kết thúc<br>- Validation giờ kết thúc > giờ bắt đầu | High |
| A2-007 | Là Admin, tôi muốn thiết lập thời gian sử dụng mặc định cho mỗi nhóm khách | - Input số phút (default: 60)<br>- Áp dụng khi tạo booking mới | Medium |
| A2-008 | Là Admin, tôi muốn thiết lập thời gian dọn dẹp giữa các ca | - Input số phút (default: 15)<br>- Tính vào logic kiểm tra slot trống | Medium |
| A2-009 | Là Admin, tôi muốn cấu hình khung giờ có thể đặt chỗ theo từng ngày trong tuần | - Chọn ngày (T2-CN)<br>- Thêm nhiều khung giờ/ngày (VD: 11:00-14:00, 17:00-22:00)<br>- CRUD khung giờ | High |

### Feature 1.4: Cấu hình thông báo
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| A2-010 | Là Admin, tôi muốn bật/tắt thông báo nhắc nhở tự động cho khách | - Toggle ON/OFF<br>- Chọn thời gian trước (1h, 2h, 24h...) | Medium |
| A2-011 | Là Admin, tôi muốn tùy chỉnh nội dung tin nhắn nhắc nhở | - Textarea nhập nội dung<br>- Hỗ trợ biến động: {tên}, {ngày}, {giờ}, {số người} | Low |

---

## Epic 2: Đặt chỗ qua LINE Mini App (C1 - Customer)

### Feature 2.1: Màn hình chính
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| C1-001 | Là khách hàng, tôi muốn thấy màn hình chính với tên nhà hàng và các lựa chọn | - Hiển thị tên nhà hàng<br>- 2 button: Đặt chỗ (ご予約) / Chờ hàng online (オンライン順番待ち)<br>- Navigation bar | High |

### Feature 2.2: Form đặt chỗ
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| C1-002 | Là khách hàng, tôi muốn nhập tên để nhà hàng biết thông tin của tôi | - Input text bắt buộc<br>- Tự động fill nếu đã có thông tin LINE | High |
| C1-003 | Là khách hàng, tôi muốn nhập số điện thoại để nhà hàng liên hệ | - Input phone bắt buộc<br>- Validation format số điện thoại Nhật | High |
| C1-004 | Là khách hàng, tôi muốn chọn ngày đặt chỗ | - Date picker<br>- Chỉ hiển thị ngày từ hôm nay trở đi<br>- Disable ngày nhà hàng đóng cửa | High |
| C1-005 | Là khách hàng, tôi muốn chọn giờ đặt chỗ | - Time picker / Dropdown<br>- Chỉ hiển thị khung giờ theo cài đặt A2-009<br>- Disable slot đã đầy | High |
| C1-006 | Là khách hàng, tôi muốn nhập số người | - Number input (min: 1)<br>- Có thể giới hạn max theo cài đặt | High |
| C1-007 | Là khách hàng, tôi muốn chọn loại chỗ ngồi mong muốn | - Dropdown các loại bàn (Counter, Table, Tatami...)<br>- Hiển thị từ master data | Medium |
| C1-008 | Là khách hàng, tôi muốn xác nhận đặt chỗ | - Button "予約を確定する"<br>- Validate tất cả trường bắt buộc<br>- Gọi API tạo booking | High |

### Feature 2.3: Chọn gói/menu (Tùy chọn)
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| C1-009 | Là khách hàng, tôi muốn xem danh sách gói/menu có sẵn | - List các course với giá<br>- Hình ảnh, mô tả<br>- Hiển thị nếu nhà hàng có setup | Medium |
| C1-010 | Là khách hàng, tôi muốn chọn gói/menu cho đơn đặt chỗ | - Chọn 1 hoặc nhiều course<br>- Tính tổng tiền = giá × số người<br>- Lưu course_id vào booking | Medium |

### Feature 2.4: Thanh toán
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| C1-011 | Là khách hàng, tôi muốn thanh toán online nếu chọn gói | - Tích hợp payment gateway (LINE Pay, Credit card)<br>- Hiển thị tổng tiền<br>- Xử lý success/fail | Medium |
| C1-012 | Là khách hàng, tôi muốn chọn thanh toán tại cửa hàng | - Option "Thanh toán tại cửa hàng"<br>- Không bắt buộc thanh toán ngay | Medium |

### Feature 2.5: Hoàn tất đặt chỗ
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| C1-013 | Là khách hàng, tôi muốn thấy thông báo đặt chỗ thành công | - Message "予約が完了しました"<br>- Hiển thị thông tin: Gói + Số người + Ngày giờ | High |
| C1-014 | Là khách hàng, tôi muốn nhận mã QR để check-in tại cửa hàng | - Generate QR code từ booking code<br>- Hướng dẫn: "Vui lòng xuất trình QR khi đến" | High |
| C1-015 | Là khách hàng, tôi muốn xem lịch sử đặt chỗ | - Button "Xem lịch sử đặt chỗ"<br>- Navigate đến màn hình quản lý | High |

### Feature 2.6: Quản lý đặt chỗ
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| C1-016 | Là khách hàng, tôi muốn xem danh sách các đơn đã đặt | - List đơn: Tên gói + Ngày giờ + Số người + Tổng tiền<br>- Trạng thái: Đang hoạt động / Đã hủy<br>- Sắp xếp theo ngày | High |
| C1-017 | Là khách hàng, tôi muốn xem chi tiết đơn đặt chỗ | - Button "詳細を見る"<br>- Hiển thị đầy đủ thông tin + QR code | Medium |
| C1-018 | Là khách hàng, tôi muốn hủy đơn đặt chỗ | - Button "キャンセル"<br>- Kiểm tra chính sách hủy (A2-005)<br>- Confirm dialog<br>- Không cho hủy nếu đã thanh toán online | High |

---

## Epic 3: Quản lý Đặt chỗ trên Restaurant Board (S2 - Staff)

### Feature 3.1: Danh sách đặt chỗ
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| S2-001 | Là nhân viên, tôi muốn xem danh sách tất cả đơn đặt chỗ | - Table/List view các booking<br>- Cột: Mã, Tên, SĐT, Ngày giờ, Số người, Trạng thái<br>- Pagination | High |
| S2-002 | Là nhân viên, tôi muốn lọc đơn theo ngày | - Date picker filter<br>- Default: hôm nay | High |
| S2-003 | Là nhân viên, tôi muốn lọc đơn theo trạng thái | - Dropdown/Tabs: Tất cả, Chờ xác nhận, Đã xác nhận, Check-in, Đã hủy | High |
| S2-004 | Là nhân viên, tôi muốn tìm kiếm đơn theo SĐT hoặc tên | - Search input<br>- Real-time search | Medium |

### Feature 3.2: Tạo đơn đặt chỗ mới
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| S2-005 | Là nhân viên, tôi muốn tạo đơn đặt chỗ mới cho khách | - Button "Thêm mới"<br>- Mở form tạo booking | High |
| S2-006 | Là nhân viên, tôi muốn tìm kiếm khách hàng qua SĐT | - Input SĐT + Button tìm kiếm<br>- Auto-fill thông tin nếu tìm thấy<br>- Hiển thị số lần đặt chỗ (khách quen) | High |
| S2-007 | Là nhân viên, tôi muốn nhập thông tin khách hàng | - Tên (bắt buộc)<br>- SĐT (bắt buộc)<br>- Có trẻ em không (dropdown)<br>- Số người (bắt buộc) | High |
| S2-008 | Là nhân viên, tôi muốn chọn thông tin đặt chỗ | - Ngày (date picker)<br>- Giờ (time picker)<br>- Thời gian sử dụng (phút)<br>- Kênh đặt chỗ (auto: Điện thoại/Trực tiếp) | High |
| S2-009 | Là nhân viên, tôi muốn chọn loại chỗ ngồi và bàn | - Loại chỗ ngồi mong muốn (dropdown)<br>- Bàn cụ thể (dropdown - gợi ý bàn trống) | High |
| S2-010 | Là nhân viên, tôi muốn chọn gói/menu cho khách | - Dropdown danh sách course<br>- Hiển thị giá | Medium |
| S2-011 | Là nhân viên, tôi muốn nhập ghi chú đặc biệt và memo nội bộ | - Ghi chú đặc biệt (khách thấy)<br>- Memo nội bộ (chỉ staff thấy) | Medium |
| S2-012 | Là nhân viên, tôi muốn lưu đơn đặt chỗ | - Button "Lưu"<br>- Validate các trường bắt buộc<br>- Tạo booking với status phù hợp | High |

### Feature 3.3: Xử lý đơn đặt chỗ
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| S2-013 | Là nhân viên, tôi muốn xác nhận đơn đặt chỗ đang chờ | - Button "Xác nhận"<br>- Chuyển status: pending → confirmed<br>- Gửi thông báo cho khách (nếu có LINE) | High |
| S2-014 | Là nhân viên, tôi muốn check-in khách hàng | - Button "Check-in"<br>- Chuyển status: confirmed → check_in<br>- Hỗ trợ scan QR code | High |
| S2-015 | Là nhân viên, tôi muốn xếp khách vào bàn | - Button "Xếp bàn"<br>- Chọn bàn từ danh sách trống<br>- Chuyển status: check_in → seated | High |
| S2-016 | Là nhân viên, tôi muốn hoàn tất phục vụ | - Button "Hoàn tất"<br>- Chuyển status: seated → completed | Medium |
| S2-017 | Là nhân viên, tôi muốn hủy đơn đặt chỗ | - Button "Hủy đặt chỗ"<br>- Confirm dialog<br>- Chuyển status → cancelled<br>- Gửi thông báo cho khách | High |

### Feature 3.4: Thông báo & Liên lạc
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| S2-018 | Là nhân viên, tôi muốn gửi nhắc nhở qua LINE | - Button "Gửi nhắc nhở qua LINE"<br>- Chỉ hiển thị nếu khách có line_user_id | Medium |
| S2-019 | Là nhân viên, tôi muốn gửi thông báo tình trạng qua LINE | - Button "Thông báo tình trạng"<br>- Gửi update status cho khách | Medium |

### Feature 3.5: Chỉnh sửa đơn
| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| S2-020 | Là nhân viên, tôi muốn chỉnh sửa thông tin đơn đặt chỗ | - Button "Chỉnh sửa"<br>- Form edit với data hiện tại<br>- Lưu thay đổi | High |

---

## Epic 4: Backend & Database

### Feature 4.1: Database Schema
| ID | Task | Acceptance Criteria | Priority |
|----|------|---------------------|----------|
| BE-001 | Tạo bảng `reservations` với các trường theo spec | - Tất cả các trường trong booking.md<br>- Index phù hợp (store_id, visit_date, status) | High |
| BE-002 | Tạo bảng `reservation_settings` cho cài đặt đặt chỗ | - Liên kết với store_id<br>- Các trường cấu hình từ Epic 1 | High |
| BE-003 | Tạo bảng `reservation_time_slots` cho khung giờ | - store_id, day_of_week, start_time, end_time | High |

### Feature 4.2: API Endpoints
| ID | Task | Acceptance Criteria | Priority |
|----|------|---------------------|----------|
| BE-004 | API: GET /reservations - Lấy danh sách đặt chỗ | - Filter: store_id, date, status<br>- Pagination<br>- Sort by visit_date | High |
| BE-005 | API: POST /reservations - Tạo đặt chỗ mới | - Validate input<br>- Auto-generate code<br>- Return booking với QR data | High |
| BE-006 | API: GET /reservations/:id - Lấy chi tiết đặt chỗ | - Include thông tin khách hàng<br>- Include thông tin course | High |
| BE-007 | API: PUT /reservations/:id - Cập nhật đặt chỗ | - Validate quyền chỉnh sửa<br>- Log thay đổi | High |
| BE-008 | API: PATCH /reservations/:id/status - Cập nhật trạng thái | - Validate transition hợp lệ<br>- Trigger notification nếu cần | High |
| BE-009 | API: DELETE /reservations/:id - Hủy đặt chỗ | - Soft delete (set status = cancelled)<br>- Kiểm tra chính sách hủy | High |
| BE-010 | API: GET /reservations/available-slots - Lấy slot trống | - Input: store_id, date, number_of_people<br>- Tính toán dựa trên settings | High |
| BE-011 | API: GET/PUT /reservation-settings - Cài đặt đặt chỗ | - CRUD cho reservation settings | High |

### Feature 4.3: Notification Service
| ID | Task | Acceptance Criteria | Priority |
|----|------|---------------------|----------|
| BE-012 | Service: Gửi thông báo xác nhận booking qua LINE | - Template message<br>- Include booking details | High |
| BE-013 | Service: Gửi nhắc nhở tự động trước giờ đến | - Cron job check booking sắp đến<br>- Gửi theo cài đặt (1h, 2h trước...) | Medium |
| BE-014 | Service: Gửi thông báo hủy booking | - Thông báo cho khách khi bị hủy | Medium |

### Feature 4.4: QR Code
| ID | Task | Acceptance Criteria | Priority |
|----|------|---------------------|----------|
| BE-015 | Service: Generate QR code cho booking | - Encode booking code<br>- Return QR image/base64 | High |
| BE-016 | API: POST /reservations/checkin-by-qr - Check-in bằng QR | - Decode QR → booking code<br>- Validate & update status | High |

---

## Tổng hợp theo Priority

### High Priority (Must Have - Sprint 1-2)
- A2-001 → A2-003, A2-006, A2-009
- C1-001 → C1-008, C1-013 → C1-016, C1-018
- S2-001 → S2-003, S2-005 → S2-009, S2-012 → S2-017, S2-020
- BE-001 → BE-012, BE-015, BE-016

### Medium Priority (Should Have - Sprint 3-4)
- A2-004, A2-005, A2-007, A2-008, A2-010
- C1-007, C1-009 → C1-012, C1-017
- S2-004, S2-010, S2-011, S2-018, S2-019
- BE-013, BE-014

### Low Priority (Nice to Have - Sprint 5+)
- A2-011

---

## Definition of Done
- [ ] Code được review và merge vào develop
- [ ] Unit test coverage >= 80%
- [ ] API documentation cập nhật (Swagger/OpenAPI)
- [ ] UI/UX đã được approve bởi designer
- [ ] Đã test trên môi trường staging
- [ ] Không có bug critical/major

---

## Notes
- Tất cả API cần authentication & authorization
- Hỗ trợ đa ngôn ngữ (Tiếng Nhật là chính, Tiếng Việt, Tiếng Anh)
- Mobile-first cho C1 (LINE Mini App)
- Responsive cho S2 (Restaurant Board - Tablet)
