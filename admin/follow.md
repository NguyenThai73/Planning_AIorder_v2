# 📋 Admin Flow — AI ORDER ADMIN
> Tài liệu mô tả luồng thiết lập và vận hành hệ thống Admin, kèm màn hình design tương ứng.

---

## 🗺️ Tổng quan luồng Admin

```
PHASE 1: Cài đặt ban đầu (trước khi vận hành)
  └─ Step 1 → Thông tin cơ bản cửa hàng
  └─ Step 2 → Chọn chế độ kinh doanh (WEB/APP Order, Booking ON/OFF...)
  └─ Step 3 → Cài đặt chức năng chi tiết (Booking, Waitlist, KDS, Takeout...)
  └─ Step 4 → Cài đặt thông báo & LINE
  └─ Step 5 → Cài đặt AI & tự động hóa
  └─ Step 6 → Kết nối thiết bị (Printer, KDS, Display)

PHASE 2: Tạo Master Data
  └─ Step 7 → Tạo Menu (đơn lẻ / course / topping)
  └─ Step 8 → Cài đặt Bàn (Table)
  └─ Step 9 → Đăng ký Nhân viên (Staff)
  └─ Step 10 → Nhập danh sách Khách hàng (Customer)

PHASE 3: Vận hành hàng ngày
  └─ Quản lý ca làm việc (Shift)
  └─ Xem báo cáo (Doanh thu / Đơn hàng / Khách hàng / AI / Đặt bàn)
  └─ Quản lý thanh toán & chốt ca
```

---

## PHASE 1 — Cài đặt ban đầu

### ✅ Step 1: Thông tin cơ bản cửa hàng
> 📸 **Design:** `A1_001.png`
> **Đường dẫn:** 店舗設定 → 基本情報設定

Các thông tin cần điền trước khi vận hành:

| Mục | Ví dụ |
|---|---|
| Tên cửa hàng | さくらレストラン 新宿本店 |
| Địa chỉ (mã bưu chính) | 160-0023 |
| Điện thoại | 03-1234-5678 |
| Tỉnh/Thành phố | 東京都新宿区西新宿 1-1-1 |
| Giờ mở cửa | 月〜金 11:00–15:00 / 17:00–23:00 |
| Ngày nghỉ định kỳ | Thứ Hai hàng tuần / Tết (12/30–1/3) |
| Thuế suất tiêu chuẩn | 10% |
| Thuế suất giảm | 8% |
| Đơn vị tiền tệ | JPY (円) |

---

### ✅ Step 2: Chọn chế độ kinh doanh
> 📸 **Design:** `A1_002.png`
> **Đường dẫn:** 店舗設定 → 営業モード設定

**Đây là bước quan trọng nhất — xác định cách khách hàng đặt hàng:**

#### 🔵 Kênh nhận đơn (Order Channel)
| Tùy chọn | Mô tả | Bật/Tắt |
|---|---|---|
| Tablet tại bàn | Khách order qua màn hình đặt tại bàn | Toggle |
| LINE / Web Order | Khách order qua LINE Mini App hoặc Website | Toggle |
| Last Order | Cài đặt giờ last order tự động | Toggle + Giờ |

#### 🔵 AI nhận đơn (Voice / Text)
| Tùy chọn | Mô tả |
|---|---|
| Voice Order (音声注文支援) | AI nhận đơn bằng giọng nói |
| Text Order (文字注文支援) | AI nhận đơn bằng văn bản chat |

> 💡 **Quyết định cần xác nhận trước khi vận hành:**
> - Dùng **WEB order** (LINE/Web) hay **APP order** (Tablet tại bàn), hay cả hai?
> - Bật **Booking (đặt bàn)** hay không? → Cài tiếp ở Step 3
> - Bật **Waitlist (xếp hàng chờ)** hay không? → Cài tiếp ở Step 3

---

### ✅ Step 3: Cài đặt chức năng chi tiết
> 📸 **Design:** `A1_003.png` → `A1_009.png`
> **Đường dẫn:** 店舗設定 → 機能別詳細設定

Có 7 tab cài đặt, tùy chọn bật/tắt theo nhu cầu cửa hàng:

---

#### 📌 Tab 1 — Đặt bàn (予約設定)
> 📸 `A1_003.png`

