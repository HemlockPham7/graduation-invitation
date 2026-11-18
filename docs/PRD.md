# Product Requirements Document (PRD): Thiệp Mời Tốt Nghiệp HCMUS - APCS (3D Book App)

## 1. Tổng quan & Mục tiêu (Objective)

Xây dựng ứng dụng web **Thiệp Mời Tốt Nghiệp** dưới hình thức một **cuốn sách 3D lật trang tương tác (Interactive 3D Flipbook)** dành cho Lễ Tốt Nghiệp của **Phạm Việt Hoàng** — Sinh viên ngành **Khoa học Máy tính (Computer Science)**, **Chương trình Tiên tiến (APCS)**, **Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM (HCMUS)** tại cơ sở **227 Nguyễn Văn Cừ, Phường Chợ Quán, TP. Hồ Chí Minh**.

Ứng dụng mang lại trải nghiệm trang trọng, tinh tế như một tấm thiệp giấy mỹ thuật cao cấp kết hợp hiệu ứng lật trang 3D mượt mà và hiệu ứng bắn pháo bông chúc mừng ngay khi mở thiệp.

---

## 2. Đối tượng người dùng & Cá nhân hóa (Target Audience & Personalization)

- **Người gửi (Host):** Phạm Việt Hoàng (Cử nhân Khoa học Máy tính - Chương trình APCS, ĐH Khoa học Tự nhiên TP.HCM).
- **Người nhận chính (Default Guest):** **Gia Hân** (hiển thị mặc định khi truy cập đường dẫn gốc `/`).
- **Cơ chế cá nhân hóa linh hoạt (URL Query Parameter):**
  - Hỗ trợ query parameter `?to=<Tên khách mời>` (ví dụ: `?to=Gia+Hân` hoặc `?to=Minh+Tuấn`).
  - Nếu không có tham số `?to` hoặc tham số rỗng, hệ thống tự động hiển thị tên mặc định là **`Gia Hân`**.
  - Chuỗi tên lấy từ URL được decode an toàn, cắt khoảng trắng thừa và giới hạn độ dài hợp lý (tối đa 50 ký tự) để không làm vỡ bố cục thiệp.

---

## 3. Phong cách Thiết kế & Thẩm mỹ (Visual Direction)

- **Bảng màu chủ đạo (Color Palette):**
  - **Xanh Navy HCMUS (`#0F2547` / `#1B365D`):** Tượng trưng cho màu áo cử nhân và truyền thống Trường ĐH Khoa học Tự nhiên.
  - **Vàng Gold Ánh Kim (`#C5A059` / `#D4AF37`):** Dùng cho viền khung cổ điển, hoa văn góc trang, huy hiệu tốt nghiệp và các điểm nhấn trang trọng.
  - **Nền Giấy Mỹ Thuật Kem (`#FDFBF7` / `#F7F2E7`):** Tạo cảm giác bề mặt giấy in thiệp cao cấp, ấm áp và dễ đọc.
  - **Màu chữ (`#1E293B` / `#475569`):** Xám than đậm và xanh đen giúp độ tương phản đạt chuẩn WCAG AA.
- **Typography (Phông chữ tiếng Việt):**
  - **Tiêu đề & Tên riêng:** Font chữ có chân trang trọng / Calligraphy (`Playfair Display`, `Cormorant Garamond`, kết hợp `Great Vibes` hoặc `Dancing Script` cho chữ ký/lời chào).
  - **Nội dung thư mời & Thông tin:** Font chữ thanh lịch, rõ nét trên mọi màn hình (`Be Vietnam Pro` hoặc `Plus Jakarta Sans`).

---

## 4. Chi tiết Nội dung 4 Trang Sách (Page-by-Page Specifications)

Cuốn sách gồm **4 trang (tương ứng chỉ mục Trang 0, Trang 1, Trang 2, Trang 3)**:

### Trang 0: Trang Bìa Tốt Nghiệp (Front Cover)
- **Vai trò:** Bìa trước của cuốn sách tốt nghiệp, gây ấn tượng trang trọng ngay từ cái nhìn đầu tiên.
- **Nội dung bắt buộc:**
  - Quốc hiệu / Tên trường: **TRƯỜNG ĐẠI HỌC KHOA HỌC TỰ NHIÊN - ĐHQG-HCM** (*University of Science, VNU-HCM*) — Cơ sở Phường Chợ Quán, TP. Hồ Chí Minh.
  - Cụm **Logo HCMUS** và **Huy hiệu Chương trình Tiên tiến APCS** (thiết kế dạng vector/SVG sắc nét tông Vàng Gold & Xanh Navy).
  - Tiêu đề lớn: **LỄ TỐT NGHIỆP CỬ NHÂN (GRADUATION CEREMONY)**.
  - Ngành học: **Ngành Khoa học Máy tính (Computer Science)** — **Chương trình Tiên tiến (APCS)**.
  - Tên tân cử nhân trên bìa: **Phạm Việt Hoàng**.
  - Gợi ý tương tác: Nút/chỉ dẫn **"Mở thiệp / Bấm Next để lật trang →"** kèm hiệu ứng ánh kim nhẹ.

