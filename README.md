# 🧑‍💻 Tạ Đức Thắng — Personal Portfolio

> Website CV cá nhân được xây dựng bằng React + TypeScript + Framer Motion.  
> Bài test vòng 2 — Thực tập sinh Frontend | GENX PK STORY

🔗 **Live Demo:** [https://my-portfolio-weld-six-75.vercel.app/](https://my-portfolio-weld-six-75.vercel.app/)  
📁 **Source Code:** [https://github.com/BruhAhoi/MyPortfolio.git](https://github.com/BruhAhoi/MyPortfolio.git)

---

## 🛠 Tech Stack

| Công nghệ | Mục đích |
|---|---|
| React 18 + Vite | UI framework & build tool |
| TypeScript | Type safety |
| TailwindCSS | Utility-first styling |
| Framer Motion | Page transitions & animations |
| React Router v6 | Client-side routing |
| CSS Variables | Light / Dark mode theming |

---

## 🚀 Cách chạy dự án

```bash
# 1. Clone repo
git clone https://github.com/BruhAhoi/MyPortfolio.git
cd your-repo-name

# 2. Cài dependencies
npm install

# 3. Chạy dev server
npm run dev

# 4. Build production
npm run build
```

Mở trình duyệt tại `http://localhost:5173`

---

## ✅ Danh sách tính năng đã hoàn thành

### Routing & Navigation
- [x] 5 routes: `/` `/resume` `/skills` `/projects` `/contact`
- [x] Trang 404 khi route không tồn tại
- [x] Active state trên navbar theo route hiện tại (Framer Motion `layoutId`)
- [x] Scroll to top tự động khi chuyển trang (`useScrollToTop` hook)

### Animation
- [x] 2 route transition variants: `fadeSlide` và `fadeScale` (Framer Motion)
- [x] Stagger animation cho hero section (Home)
- [x] Scroll reveal cho skill progress bars (`useInView`)
- [x] AnimatePresence cho mobile menu, project detail panel, contact form states

### Trang Chủ (Home)
- [x] Hero section với avatar, tên, chức danh, bio
- [x] Badge "Đang tìm kiếm cơ hội thực tập" với pulse animation
- [x] 3 CTA buttons: Xem Dự Án, Hồ Sơ Chi Tiết, GitHub
- [x] Stats section (Năm kinh nghiệm, Dự án, Technologies)
- [x] Tech stack strip

### Trang Resume
- [x] Thông tin cá nhân: ngày sinh, giới tính, địa chỉ, email, SĐT, GitHub
- [x] Mục tiêu nghề nghiệp
- [x] Học vấn: FPT University, Software Engineering, GPA 7.3, IELTS 6.0
- [x] Tab switching (Cá Nhân / Học Vấn) với animation

### Trang Skills
- [x] Technical skills phân theo nhóm: Language, Framework/Library, Tools, AI Tools
- [x] Progress bar animated (chạy khi scroll vào viewport)
- [x] Soft skills
- [x] Ngoại ngữ với progress indicator

### Trang Projects
- [x] 3 dự án: Mochi, Collab-sphere, HYBRID
- [x] Master-detail layout: sidebar list + detail panel
- [x] Filter theo tag/công nghệ
- [x] Search theo tên và mô tả dự án
- [x] Thumbnail, tên, mô tả, tech tags, GitHub link, Live Demo link
- [x] Demo disabled + tooltip "Chưa triển khai" cho dự án chưa có demo
- [x] Lazy load ảnh thumbnail (`loading="lazy"` + skeleton)

### Trang Contact
- [x] Form: Name, Email, Subject, Message
- [x] Validate: required, email format, message tối thiểu 20 ký tự
- [x] Error message theo từng field
- [x] Loading state + disable button khi submit
- [x] Success message sau submit (mock setTimeout 1.5s)
- [x] Không dùng `alert()`
- [x] Hiển thị kênh liên lạc: Email, SĐT, GitHub

### UI & UX
- [x] Light / Dark mode toggle (lưu vào localStorage, fallback system preference)
- [x] Responsive: Mobile < 768px, Tablet 768–1024px, Desktop > 1024px
- [x] Hamburger menu mobile với keyboard support (Enter/Space)
- [x] Back to top button
- [x] Micro-interactions: hover scale, glow, card hover

### Accessibility
- [x] Semantic HTML5: `header` `nav` `main` `section` `footer` `article` `aside`
- [x] Ảnh có `alt` attribute
- [x] `aria-label`, `aria-required`, `aria-pressed`, `aria-expanded`
- [x] Form `label` gắn đúng `htmlFor`
- [x] Keyboard navigation cho mobile menu (`focus-visible` ring)
- [x] `role="tablist"` / `role="tab"` / `role="tabpanel"` trên Resume tabs

### Clean Code
- [x] Data tách riêng: `src/data/personal.js`, `projects.js`, `skills.js`
- [x] Custom hooks: `useScrollToTop`, `useTheme`
- [x] Component hóa: `ProjectCard` (list + detail variant), `SkillBar`, `PageTransition`
- [x] Không hardcode lặp lại, tối ưu reuse

---

## 📁 Cấu trúc thư mục

```
src/
├── assets/          # Ảnh thumbnail dự án, avatar
├── components/      # Header, Footer, ProjectCard, SkillBar, PageTransition, BackToTop
├── data/            # personal.js, projects.js, skills.js
├── hooks/           # useScrollToTop.js, useTheme.js
└── pages/           # Home, Resume, Skills, Projects, Contact, NotFound
```

---

## 📸 Screenshots

| Dark Mode | Light Mode |
|---|---|
| ![Dark](./screenshots/dark.png) | ![Light](./screenshots/light.png) |

---

## 👤 Thông tin ứng viên

- **Họ tên:** Tạ Đức Thắng  
- **Email:** taducthangcoi123@gmail.com  
- **GitHub:** [github.com/BruhAhoi](https://github.com/BruhAhoi)  
- **Vị trí ứng tuyển:** Frontend Developer Intern