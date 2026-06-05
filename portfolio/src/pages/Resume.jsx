import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { personal } from '../data/personal'
import { education } from '../data/skills'

const tabs = ['Cá Nhân', 'Học Vấn']

const infoItems = [
  { label: 'Ngày sinh', value: personal.dob },
  { label: 'Giới tính', value: personal.gender },
  { label: 'Địa chỉ', value: personal.address },
  { label: 'Email', value: personal.email },
  { label: 'Điện thoại', value: personal.phone },
  { label: 'GitHub', value: personal.github, link: personal.github },
]

export default function Resume() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <PageTransition variant="fadeSlide">
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">Portfolio</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Hồ Sơ <span className="text-gradient">Chi Tiết</span>
            </h1>
          </motion.div>

          {/* Mục tiêu nghề nghiệp */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10 p-6 bg-surface border border-border rounded-2xl relative overflow-hidden"
            aria-labelledby="goal-heading"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-transparent" />
            <h2 id="goal-heading" className="font-display text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Mục Tiêu Nghề Nghiệp
            </h2>
            <p className="text-muted leading-relaxed text-sm md:text-base">{personal.goal}</p>
          </motion.section>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex gap-2 mb-8 flex-wrap" role="tablist" aria-label="Resume sections">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === i}
                  aria-controls={`tabpanel-${i}`}
                  id={`tab-${i}`}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeTab === i
                      ? 'bg-accent text-white'
                      : 'border border-border text-muted hover:text-text hover:border-accent/40'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                id={`tabpanel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Tab 0: Cá Nhân */}
                {activeTab === 0 && (
                  <section aria-label="Thông tin cá nhân">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {infoItems.map(({ label, value, link }) => (
                        <div key={label} className="p-4 bg-surface border border-border rounded-xl">
                          <p className="text-xs text-muted uppercase tracking-wide mb-1">{label}</p>
                          {link ? (
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-accent-light hover:underline break-all"
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="text-sm text-text font-medium">{value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Tab 1: Học Vấn */}
                {activeTab === 1 && (
                  <section aria-label="Học vấn">
                    {education.map((edu, i) => (
                      <div key={i} className="p-6 bg-surface border border-border rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-transparent" />
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="font-display font-bold text-lg text-text">{edu.school}</h3>
                            <p className="text-sm text-muted">{edu.major}</p>
                          </div>
                          <span className="text-xs font-mono text-accent shrink-0 bg-accent/10 px-2 py-1 rounded-lg">
                            {edu.period}
                          </span>
                        </div>
                        {edu.gpa && <p className="text-sm text-muted">GPA: <span className="text-text">{edu.gpa}</span></p>}
                        {edu.note && <p className="text-sm text-muted mt-2">🌐 {edu.note}</p>}
                      </div>
                    ))}
                  </section>
                )}

              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}
