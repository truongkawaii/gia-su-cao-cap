# Hướng Dẫn Deploy Website Lên GitHub Pages

Dự án của bạn đã được mình cấu hình sẵn công cụ `gh-pages` và `vite` để việc deploy trở nên cực kỳ đơn giản. Bạn chỉ cần làm theo các bước dưới đây để đưa website lên mạng.

## Bước 1: Tạo Repository trên GitHub

1. Đăng nhập vào tài khoản [GitHub](https://github.com/) của bạn.
2. Nhấn nút **New** (hoặc dấu +) để tạo Repository mới.
3. Đặt tên cho Repository (ví dụ: `gia-su-math`).
4. Chọn chế độ **Public** (Công khai).
5. Nhấn **Create repository**.

## Bước 2: Đẩy Code lên GitHub

Mở **Terminal** (tại thư mục dự án `gia-su-cao-cap`) và chạy lần lượt các lệnh sau.
_(Thay thế đường dẫn `https://github.com/...` bằng đường dẫn Repository bạn vừa tạo ở Bước 1)_.

```bash
# 1. Thêm kết nối tới GitHub (nếu chưa có)
git remote remove origin  # (Chạy lệnh này để xóa link cũ nếu có, cho chắc ăn)
git remote add origin https://github.com/USERNAME/TEN-REPO-CUA-BAN.git

# 2. Lưu lại các thay đổi hiện tại
git add .
git commit -m "Sẵn sàng deploy"

# 3. Đẩy code lên nhánh chính
git branch -M main
git push -u origin main
```

## Bước 3: Deploy (Đưa web lên sóng)

Mình đã cài sẵn lệnh deploy trong `package.json`. Bạn chỉ cần chạy **một lệnh duy nhất**:

```bash
npm run deploy
```

**Quá trình này sẽ tự động:**

1. Chạy `npm run build` để tối ưu code ra thư mục `dist`.
2. Tạo nhánh `gh-pages` và đẩy code đã build lên đó.

## Bước 4: Kích hoạt GitHub Pages (Chỉ làm lần đầu)

1. Quay lại trang GitHub Repository của bạn.
2. Vào tab **Settings** (Cài đặt).
3. Tìm menu bên trái, chọn **Pages**.
4. Tại mục **Build and deployment**:
   - **Source**: Chọn `Deploy from a branch`.
   - **Branch**: Chọn nhánh `gh-pages` và folder `/ (root)`.
5. Nhấn **Save**.

⏳ **Đợi khoảng 1-2 phút**, GitHub sẽ hiển thị đường link website của bạn ở ngay đầu trang đó (dạng `https://username.github.io/ten-repo/`).

---

### 🔥 Mẹo nhỏ:

- **Cập nhật web:** Sau này mỗi khi bạn sửa code xong, chỉ cần chạy lại `npm run deploy` là web online sẽ tự động cập nhật theo. Không cần cấu hình gì thêm!
- **Lỗi 404 trắng trang?** Kiểm tra lại file `vite.config.js` xem đã có dòng `base: './'` chưa (Hiện tại mình đã thêm sẵn cho bạn rồi nên yên tâm nhé).
