# AutoPhim Next.js (Dành cho Vercel)

Đây là mã nguồn web phim sử dụng **Next.js (App Router)**. Hệ thống sẽ tự động cập nhật phim từ OPhim API và có tính năng SSR/ISR giúp web cực nhanh.

## Hướng dẫn chạy thử trên máy tính Long
1. Cài đặt Node.js.
2. Mở Terminal tại thư mục này.
3. Chạy lệnh cài đặt:
   ```bash
   npm install
   ```
4. Chạy server phát triển:
   ```bash
   npm run dev
   ```
5. Mở trình duyệt vào `http://localhost:3000`.

## Hướng dẫn đẩy thẳng lên Vercel để chạy thật
1. Tải ứng dụng **GitHub Desktop** hoặc dùng web GitHub tạo một kho lưu trữ (Repository) mới.
2. Đẩy toàn bộ thư mục này lên kho lưu trữ GitHub đó.
3. Đăng nhập vào [Vercel.com](https://vercel.com).
4. Nhấn **Add New... > Project**.
5. Chọn kho lưu trữ GitHub vừa tải lên.
6. Nhấn **Deploy**. 

Vercel sẽ tự động cấu hình Next.js và cấp cho Long một đường link web thực tế xịn sò!
