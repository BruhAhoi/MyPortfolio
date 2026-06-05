import { personal } from '../data/personal'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          © 2026 <span className="text-text font-medium">{personal.nameEn}</span>. Built with React + Framer Motion.
        </p>
        <div className="flex gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-light transition-colors"
          >
            GitHub
          </a>
          <a href={`mailto:${personal.email}`} className="hover:text-accent-light transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
