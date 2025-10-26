# 🏋️‍♂️ FitZone – Ứng dụng Web Giới thiệu Phòng Gym & Fitness

FitZone là một ứng dụng web được xây dựng bằng **ReactJS + TailwindCSS**, mô phỏng website giới thiệu phòng gym hiện đại.  
Dự án được tách component rõ ràng, có hiệu ứng động, giỏ hàng, đăng nhập, và giao diện trực quan.

---

## 🚀 Demo
> _(Nếu bạn đã deploy trên Vercel/Netlify, có thể thêm link ở đây)_

[🔗 Xem bản demo trực tuyến](#)

---

## 🧩 Tính năng nổi bật

✅ **Trang chủ (Hero Section)** – Giới thiệu tổng quan FitZone  
✅ **Giới thiệu (About)** – Trình bày sứ mệnh & tầm nhìn  
✅ **Gói tập (Packages)** – Danh sách các gói tập luyện với giá  
✅ **Bài tập (Workouts)** – Hiển thị danh sách bài tập, xem chi tiết trong modal  
✅ **Sản phẩm (Products)** – Cho phép thêm vào giỏ hàng  
✅ **Giỏ hàng (Cart Modal)** – Quản lý sản phẩm, tính tổng tiền, thanh toán giả lập  
✅ **Trích dẫn (Quotes)** – Hiển thị luân phiên các câu động lực với hiệu ứng mượt  
✅ **Đăng nhập / Đăng ký (Auth Modals)** – Mô phỏng đăng nhập cơ bản  
✅ **Liên hệ (Contact)** – Form liên hệ đơn giản  
✅ **Giao diện responsive** – Hiển thị đẹp trên mọi thiết bị  

---

## 🛠️ Công nghệ sử dụng

| Công nghệ | Mô tả |
|------------|--------|
| **ReactJS 18+** | Xây dựng component và logic UI |
| **TailwindCSS (CDN)** | Dùng hệ thống utility-class để thiết kế nhanh |
| **React Hooks (useState, useEffect)** | Quản lý state và hiệu ứng |
| **Redux (tùy chọn)** | Dự phòng quản lý state mở rộng |
| **SCSS** | Tùy chỉnh hiệu ứng riêng (global.scss) |
| **Vite / Create React App** | Dev server & build tool |
| **GitHub Pages / Netlify / Vercel** | Triển khai website |

---

## 📂 Cấu trúc thư mục

```bash
src/
├── index.js
├── reportWebVitals.js
├── styles/
│   └── global.scss
├── hooks/
│   ├── useAuth.js
│   └── useCart.js
├── store/
│   └── reducers/
├── views/
│   ├── App.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Packages.jsx
│   │   ├── Workouts.jsx
│   │   ├── Products.jsx
│   │   ├── Quotes.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Modals/
│   │       ├── LoginModal.jsx
│   │       ├── RegisterModal.jsx
│   │       ├── PackageModal.jsx
│   │       ├── WorkoutModal.jsx
│   │       └── CartModal.jsx

⚙️ Cài đặt & chạy dự án
1️⃣ Clone repo
git clone https://github.com/<tên-tài-khoản>/<tên-dự-án>.git
cd <tên-dự-án>
2️⃣ Cài dependencies
- Nếu dùng npm:
npm install

hoặc dùng yarn:
yarn install

3️⃣ Chạy project
npm start

Ứng dụng sẽ chạy tại http://localhost:3000

---

🧠 Ghi chú quan trọng
- Dự án sử dụng Tailwind qua CDN (không build CSS), giúp bạn khởi chạy nhanh mà không cần cấu hình PostCSS.
- Nếu bạn muốn tối ưu build, có thể cài Tailwind qua npm:
npm install -D tailwindcss
npx tailwindcss init

- Các modal (Login, Register, Package, Workout, Cart) được quản lý qua useState trong App.jsx.
- useAuth và useCart là custom hooks để mô phỏng hành vi đăng nhập và giỏ hàng.

---

📦 Build cho production
npm run build

- Thư mục /build sẽ được tạo — bạn có thể deploy lên:
Vercel: vercel --prod

Netlify: upload build folder

GitHub Pages: npm run deploy (nếu có cấu hình gh-pages)

---

💬 Liên hệ & bản quyền

Tác giả: Tạ Anh Quân
📧 Email: taquan076@gmail.com
]
🌐 Dự án học tập ReactJS - Tailwind 2025

“Cơ thể bạn có thể làm được — chính tâm trí bạn cần thuyết phục.” 💪

---

⭐ Gợi ý mở rộng

 Tích hợp Firebase để lưu tài khoản thật

 Thêm giỏ hàng thật với LocalStorage

 API cho danh sách bài tập & sản phẩm

 Trang admin quản lý nội dung

 Tối ưu SEO với React Helmet