### Trang 1: Thư Mời Trang Trọng (Invitation Letter)
- **Vai trò:** Trang nội dung chính truyền tải lời mời cá nhân hóa từ Việt Hoàng đến Gia Hân.
- **Nội dung bắt buộc:**
  - Tiêu đề: **THƯ MỜI DỰ LỄ TỐT NGHIỆP**.
  - Lời chào trân trọng gửi tới người nhận: **"Thân mời: Gia Hân"** (hoặc tên từ `?to=...`).
  - Lời nhắn thân tình từ **Phạm Việt Hoàng** mời đến chung vui trong cột mốc tốt nghiệp đại học tại HCMUS.
  - Khối thông tin sự kiện (hiển thị rõ ràng, nổi bật với icon trang nhã):
    - **Tân cử nhân:** Phạm Việt Hoàng (Khoa học Máy tính - APCS).
    - **Thời gian:** **08:00 Sáng — Ngày 06 tháng 12**.
    - **Địa điểm:** **Giảng đường 1**, Cơ sở **227 Nguyễn Văn Cừ, Phường Chợ Quán, TP. Hồ Chí Minh** (Trường ĐH Khoa học Tự nhiên).

### Trang 2: Bản Đồ Chỉ Dẫn Phong Cách Thiệp Cưới (Wedding-Style Illustrated Map)
- **Vai trò:** Hướng dẫn đường đi đến Giảng đường 1 (Cơ sở 227 Nguyễn Văn Cừ) bằng phong cách vẽ tay nghệ thuật như bản đồ in trên thiệp đám cưới cao cấp.
- **Nội dung bắt buộc:**
  - Tiêu đề: **BẢN ĐỒ CHỈ DẪN (LOCATION MAP)**.
  - **Bản đồ vẽ tay minh họa (Custom Illustrated SVG Map):**
    - Phong cách nét vẽ tay thanh mảnh (fine-line architectural & botanical illustration) trên nền giấy kem, điểm xuyết hoa lá nhẹ nhàng kiểu thiệp cưới.
    - Thể hiện rõ trục đường chính **Nguyễn Văn Cừ (Phường Chợ Quán)**, các giao lộ lân cận giúp dễ định hình (An Dương Vương / Trần Phú / Nguyễn Trãi), **Cổng chính 227 Nguyễn Văn Cừ**, khuôn viên trường và vị trí đánh dấu nổi bật tại **Giảng đường 1 (Lecture Hall 1)** kèm la bàn cổ điển (Compass Rose).
  - Địa chỉ chi tiết: **Giảng đường 1 — 227 Nguyễn Văn Cừ, Phường Chợ Quán, TP. Hồ Chí Minh**.
  - **Nút hành động (CTA):** Nút **"Mở chỉ đường trên Google Maps"** mở tab mới tới đúng đường dẫn: `https://maps.app.goo.gl/dV3CwJ9quTNthErB9`.

### Trang 3: Trang Cảm Ơn & Liên Hệ Nhanh (Thank You & Back Cover)
- **Vai trò:** Trang kết (bìa sau) gửi lời cảm ơn chân thành tới Gia Hân và cung cấp phương thức liên hệ nhanh khi đến trường.
- **Nội dung bắt buộc:**
  - Tiêu đề nghệ thuật: **Thank You!** / **Lời Cảm Ơn**.
  - Thông điệp: *"Sự hiện diện của Gia Hân là niềm vinh hạnh và món quà ý nghĩa nhất đối với Việt Hoàng trong ngày đặc biệt này. Hẹn gặp bạn tại Giảng đường 1!"*
  - **Khối Liên Hệ Nhanh (Quick Contact):**
    - Hiển thị tên **Phạm Việt Hoàng** và **số điện thoại mock** (mặc định: `0909 123 456`, cấu hình dễ thay đổi trong file config).
    - Nút bấm **"Gọi điện liên hệ (`tel:0909123456`)"** và nút **"Sao chép số điện thoại"** (kèm thông báo toast *"Đã sao chép số điện thoại!"*).
  - Nút phụ: **"Xem lại từ trang đầu (Quay về Trang 0)"**.

---

## 5. Trải Nghiệm Tương Tác & Hiệu Ứng (Interactive Experience)