| Mục | Cài đặt |
|---|---|
| Nhận đặt bàn online | ON / OFF |
| Chế độ xác nhận | Tự động / Cần xác nhận thủ công |
| Hình thức thanh toán | Online hoặc tại cửa hàng |
| Chính sách hủy | Trước X giờ |
| Hiển thị lịch | 09:00〜23:00 |
| Thời gian sử dụng / bàn | 60 phút/nhóm |
| Thời gian dọn dẹp | 15 phút |
| Nhắc nhở khách | Trước 1 giờ đến |
| Khung giờ có thể đặt | 11:00–14:00 (T2–T6) / 17:00–22:00 (T2–CN) |

---

#### 📌 Tab 2 — Xếp hàng chờ (待ち順番・受付設定)
> 📸 `A1_004.png`

| Mục | Cài đặt |
|---|---|
| Trạng thái nhận | Waitlist利用 (đang nhận) / 休止 (tạm dừng) |
| Kênh nhận | Online (Web/LINE) |
| Ngày nhận | T2–T6 10:00–21:00 / T7 09:00–22:00 / CN 09:00–22:00 |
| Nhắc nhở khách | Khi còn X nhóm / Tối đa 2 lần / Mỗi 5 phút |
| Tự động hủy | Sau 10 phút không phản hồi |
| Máy phát số thứ tự | Có (kết nối USB Printer, dạng A001〜) |

---

#### 📌 Tab 3 — Nhận đơn / KDS (注文・受付設定)
> 📸 `A1_005.png`

| Mục | Cài đặt |
|---|---|
| In phiếu đơn | ON / OFF (tự động in) |
| In phiếu bếp (Kitchen) | ON |
| Hiển thị icon dị ứng | ON / OFF |
| Phân loại Drink / Food | ON / OFF |
| Hands Free Mode | ON / OFF (KDS tự hiển thị, không cần chạm) |
| KDS cảnh báo thời gian nấu | ON / Cảnh báo sau 30 phút |
| Cờ đông khách (混雑フラグ) | ON / Tự động set sau 2 giờ vượt chuẩn |

---

#### 📌 Tab 4 — Thanh toán (会計設定)
> 📸 `A1_006.png`

| Mục | Cài đặt |
|---|---|
| POS会計 (kết nối POS) | ON / OFF |
| Thanh toán theo bàn | ON / OFF |
| Square (Thẻ tín dụng) | ON / OFF |
| PayPay (QR) | ON / OFF |
| QR tĩnh | ON / OFF |
| In biên lai | ON / OFF |
| Thanh toán thẻ tín dụng | ON / OFF |

---

#### 📌 Tab 5 — Takeout (テイクアウト設定)
> 📸 `A1_007.png`

| Mục | Cài đặt |
|---|---|
| Nhận đơn Takeout | ON / OFF |
| Ngày nhận | T2–T6 / Thêm T7, CN nếu cần |
| Giờ nhận | 10:00–20:00 |
| Thanh toán | PayPay / Square / Tiền mặt tại quầy |
| Tin nhắn thông báo | Template LINE: nhận đơn + báo sẵn sàng |

---

#### 📌 Tab 6 — Quản lý ca (シフト設定)
> 📸 `A1_008.png`

| Mục | Cài đặt |
|---|---|
| Bật chức năng đăng ký ca | ON / OFF |
| Template LINE: nhận đơn ca | Tự chỉnh nội dung |
| Template LINE: duyệt / từ chối | Tự chỉnh nội dung |
| Nhắc nhở trước ca | 24 giờ trước |

---

#### 📌 Tab 7 — Vận hành cửa hàng (店舗運用設定)
> 📸 `A1_009.png`

| Mục | Cài đặt |
|---|---|
| Âm thanh cảnh báo | ON |
| Tự động logout | ON (sau X phút không thao tác) |
| Chat nội bộ nhân viên | ON |
| Thông báo desktop | ON |
| Thông báo email | ON / OFF |
| Tablet Mode | ON / OFF |
| Kiosk Mode (Self-order) | ON / OFF |
| Nút gọi nhân viên | Tùy chỉnh (Thêm nước / Dọn bàn / Bát đĩa trẻ em...) |

---

### ✅ Step 4: Cài đặt thông báo & LINE
> 📸 **Design:** `A1_010.png`
> **Đường dẫn:** 店舗設定 → 通知・メッセージ設定

