import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main className="min-h-screen pt-16 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="font-mono text-accent text-sm mb-4">404</p>
        <h1 className="font-display text-5xl font-bold mb-4">
          Trang <span className="text-gradient">không tồn tại</span>
        </h1>
        <p className="text-muted mb-8">Đường dẫn bạn tìm kiếm không tồn tại.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-xl transition-colors"
        >
          ← Về Trang Chủ
        </Link>
      </motion.div>
    </main>
  )
}
