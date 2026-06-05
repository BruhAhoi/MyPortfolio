# 🖥️ Tạ Đức Thắng – Personal Portfolio

> Bài Test Vòng 2 – Frontend Intern · GENX PK Story

## 🛠️ Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Animation | Framer Motion |
| Styling | TailwindCSS v3 |
| Deploy | Vercel / Netlify |

## 🚀 Cách chạy dự án

```bash
git clone https://github.com/<your-username>/portfolio.git
cd portfolio
npm install
npm run dev     # http://localhost:5173
npm run build   # Production build
```

## ✅ Tính năng đã hoàn thành

### Routing & Navigation
- [x] 5 routes: `/` `/resume` `/skills` `/projects` `/contact`
- [x] Trang 404 khi route không tồn tại
- [x] Navbar với active state (animated indicator)
- [x] ScrollToTop khi chuyển trang
- [x] Hamburger menu mobile (keyboard accessible)

### Animation (Framer Motion)
- [x] Route transition fadeSlide (opacity + y)
- [x] Route transition fadeScale (opacity + scale)
- [x] Navbar active indicator với layoutId spring
- [x] SkillBar animate vào viewport (useInView)
- [x] ProjectCard animate mount/unmount

### Projects
- [x] Data-driven từ src/data/projects.js
- [x] Filter theo tag/công nghệ
- [x] Search theo tên + mô tả
- [x] Demo disabled + tooltip khi không có link

### Contact Form
- [x] Validate: required + email format + message >= 20 chars
- [x] UX states: lỗi per-field, loading spinner, success message
- [x] Không dùng alert()

### Accessibility
- [x] Semantic HTML đầy đủ
- [x] ARIA attributes
- [x] Keyboard navigation

### Responsive
- [x] Mobile / Tablet / Desktop

## 📁 Cấu trúc

```
src/
├── pages/          # Home, Resume, Skills, Projects, Contact, NotFound
├── components/     # Header, Footer, PageTransition, ProjectCard, SkillBar, BackToTop
├── data/           # personal.js, projects.js, skills.js
├── hooks/          # useScrollToTop.js
└── App.jsx
```

## 📬 Liên hệ

Tạ Đức Thắng · taducthangcoi123@gmail.com · github.com/BruhAhoi