| Mục | Cài đặt |
|---|---|
| Kết nối LINE Official Account | LINE Business ID + Channel Access Token |
| Template: Xác nhận đặt bàn | Tự chỉnh nội dung (có biến {{日時}}, {{人数}}...) |
| Nhắc lịch hẹn trước 1 ngày | ON / Giờ gửi: 18:00 |
| Template: Hủy đặt bàn | Tự chỉnh |
| Template: Gọi số Waitlist | Nội dung + X phút trước |
| Template: Takeout hoàn thành | Tự chỉnh |
| Cảnh báo nhân viên: đông khách | ON / sau 30 phút |
| Cảnh báo: chậm trễ bếp (KDS) | ON |
| Cảnh báo: chậm trễ thanh toán | ON |
| Nhắc nhở nộp lịch ca | Trước X ngày |

---

### ✅ Step 5: Cài đặt AI & tự động hóa
> 📸 **Design:** `A1_011.png` → `A1_014.png`
> **Đường dẫn:** 店舗設定 → AI・自動化設定

Có 4 tab cài đặt:

---

#### 🤖 Tab 1 — Cài đặt cơ bản AI (基本設定)
> 📸 `A1_011.png`

| Mục | Cài đặt |
|---|---|
| Tên AI | Hana |
| Vai trò | 店員アシスタント (Trợ lý nhân viên) |
| Tốc độ phản hồi | 1.5 giây |
| Số lần phát tối đa | 5 lần |
| Kiểu nhân vật | Nữ nhân viên lịch sự (女性店員風・丁寧) |
| Ngôn ngữ | Tiếng Nhật / Tiếng Anh / Tiếng Việt |
| Prompt đa ngôn ngữ | Tự chỉnh cho từng ngôn ngữ |
| Từ cấm (NG ワード) | Từ không phù hợp, thông tin cá nhân... |

---

#### 🤖 Tab 2 — Kịch bản hội thoại (会話ロジック)
> 📸 `A1_012.png`

Tạo danh sách câu hỏi thường gặp → AI trả lời cố định:

| Từ khóa | Câu trả lời AI | Loại |
|---|---|---|
| トイレ (nhà vệ sinh) | トイレは奥の右側にございます | Cố định |
| おすすめ (gợi ý) | 本日のおすすめは「焼き鳥セット」です！ | Cố định |
| 営業時間 (giờ mở cửa) | 月〜金：11:00-22:00、土日：10:00-23:00 | Cố định |

---

#### 🤖 Tab 3 — Dữ liệu kết nối AI (AIデータ連携設定)
> 📸 `A1_013.png`

| Dữ liệu | Trạng thái | Mô tả |
|---|---|---|
| Thông tin Menu | ✅ Kết nối | Tên, giá, dị ứng, tag, gợi ý... |
| Tồn kho / Đông khách | ✅ Kết nối | Real-time KDS, hàng chờ bếp... |
| Lịch sử khách hàng | ☐ Chưa kết nối | Đơn cũ, sở thích, dị ứng... |

Cài đặt **loại trừ category** không cần AI tư vấn:
- Loại trừ: Takeout専用 / 廃番品 / スタッフ専用

---

#### 🤖 Tab 4 — Engine gợi ý (おすすめエンジン設定)
> 📸 `A1_014.png`

| Mục | Cài đặt |
|---|---|
| Thứ tự ưu tiên tag | おすすめ → 人気 → 早出し → カスタマイズ可 |
| Chế độ bình thường | Gợi ý từ tất cả menu |
| Chế độ đông khách | Ưu tiên món làm nhanh |
| Chế độ Last Order | Chỉ Drink + món làm nhanh |
| Ưu tiên món đã order lại | 70% ưu tiên |
| Không lặp menu liên tiếp | Trong 7 ngày qua |
| Điều chỉnh theo thời tiết | ON |
| Số món hiển thị | 3 / 5 / 8 món |

---

### ✅ Step 6: Kết nối thiết bị
> 📸 **Design:** `A1_015.png`
> **Đường dẫn:** デバイス連携設定

| Thiết bị | IP Address | Trạng thái |
|---|---|---|
| Máy in bếp (食事) RP-F10 | 192.168.1.10 | ✅ Kết nối OK |
| Máy in bar (ドリンク) P-D20 | 192.168.1.11 | ✅ Kết nối OK |
| Máy in hall / POS (レシート) | 192.168.1.12 | ✅ Kết nối OK |
| Máy in phiếu số (発券機) | 192.168.1.13 | ✅ Kết nối OK |

