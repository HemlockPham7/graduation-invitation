# Thiệp Mời Tốt Nghiệp 3D Book App — HCMUS · Khoa học Máy tính (APCS)

Ứng dụng web **Thiệp Mời Tốt Nghiệp** dạng cuốn sách lật 3D tương tác dành cho Lễ Tốt Nghiệp của **Phạm Việt Hoàng** — Ngành Khoa học Máy tính, Chương trình Tiên tiến (**APCS**), **Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM (HCMUS)** tại cơ sở **227 Nguyễn Văn Cừ, Phường Chợ Quán, TP. Hồ Chí Minh**.

---

## Tính năng nổi bật

- **Cấu trúc sách 4 trang (Trang 0 → Trang 3):**
  - **Trang 0 (Bìa trước):** Bìa tốt nghiệp Trường ĐH Khoa học Tự nhiên (HCMUS) tông Xanh Navy & Vàng Gold, huy hiệu HCMUS & APCS, ngành Khoa học Máy tính.
  - **Trang 1 (Thư mời):** Thư mời cá nhân hóa của **Phạm Việt Hoàng** gửi **Gia Hân** (hỗ trợ tuỳ biến qua tham số URL `?to=...`), thời gian **08:00 Sáng — Ngày 06 tháng 12**, tại **Giảng đường 1, Cơ sở 227 Nguyễn Văn Cừ, Phường Chợ Quán, TP.HCM**.
  - **Trang 2 (Bản đồ chỉ dẫn):** Bản đồ SVG vẽ tay theo phong cách thiệp cưới dẫn lối vào Giảng đường 1 (227 Nguyễn Văn Cừ) kèm nút mở trực tiếp [Google Maps](https://maps.app.goo.gl/dV3CwJ9quTNthErB9).
  - **Trang 3 (Bìa sau — Thank You):** Lời cảm ơn chân thành & thẻ **Liên hệ nhanh** qua số điện thoại mock (Gọi điện trực tiếp hoặc Sao chép SĐT).
- **Điều hướng lật trang bằng nút bấm:** Chuyển trang mượt mà qua nút **Tiếp (Next)** / **Trước (Previous)** (đã tắt thao tác kéo/click trực tiếp lên bìa sách để tránh lật nhầm).
- **Hiệu ứng bắn pháo bông (`canvas-confetti`):** Tự động bắn pháo bông chúc mừng khi mở thiệp từ Trang 0 sang Trang 1 và khi lật đến Trang 3.

---

## Cài đặt & Chạy dự án

```bash
# Cài đặt dependencies
npm install

# Chạy máy chủ phát triển (http://localhost:5173)
npm run dev

# Chạy toàn bộ Unit & Component Tests
npm run test -- --run

# Kiểm tra kiểu TypeScript & Build bản Production tĩnh (ra thư mục dist/)
npm run build
```

---

## Cá nhân hóa & Cấu hình

- **Đổi tên khách mời trên URL:**
  - Mặc định (`/`) hiển thị: **Gia Hân**
  - Cá nhân hóa qua query parameter: `/?to=Tên+Khách+Mời`
- **Chỉnh sửa nội dung thiệp / Số điện thoại / Link bản đồ:**
  - Mọi dữ liệu được quản lý tập trung tại [`src/config/invitationConfig.ts`](./src/config/invitationConfig.ts).

---

## Tài liệu Dự án (`docs/`)

- [`docs/PRD.md`](./docs/PRD.md) — Tài liệu yêu cầu sản phẩm chi tiết.
- [`docs/TECH_ARCHITECTURE.md`](./docs/TECH_ARCHITECTURE.md) — Kiến trúc kỹ thuật & quy chuẩn mã nguồn.
- [`docs/PLAN.md`](./docs/PLAN.md) — Kế hoạch triển khai theo từng Phase & Task.
