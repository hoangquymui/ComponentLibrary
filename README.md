# 🎨 Tailwind Lab — UI Component Library

> Bộ sưu tập component UI hiện đại được xây dựng bằng **React 19**, **TypeScript**, **Tailwind CSS v4** và **Vite 8**.  
> Mỗi component đều kèm theo **AI Prompt** chi tiết để tái tạo lại bằng bất kỳ công cụ AI nào.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite&logoColor=white)](https://vite.dev)

---

## ✨ Tính năng nổi bật

- 🧩 **37+ UI Components** được phân loại rõ ràng theo 5 danh mục
- 🌗 **Dark / Light Mode** — chuyển đổi mượt mà toàn bộ ứng dụng
- 📋 **AI Prompt** — mỗi component có sẵn prompt chi tiết để dùng với AI
- 📱 **Responsive Design** — tương thích mọi kích thước màn hình
- ⚡ **Collapsible Sidebar** — điều hướng thu gọn/mở rộng với hiệu ứng cubic-bezier
- 🎯 **Design System** — hệ thống token màu sắc thống nhất qua `theme.ts`

---

## 🗂️ Danh mục Component

### 🔘 Buttons & Badges — 13 components

| Component | Mô tả |
|---|---|
| Theme Toggle Switcher | Nút chuyển Sáng/Tối với hiệu ứng xoay 3D icon ☀️/🌙 |
| Gradient Glow Button | Nút gradient rực rỡ với hiệu ứng vệt sáng quét khi hover |
| Glassmorphism Button | Nút kính mờ backdrop-blur hỗ trợ cả 2 chế độ |
| Neumorphism Soft UI Button | Nút đổ bóng kép 3D lún chìm khi nhấp |
| Primary Slate Button | Nút chính tối giản chuẩn Design System |
| Outline Border Button | Nút viền thanh lịch cho thao tác phụ |
| Danger Action Button | Nút cảnh báo màu đỏ cho tác vụ xóa/nguy hiểm |
| Loading State Button | Nút đang tải với Spinner xoay tròn animate-spin |
| Badge Counter Button | Nút thông báo với nhãn số lượng animate-bounce |
| Button Group Counter | Bộ nút tăng/giảm số lượng (Segmented Counter) |
| Icon Toggle Button | Nút thả tim tương tác chuyển đổi trạng thái |
| Dropdown Menu Button | Nút kèm menu xổ xuống với hiệu ứng fade-in |
| Floating Action Button (FAB) | Nút tròn nổi xoay 180° khi kích hoạt |

### 🃏 Cards & Containers — 8 components

| Component | Mô tả |
|---|---|
| Profile Card Glassmorphism | Thẻ cá nhân kính mờ với badge Online |
| Stat Card Analytics | Thẻ thống kê doanh thu và % tăng trưởng |
| Pricing Plan Card | Thẻ bảng giá Pro Plan với danh sách tính năng |
| Blog Article Card | Thẻ bài viết có ảnh bìa gradient và tag |
| E-commerce Product Card | Thẻ sản phẩm với nhãn giảm giá và sao đánh giá |
| Social Feed Post Card | Thẻ bài đăng MXH với tương tác tim/bình luận/chia sẻ |
| Event Schedule Card | Thẻ sự kiện nổi bật ngày tháng và nút đăng ký |
| Task Progress Card | Thẻ tiến độ công việc với Progress Bar gradient |

### 📋 Forms & Inputs — 5 components

| Component | Mô tả |
|---|---|
| Login Form | Form đăng nhập với ô Email, Mật khẩu và phản hồi submit |
| Register Form | Form đăng ký tài khoản mới |
| Reset Password Form | Form đặt lại mật khẩu có xác nhận |
| Feedback Form | Form gửi nhận xét với textarea |
| Search Input Field | Ô tìm kiếm nhanh với icon kính lúp |

### 🧭 Navigation & Bars — 7 components

| Component | Mô tả |
|---|---|
| Collapsible Left Sidebar | Sidebar trái thu gọn/mở rộng với nút ☰ và ThemeToggle |
| Collapsible Right Sidebar | Sidebar phải thu gọn/mở rộng với nút ☰ và ThemeToggle |
| Website Top Header Navigation | Navbar web đầy đủ Logo, Links, Tìm kiếm, Thông báo |
| Segmented TabBar | Thanh chuyển tab dạng viên thuốc |
| Breadcrumb Path Navigation | Thanh phân cấp đường dẫn với icon |
| Page Pagination Navigation | Thanh phân trang với nút trước/sau |
| Mobile Bottom Navigation | Thanh điều hướng đáy màn hình di động 4 tab |

### ⚙️ Others & Utilities — 4 components

| Component | Mô tả |
|---|---|
| Indeterminate Spinner | Con quay tải xoay khi thời gian xử lý là ẩn số (không có %) |
| Determinate Progress Ring | Vòng tròn SVG điền dần đến % hoàn thành |
| Linear Progress Bar | Thanh ngang dùng khi có đủ không gian hiển thị track |
| Custom Accessible Progress Bar | Thanh tùy chỉnh với `role="progressbar"` + `aria-valuenow` chuẩn WCAG |

---

## 🚀 Cài đặt & Chạy dự án

### Yêu cầu hệ thống

- [Node.js](https://nodejs.org) >= 18.x
- npm >= 9.x

### Các bước cài đặt

```bash
# 1. Clone repository
git clone https://github.com/<your-username>/tailwindcss-component.git
cd tailwindcss-component

# 2. Cài đặt dependencies
npm install

# 3. Chạy môi trường development
npm run dev
```

Mở trình duyệt tại **http://localhost:5173**

### Các lệnh khác

```bash
# Build production
npm run build

# Preview bản build
npm run preview

# Chạy linter (Oxlint)
npm run lint
```

---

## 🏗️ Cấu trúc dự án

```
tailwindcss-component/
├── public/
├── src/
│   ├── App.tsx                        # Layout chính + Routing
│   ├── theme.ts                       # Design tokens thống nhất
│   ├── main.tsx                       # Entry point
│   ├── index.css                      # Global styles
│   │
│   ├── components/
│   │   ├── NavigationDrawer/          # Sidebar điều hướng chính của App
│   │   ├── ThemeToggle/               # Component chuyển Dark/Light Mode
│   │   ├── Buttons/                   # 13 Button components
│   │   ├── Cards/                     # 8 Card components
│   │   ├── Forms/                     # 5 Form components
│   │   └── Navigation/                # 7 Navigation components
│   │
│   ├── Pages/
│   │   ├── Buttons/ButtonsPage.tsx
│   │   ├── Cards/CardsPage.tsx
│   │   ├── Forms/FormsPage.tsx
│   │   ├── Navigation/NavigationPage.tsx
│   │   └── ComponentDetail/           # Trang chi tiết từng component
│   │
│   ├── data/
│   │   ├── buttonsData.tsx            # Dữ liệu + AI Prompt cho Buttons
│   │   ├── cardsData.tsx              # Dữ liệu + AI Prompt cho Cards
│   │   ├── formsData.tsx              # Dữ liệu + AI Prompt cho Forms
│   │   ├── navigationComponentsData.tsx # Dữ liệu + AI Prompt cho Navigation
│   │   └── navigationData.ts          # Menu items của Sidebar chính
│   │
│   ├── hooks/
│   │   └── useDarkMode.ts             # Hook quản lý Dark Mode
│   └── types/
│       └── componentDetail.ts         # TypeScript types
│
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠️ Tech Stack

| Công nghệ | Phiên bản | Vai trò |
|---|---|---|
| [React](https://react.dev) | 19.2 | UI Framework |
| [TypeScript](https://www.typescriptlang.org) | 6.0 | Type Safety |
| [Tailwind CSS](https://tailwindcss.com) | v4.3 | Styling |
| [Vite](https://vite.dev) | 8.1 | Build Tool |
| [React Router DOM](https://reactrouter.com) | 7.x | Client-side Routing |
| [Lucide React](https://lucide.dev) | 1.27 | Icon Library |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter) | 1.71 | Fast Linter |

---

## 🎨 Design System

Toàn bộ màu sắc, spacing và hiệu ứng được quản lý tập trung qua `src/theme.ts`:

```ts
// Ví dụ sử dụng theme token
import { theme } from "@/theme";

<div className={`${theme.colors.bg.primary} ${theme.colors.text.primary}`}>
  Nội dung
</div>
```

### Tính năng Dark Mode

Dark Mode được quản lý bởi hook `useDarkMode` — lưu trạng thái vào `localStorage` và áp dụng class `dark` lên thẻ `<html>`:

```tsx
import { useDarkMode } from "@/hooks/useDarkMode";

const { isDark, toggleDarkMode } = useDarkMode();
```

---

## 📖 Cách sử dụng AI Prompt

Mỗi component trong thư viện đều có sẵn **AI Prompt** chi tiết. Để xem prompt:

1. Mở ứng dụng tại `http://localhost:5173`
2. Chọn danh mục (Buttons, Cards, Forms, Navigation)
3. Nhấp vào bất kỳ component nào
4. Sao chép nội dung **"AI Prompt"** trong trang chi tiết
5. Dán vào ChatGPT, Gemini, Claude hoặc Copilot để tái tạo component

---

## 📄 License

© 2026 **Tailwind Lab** — Designed & Built with ❤️ by [**HoangQuyMui**](https://github.com/HoangQuyMui)