**KDS (Kitchen Display System):**
- KDS Bếp: Timeout 3 món / Tự ẩn sau 60 giây / Cảnh báo ON
- KDS Bar: Phân loại theo đồ uống

**Display (Bảng gọi khách):**
- Hiển thị số thứ tự / trạng thái chờ / vào bàn

---

## PHASE 2 — Tạo Master Data

### ✅ Step 7: Quản lý Menu
> 📸 **Design:** `A1_016.png` → `A1_022.png`
> **Đường dẫn:** マスタ管理 → メニュー管理

#### Luồng tạo menu mới (6 tab):

```
[基本情報] → [カスタマイズ] → [レシピ] → [栄養成分] → [AI設定] → [画像]
```

---

**① Thông tin cơ bản** — `A1_017.png`

| Mục | Ví dụ |
|---|---|
| Tên sản phẩm (quản lý) | とんこつラーメン |
| Mã sản phẩm | F-001 |
| Tên hiển thị (POS) | とんこつラーメン |
| Category | フード |
| Tên đa ngôn ngữ | EN: Tonkotsu Ramen / 中文: 豚骨拉面 |
| Sub-category | ラーメン |
| Thuế | Tiêu chuẩn 10% / Giảm 8% |
| Tag | 人気商品 / 季節限定 / テイクアウト対応 |
| Giá bán | ¥980 |
| Giá vốn | ¥350 |
| Quản lý tồn kho | ON / OFF |
| Thời gian bán | 01/10/2025 〜 31/12/2025 |
| Trạng thái bán | 販売中 / 一時停止 / 在庫切れ |

---

**② Tùy chỉnh (Customize)** — `A1_018.png`

| Mục | Ví dụ |
|---|---|
| Bật Customize | ✅ |
| Nhóm Customize | Size (単一選択・ラジオ) |
| Tùy chọn | 大 +¥100 / 中 ±0 (default) / 小 -¥50 |

---

**③ Công thức (Recipe)** — `A1_019.png`

| Mục | Ví dụ |
|---|---|
| Nguyên liệu | 豚骨 — 500g |
| Bước chế biến 1 | 豚骨を炊いてスープを取る |
| Bước chế biến 2 | 麺を炊いで盛り付ける |
| Ảnh/Video tham khảo | Upload file / URL video |

---

**④ Thành phần dinh dưỡng & Dị ứng** — `A1_020.png`

| Mục | Ví dụ |
|---|---|
| Năng lượng | 650 kcal |
| Protein | 21.5 g |
| Allergen | 卵 / 乳 / 小麦 / えび / かに / そば / 落花生 |

---

**⑤ Cài đặt AI** — `A1_021.png`

| Mục | Ví dụ |
|---|---|
| Đưa vào danh sách AI gợi ý | ✅ |
| Mô tả AI (EN/JP/中文) | "This cheese burger, perfect for..." |
| Điều kiện gợi ý | Mọi ngày / Khối lượng bình thường |
| Thời gian chế biến | Ngắn / Bình thường / Dài |
| Hạn chế (NG) | Bò / Gà / Đồ chay / NG Staff |
| Upsell liên quan | Bia / Highball / Wine |
| Ưu tiên gợi ý | 3 – Bình thường |

---

**⑥ Hình ảnh** — `A1_022.png`

| Mục | Cài đặt |
|---|---|
| Ảnh chính (POS/AI/Web) | Upload PNG/JPG/GIF — tối đa 800×400px |
| Gallery (ảnh phụ) | Thêm nhiều ảnh bổ sung |

---

#### Cài đặt Course (コース設定) — `A1_023.png`

| Course | Loại | Giá | Thời gian |
|---|---|---|---|
| プレミアムディナーコース | Thông thường | ¥5,500 | 90 phút |
| 飲み放題コース | Uống thả ga | ¥1,800 | 60 phút |
| 90分食べ放題 | Ăn thả ga | ¥3,980 | 90 phút |
| ランチセットA | Thông thường | ¥1,200 | Không giới hạn |

Cài đặt chi tiết từng course: hiển thị trên trang đặt bàn, số nhóm tối đa, menu áp dụng.

---

### ✅ Step 8: Quản lý Bàn (Table)
> 📸 **Design:** `A1_024.png`
> **Đường dẫn:** マスタ管理 → テーブル管理

