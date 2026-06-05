import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))]

export default function Projects() {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState('All')
  const [selected, setSelected] = useState(projects[0])

  const filteredProjects = useMemo(() => {
    const q = search.trim().toLowerCase()
    return projects.filter((p) => {
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      const matchesTag = activeTag === 'All' || p.tags.includes(activeTag)
      return matchesSearch && matchesTag
    })
  }, [activeTag, search])

  const activeProject =
    filteredProjects.find((p) => p.id === selected?.id) ?? filteredProjects[0] ?? null

  return (
    <PageTransition variant="fadeSlide">
      <main className="min-h-screen pt-24 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">Work</p>
            <h1 className="font-display text-4xl font-bold md:text-5xl">
              Dự <span className="text-gradient">Án</span>
            </h1>
            <p className="mt-1 text-sm text-muted">
              {projects.length} dự án · React &amp; TypeScript
            </p>
          </motion.div>

          {/* Search + Tag filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <label htmlFor="search-projects" className="sr-only">
              Tìm kiếm dự án
            </label>
            <input
              id="search-projects"
              type="search"
              placeholder="Tìm kiếm dự án..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-surface px-4 py-2 text-sm text-text placeholder:text-muted transition-colors focus:border-accent/60 focus:outline-none sm:w-64"
            />

            <div className="flex flex-wrap gap-2" role="group" aria-label="Lọc theo công nghệ">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  aria-pressed={activeTag === tag}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                    activeTag === tag
                      ? 'bg-accent text-white'
                      : 'border border-border text-muted hover:border-accent/40 hover:text-text'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-dashed border-border py-20 text-center"
            >
              <p className="text-muted">Không tìm thấy dự án phù hợp.</p>
            </motion.div>
          ) : (
            /* Master-detail layout */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col gap-4 lg:flex-row"
            >
              {/* LEFT — project list */}
              <aside
                className="flex shrink-0 flex-col gap-2 lg:w-72"
                aria-label="Danh sách dự án"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variant="list"
                    isActive={activeProject?.id === project.id}
                    onSelect={setSelected}
                  />
                ))}
              </aside>

              {/* RIGHT — project detail */}
              <div className="min-w-0 flex-1">
                {/* key ở đây để AnimatePresence nhận biết khi project đổi */}
                <AnimatePresence mode="wait">
                  {activeProject && (
                    <ProjectCard
                      key={activeProject.id}
                      project={activeProject}
                      variant="detail"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </PageTransition>
  )
}