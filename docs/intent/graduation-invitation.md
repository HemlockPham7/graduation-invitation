# Confirmed Statement of Intent: HCMUS APCS Graduation Invitation Book App

- **Outcome:** Xây dựng ứng dụng web thiệp mời tốt nghiệp dạng cuốn sách lật 3D tương tác (kèm bộ tài liệu `docs/PRD.md`, `docs/TECH_ARCHITECTURE.md`, `docs/PLAN.md` chia theo từng phase & task cụ thể) cho lễ tốt nghiệp của **Phạm Việt Hoàng** (Ngành Khoa học Máy tính - Chương trình Tiên tiến APCS, Trường ĐH Khoa học Tự nhiên, ĐHQG-HCM, cơ sở 227 Nguyễn Văn Cừ, Phường Chợ Quán).
- **User:** Người nhận chính là **Gia Hân** (hiển thị mặc định), đồng thời hỗ trợ tham số URL (`?to=...`) để linh hoạt cá nhân hóa cho khách mời khác nếu cần.
- **Why now:** Chuẩn bị thiệp mời trang trọng, ấn tượng cho buổi Lễ Tốt Nghiệp diễn ra vào **8:00 sáng, ngày 06 tháng 12** tại **Giảng đường 1, cơ sở 227 Nguyễn Văn Cừ**.
- **Success:**
  - Hiệu ứng lật sách 3D mượt mà với nút **Next / Previous** (Mobile hiển thị 1 trang dọc; Desktop hiển thị sách mở đôi) và **hiệu ứng bắn pháo bông (fireworks)** khi mở thiệp.
  - Đủ 4 trang nội dung:
    - **Trang 0 (Bìa trước):** Bìa tốt nghiệp Trường ĐH Khoa học Tự nhiên (HCMUS), logo trường & APCS, ngành Khoa học Máy tính.
    - **Trang 1 (Thư mời):** Thư mời của Phạm Việt Hoàng gửi Gia Hân, thời gian 8:00 sáng ngày 06/12 tại Giảng đường 1, cơ sở 227 Nguyễn Văn Cừ, Phường Chợ Quán, TP.HCM.
    - **Trang 2 (Bản đồ chỉ dẫn):** Bản đồ vẽ tay phong cách thiệp cưới chỉ dẫn tới Giảng đường 1 - 227 Nguyễn Văn Cừ kèm nút mở Google Maps (`https://maps.app.goo.gl/dV3CwJ9quTNthErB9`).
    - **Trang 3 (Bìa sau - Thank You):** Lời cảm ơn trang trọng & nút liên hệ nhanh qua số điện thoại mock.
  - Phong cách màu **Xanh Navy HCMUS & Vàng Gold** trên nền giấy mỹ thuật kem.
- **Constraint:** Sử dụng **React + Vite + TypeScript + Tailwind CSS** (`react-pageflip`, `canvas-confetti`), 100% tĩnh (static client-side), có sẵn bộ SVG/minh họa và file config tách biệt để dễ chỉnh sửa.
- **Out of scope:** Không làm Backend/Database, không làm form RSVP lưu dữ liệu, không tích hợp nút "Thêm vào Google Calendar", không dùng Google Maps iframe nhúng trực tiếp thay cho bản đồ vẽ tay phong cách thiệp cưới.
