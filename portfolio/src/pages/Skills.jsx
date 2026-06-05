import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SkillBar from '../components/SkillBar'
import { technicalSkills, softSkills, languages } from '../data/skills'

export default function Skills() {
  return (
    <PageTransition variant="fadeSlide">
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">Năng Lực</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Kỹ Năng & <span className="text-gradient">Năng Lực</span>
            </h1>
          </motion.div>

          {/* Technical skills */}
          <section aria-labelledby="technical-skills-heading" className="mb-12">
            <h2 id="technical-skills-heading" className="font-display text-sm font-semibold text-muted uppercase tracking-widest mb-6">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((group, gi) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: gi * 0.1 + 0.2 }}
                  className="p-6 bg-surface border border-border rounded-2xl"
                >
                  <h3 className="text-xs font-mono text-accent uppercase tracking-widest mb-5">
                    {group.category}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {group.items.map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Soft skills */}
          <section aria-labelledby="soft-skills-heading" className="mb-12">
            <h2 id="soft-skills-heading" className="font-display text-sm font-semibold text-muted uppercase tracking-widest mb-6">
              Soft Skills
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm border border-border rounded-xl text-muted hover:text-text hover:border-accent/40 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </section>

          {/* Languages */}
          <section aria-labelledby="languages-heading">
            <h2 id="languages-heading" className="font-display text-sm font-semibold text-muted uppercase tracking-widest mb-6">
              Ngoại Ngữ
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {languages.map((lang) => (
                <div key={lang.name} className="flex-1 p-5 bg-surface border border-border rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-lg">
                    {lang.name === 'Tiếng Việt' ? '🇻🇳' : '🇬🇧'}
                  </div>
                  <div>
                    <p className="font-medium text-text">{lang.name}</p>
                    <p className="text-sm text-accent">{lang.level}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-16 h-1.5 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                        style={{ width: `${lang.score}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </section>
        </div>
      </main>
    </PageTransition>
  )
}