| Tên bàn | Khu vực | Sức chứa | Loại | Ghi chú |
|---|---|---|---|---|
| テーブルA-01 | ホールA | 4 người | Hút thuốc | Gần cửa vào |
| テーブルB-05 | Phòng riêng | 2 người | Không hút | — |
| テーブルC-12 | ホールB | 6 người | Không hút | — |

- Bật/tắt hiển thị trên hệ thống đặt bàn
- Phát QR code riêng cho từng bàn

---

### ✅ Step 9: Quản lý Nhân viên (Staff)
> 📸 **Design:** `A1_025.png`
> **Đường dẫn:** マスタ管理 → スタッフ管理

| ID | Tên | Loại | Vai trò | LINE | Trạng thái |
|---|---|---|---|---|---|
| #S001 | 山田 太郎 | Nhân viên | Quản lý (店長) | ✅ Đã kết nối | Có hiệu lực |
| #S010 | 佐藤 花子 | Part-time | Hall | ❌ Chưa kết nối | Chờ duyệt |
| #S011 | 鈴木 一郎 | Part-time | Kitchen | ✅ Đã kết nối | Đã duyệt |

- Phân quyền theo vai trò (店長 / ホール / キッチン / カウンター...)
- Kết nối LINE để nhận thông báo ca / gọi nhân viên

---

### ✅ Step 10: Quản lý Khách hàng (Customer)
> 📸 **Design:** `A1_026.png`
> **Đường dẫn:** マスタ管理 → 顧客管理

| Tên | Điện thoại | Số lần đến | Tổng chi | Ghi chú đặc biệt |
|---|---|---|---|---|
| 田中 太郎 | 090-XXXX-5678 | 15 lần (VIP) | ¥185,000 | Đăng ký sinh nhật |
| 佐藤 舞 | 090-XXXX-4321 | 5 lần | ¥45,000 | Dị ứng tôm |
| 高橋 健太 | 080-XXXX-9999 | 1 lần | ¥3,200 | Đăng ký kỷ niệm (1/15) |
| 山田 花子 | 03-XXXX-1111 | 25 lần (VIP) | ¥350,000 | Luôn muốn bàn cạnh cửa sổ |

---

## PHASE 3 — Vận hành hàng ngày

### 📅 Quản lý ca làm việc (Shift)
> 📸 **Design:** `A1_027.png`
> **Đường dẫn:** マスタ管理 → シフト管理

**Tạo pattern ca:**
- Tên ca: ランチタイム / Giờ: 10:00–15:00 / Nghỉ: 12:00–12:30
- Vị trí: ホール / キッチン / カウンター / デリバリー

**Gửi thông báo tuyển ca qua LINE:**
- Chọn ngày, ca, số lượng cần
- Nhấn **「LINEにスタッフ募集を送信する」**
- Nhân viên đã kết nối LINE nhận được thông báo và đăng ký

---

### 📊 Báo cáo & Phân tích

#### Doanh thu (売上レポート)
> 📸 `A1_028.png` + `A1_031.png`

| KPI | Ví dụ |
|---|---|
| Doanh thu tháng | ¥381,922 (đạt 76.4% mục tiêu) |
| Khách đơn giá hôm nay | ¥2,220 |
| Tỷ lệ đạt mục tiêu | 91.4% |
| Phân tích Takeout / Tại chỗ | Donut chart (65% / 35%) |
| Phân tích theo mùa | Mùa thu ¥5.1M (cao nhất) |
| Phân tích theo ngày trong tuần | Thứ 7 cao nhất |
| Dashboard real-time | Doanh thu 60 phút gần nhất |
| Đặt mục tiêu ngày | Ngày thường ¥600,000 / Lễ ¥800,000 |

---

#### Đơn hàng & Phục vụ (注文・提供レポート)
> 📸 `A1_029.png`

| KPI | Ví dụ |
|---|---|
| Lượt khách hôm nay | 172 (+13 so hôm qua) |
| Tổng đơn hôm nay | 345 (+8.5%) |
| Tỷ lệ phục vụ đúng hạn | 100% (trong 10 phút) |
| Phân tích theo giờ | Biểu đồ cột theo giờ |

---

#### Khách hàng (顧客レポート)
> 📸 `A1_030.png`

