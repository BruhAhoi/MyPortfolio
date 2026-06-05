import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import {personal} from '../data/personal'

const container = {
    hidden: {},
    show: {transition: {staggerChildren: 0.12}},
}

const item = {
    hidden: {opacity: 0, y: 30},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]}},
}

const stats = [
    {label: 'Năm kinh nghiệm', value: '2+'},
    {label: 'Dự án hoàn thành', value: '3+'},
    {label: 'Technologies', value: '10+'},
]

export default function Home() {
    return (
        <PageTransition variant="fadeScale">
            <main className="min-h-screen pt-16 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"/>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"/>
                </div>

                {/* Hero */}
                <section className="max-w-6xl mx-auto px-6 py-24 md:py-36 relative">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="max-w-3xl"
                    >
                        {/* Badge */}
                        <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
                            <span className="text-sm text-muted font-mono">Đang tìm kiếm cơ hội thực tập</span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={item}
                            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4"
                        >
                            Tạ Đức <span className="text-gradient">Thắng</span>
                        </motion.h1>

                        {/* Title */}
                        <motion.p
                            variants={item}
                            className="font-display text-xl md:text-2xl text-muted font-medium mb-6"
                        >
                            {personal.title}
                        </motion.p>

                        {/* Bio */}
                        <motion.p
                            variants={item}
                            className="text-base md:text-lg text-muted leading-relaxed max-w-xl mb-10"
                        >
                            {personal.bio}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={item} className="flex flex-wrap gap-4">
                            <Link
                                to="/projects"
                                className="px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-xl transition-all duration-200 glow-sm hover:glow hover:scale-105 active:scale-95"
                            >
                                Xem Dự Án →
                            </Link>
                            <Link
                                to="/resume"
                                className="px-6 py-3 border border-border hover:border-accent/50 text-text font-medium rounded-xl transition-all duration-200 hover:bg-surface"
                            >
                                Hồ Sơ Chi Tiết
                            </Link>
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-border hover:border-accent/50 text-text font-medium rounded-xl transition-all duration-200 hover:bg-surface flex items-center gap-2"
                            >
                                GitHub ↗
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Avatar placeholder */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{delay: 0.5, duration: 0.6}}
                        className="hidden lg:flex absolute right-6 inset-y-0 items-center"
                    >
                        <div
                            className="w-56 h-72 rounded-2xl border border-accent/20 overflow-hidden glow bg-gradient-to-br from-accent/20 to-blue-600/10 flex items-center justify-center">
                            {personal.avatar ? (
                                <img
                                    src={personal.avatar}
                                    alt={`Ảnh đại diện của ${personal.nameEn}`}
                                    className="w-full h-full object-cover object-top"
                                />
                            ) : (
                                <span className="font-display text-6xl font-bold text-gradient select-none">TDT</span>
                            )}
                        </div>
                    </motion.div>
                </section>

                {/* Stats */}
                <section className="max-w-6xl mx-auto px-6 pb-20">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.7, duration: 0.5}}
                        className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg"
                    >
                        {stats.map(({label, value}) => (
                            <div key={label} className="text-center p-4 rounded-xl border border-border bg-surface">
                                <div className="font-display text-3xl font-bold text-gradient">{value}</div>
                                <div className="text-xs text-muted mt-1">{label}</div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* Tech stack strip */}
                <section className="border-t border-border py-10 overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6">
                        <p className="text-xs text-muted uppercase tracking-widest mb-6 font-mono">Tech Stack</p>
                        <div className="flex flex-wrap gap-3">
                            {['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Socket.IO', 'Redux', 'Vite', 'ASP.NET Core', 'Git', 'Figma'].map((tech) => (
                                <span key={tech}
                                      className="px-3 py-1.5 text-sm border border-border rounded-lg text-muted hover:text-text hover:border-accent/40 transition-colors cursor-default">
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </PageTransition>
    )
}
