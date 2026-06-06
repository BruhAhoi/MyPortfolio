import MochiThumbnail from "../assets/MochiThumbnail.jpg"
import HybridThumbnail from "../assets/HybridThumbnail.jpg"
import CollabSphereThumbnail from "../assets/CollabsphereThumbnail.jpg"

export const projects = [
  {
    id: 1,
    name: "Mochi",
    thumbnail: MochiThumbnail,
    description: "Ứng dụng nhắn tin realtime lấy cảm hứng từ Messenger. Hỗ trợ tin nhắn trực tiếp, hệ thống bạn bè, thông báo đã xem và phân trang cuộn vô hạn.",
    tags: ["React", "TypeScript", "Node.js", "Socket.IO", "MongoDB", "Vite"],
    github: "https://github.com/BruhAhoi/Mochi",
    demo: "https://mochi-coral-three.vercel.app/",
    period: "01/2026 – 02/2026",
    role: "Fullstack Developer",
    teamSize: 1,
    highlights: [
      "Kiến trúc và xây dựng toàn bộ fullstack từ đầu, deploy trên Vercel & Render",
      "Realtime với Socket.IO: nhắn tin trực tiếp, trạng thái online, tin nhắn chưa đọc",
      "JWT authentication với access/refresh token rotation, HttpOnly cookies",
      "Tích hợp Cloudinary cho upload avatar",
      "Infinite scroll với cursor-based pagination",
    ],
  },
  {
    id: 2,
    name: "Collab-sphere",
    thumbnail: CollabSphereThumbnail,
    description: "Nền tảng quản lý dự án cộng tác hỗ trợ Project-Based Learning. Đa vai trò (Staff, Head), Kanban board, rich text editor và interactive whiteboard realtime.",
    tags: ["React 18", "Redux", "TailwindCSS", "Socket.IO", "Vite"],
    github: "https://github.com/TriNguyen5204/collab-sphere_FE",
    demo: null,
    period: "10/2025 – 12/2025",
    role: "Frontend Developer",
    teamSize: 5,
    highlights: [
      "Thiết kế và implement toàn bộ UI cho vai trò Staff & Head of Department",
      "Tích hợp REST API cho CRUD quản lý sinh viên, giảng viên, dự án",
      "Quản lý state phức tạp đa vai trò bằng Redux",
      "Xây dựng Kanban board, rich text editor và interactive whiteboard via Socket",
    ],
  },
  {
    id: 3,
    name: "HYBRID",
    thumbnail: HybridThumbnail,
    description: "Nền tảng e-learning dành cho học sinh và giáo viên chương trình Cambridge tại Việt Nam. Hỗ trợ mini-game tương tác, tích hợp thanh toán PayOS.",
    tags: ["React", "TypeScript", ".NET", "Redux", "Netlify"],
    github: "https://github.com/ToRiTheBlackCat/HYBRID_FE",
    demo: null,
    period: "06/2025 – 09/2025",
    role: "Frontend Developer",
    teamSize: 3,
    highlights: [
      "Xây dựng quiz và flashcard template tương tác cho giáo viên",
      "Phát triển trang học có tích hợp audio cho học sinh",
      "Tích hợp REST API với .NET backend",
      "Implement thanh toán PayOS cho luồng nâng cấp tài khoản giáo viên",
      "Deploy và maintain frontend trên Netlify",
    ],
  },
]