| KPI | Ví dụ |
|---|---|
| Tổng khách | 2,847 |
| Khách mới tháng này | 423 (+18.5%) |
| Tỷ lệ quay lại | 68.2% |
| Tần suất đến trung bình | 2.4 lần/tháng |

Top khách VIP theo giá trị trọn đời (生涯価値), phân tích theo độ tuổi / giờ đến / hình thức dùng.

---

#### Đặt bàn (予約レポート)
> 📸 `A1_032.png`

| KPI | Ví dụ |
|---|---|
| Tỷ lệ lấp đầy tháng | 85% |
| Tỷ lệ hủy | 7% |
| Khách đơn giá trung bình | ¥3,500 |
| Số đặt bàn qua LINE | 120 lượt |
| Kênh đặt phổ biến nhất | LINE Mini App |
| Giờ cao điểm | 19:00–20:00 |

---

#### AI Engine (AIエンジンレポート)
> 📸 `A1_033.png`

| KPI | Ví dụ |
|---|---|
| Tỷ lệ dùng Voice Order | 45% |
| Tỷ lệ chấp nhận gợi ý AI | 32% |
| Lỗi nhận dạng giọng | 3.1% (mục tiêu <2%) |
| Đóng góp doanh thu từ AI | +¥150,000 |

Top keyword khách hay dùng: あっさりしたもの / 今すぐ提供 / 辛いメニュー...

Hiệu quả gợi ý: "Gợi ý tráng miệng sau ăn" đạt 45% chấp nhận, tăng +¥350/khách.

---

### 💳 Quản lý Thanh toán & Chốt ca

#### Lịch sử giao dịch (決済取引履歴)
> 📸 `A1_034.png`

Xem toàn bộ transaction: ID / Giờ / Loại thanh toán / Số tiền / Phí / Nhân viên phụ trách
- Hỗ trợ lọc theo ngày, loại thanh toán, trạng thái
- Có trường hợp **返金 (hoàn tiền)** được ghi rõ lý do

---

#### Chốt ca (日次精算レポート)
> 📸 `A1_036.png`

| Mục | Ví dụ |
|---|---|
| Doanh thu POS | ¥125,500 |
| Thực thu (kiểm đếm thực tế) | ¥125,100 |
| Chênh lệch | **-¥400** (tiền mặt thiếu) |
| Ghi chú của nhân viên chốt | Nhập lý do chênh lệch |

---

#### Thuế & Phí thanh toán (税率・手数料設定)
> 📸 `A1_035.png`

| Loại | Dịch vụ | Phí |
|---|---|---|
| Thẻ tín dụng | Square | 3.25% |
| QR Code | PayPay | 1.98% |
| Điện tử (IC) | Airペイ | 2.90% |

---

#### Cài đặt hóa đơn / layout (領収書・レイアウト設定)
> 📸 `A1_037.png`

| Mục | Cài đặt |
|---|---|
| Logo | Upload JPEG/PNG (200×50px) |
| Tên công ty phát hành | 株式会社さくらフード |
| Số đăng ký Invoice | T123456789123 |
| Footer message | またのお越しをよりお待ちしております。 |

---

## 📌 Checklist trước khi vận hành

```
[ ] Step 1: Điền đầy đủ thông tin cơ bản cửa hàng
[ ] Step 2: Xác định kênh nhận đơn (Tablet / LINE / Web)
[ ] Step 2: Quyết định bật/tắt Booking, Waitlist, Voice Order
[ ] Step 3: Cài đặt chi tiết theo từng tính năng đã bật
[ ] Step 4: Kết nối LINE Official Account + cài template thông báo
[ ] Step 5: Cài đặt AI (Tên, ngôn ngữ, kịch bản hội thoại, dữ liệu kết nối)
[ ] Step 6: Kết nối thiết bị (Printer, KDS, Display)
[ ] Step 7: Nhập toàn bộ menu (tên, giá, ảnh, AI setting)
[ ] Step 7: Tạo Course / Topping nếu có
[ ] Step 8: Đăng ký tất cả bàn + phát QR code
[ ] Step 9: Đăng ký nhân viên + kết nối LINE
[ ] Step 10: Nhập danh sách khách hàng thân thiết (nếu có)
[ ] Test: Gửi 1 đơn thử toàn luồng từ khách → bếp → thanh toán
[ ] Test: Gọi AI thử và kiểm tra phản hồi
[ ] Test: In thử phiếu bếp + biên lai
```