1. **Hiệu ứng Lật Sách 3D & Điều Hướng (3D Book Flip & Navigation):**
   - **Trên Mobile / Màn hình dọc (< 768px):** Hiển thị **1 trang đơn (Single-page portrait mode)**. Người dùng bấm nút **Next / Previous** để lật lần lượt từng trang: `Trang 0` → `Trang 1` → `Trang 2` → `Trang 3` (tắt thao tác kéo/click trực tiếp lên bìa sách).
   - **Trên Desktop / Màn hình ngang (≥ 768px):** Hiển thị **chế độ cuốn sách có bìa (2-page spread mode with cover)**:
     - Trạng thái đầu: **Trang 0 (Bìa trước)** nằm trang trọng ở giữa.
     - Bấm **Next**: Sách mở đôi hiển thị **Trang 1 (bên trái - Thư mời)** và **Trang 2 (bên phải - Bản đồ thiệp cưới)**.
     - Bấm **Next** lần nữa: Sách khép lại về **Trang 3 (Bìa sau - Thank You)**.
   - **Thanh điều hướng (Navigation Bar):** Luôn hiển thị trực quan phía dưới cuốn sách gồm:
     - Nút **Previous (Trang trước)** — tự động disable khi đang ở Trang 0.
     - Bộ chỉ báo trang hiện tại (Page Indicator: `Trang 0 / 3`, hoặc chấm tròn từng trang).
     - Nút **Next (Trang tiếp theo)** — tự động disable khi đã ở Trang 3.
   - Hỗ trợ phím mũi tên bàn phím (`ArrowLeft` / `ArrowRight`) trên máy tính.

2. **Hiệu ứng Bắn Pháo Bông (Fireworks / Confetti Celebration):**
   - Kích hoạt **hiệu ứng bắn pháo bông chúc mừng** (tông màu Vàng Gold, Xanh Navy, Trắng ánh kim) khi người dùng mở thiệp (lật từ Trang 0 sang Trang 1 hoặc khi khởi tạo mở thiệp).
   - Có thêm nút nhỏ hoặc tự động bắn nhẹ khi đến Trang 3 (Thank You), đảm bảo tôn trọng cài đặt `prefers-reduced-motion` và không gây giật lag trên điện thoại.

---

## 6. Tiêu Chí Nghiệm Thu (Success Criteria)

- [x] **SC-1 (Đúng cấu trúc 4 trang):** Hiển thị đầy đủ và chính xác nội dung Trang 0 (Bìa HCMUS - KHMT - APCS), Trang 1 (Thư mời Phạm Việt Hoàng gửi Gia Hân, 8h sáng 06/12, Giảng đường 1 - 227 Nguyễn Văn Cừ, P. Chợ Quán), Trang 2 (Bản đồ vẽ tay kiểu thiệp cưới + nút mở `https://maps.app.goo.gl/dV3CwJ9quTNthErB9`), Trang 3 (Thank you + nút liên hệ số điện thoại mock).
- [x] **SC-2 (Điều hướng Next / Previous):** Nút Next và Previous hoạt động chính xác ở mọi trang; disable đúng trạng thái đầu/cuối; tắt kéo góc bìa bằng chuột theo yêu cầu.
- [x] **SC-3 (Responsive Mobile & Desktop):** Trên Mobile (375×812) hiển thị 1 trang dọc không bị tràn ngang hay cắt chữ; trên Desktop hiển thị sách mở đôi 3D cân đối (kích thước đã được phóng lớn thêm 70%).
- [x] **SC-4 (Hiệu ứng Pháo Bông):** Khi mở thiệp từ Trang 0 sang Trang 1 (và/hoặc nút chúc mừng), hiệu ứng pháo bông bắn mượt mà ở ≥ 55fps.
- [x] **SC-5 (Cá nhân hóa URL):** Truy cập `/` hiển thị tên `Gia Hân`; truy cập `/?to=Minh%20Anh` hiển thị tên `Minh Anh` ở Trang 1 và Trang 3.
- [x] **SC-6 (100% Static & Dễ cấu hình):** Không phụ thuộc backend; toàn bộ thông tin chữ, số điện thoại mock, link Google Maps nằm trong một file cấu hình trung tâm (`src/config/invitationConfig.ts`).

---

## 7. Phạm Vi Giới Hạn (Out of Scope)

- **Không làm Backend / Database / API Server.**
- **Không làm tính năng thêm sự kiện vào Google Calendar / Apple Calendar (.ics).**
- **Không làm biểu mẫu RSVP hoặc gửi lời chúc lưu cơ sở dữ liệu.**
- **Không nhúng Google Maps `<iframe>` mặc định** (thay bằng bản đồ vẽ tay phong cách thiệp cưới + nút bấm mở link Google Maps trực tiếp).
