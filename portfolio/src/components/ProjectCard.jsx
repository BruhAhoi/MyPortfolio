import { motion } from "framer-motion";

const tagColors = {
  React: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  TypeScript: "bg-blue-600/10 text-blue-300 border-blue-600/20",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
  "Socket.IO": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Redux: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  TailwindCSS: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Vite: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  MongoDB: "bg-green-600/10 text-green-300 border-green-600/20",
  Netlify: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  ".NET": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "React 18": "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

const projectIcons = {
  Mochi: "MC",
  "Collab-sphere": "CS",
  HYBRID: "HB",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProjectThumbnail({ project, variant = "detail", isActive = false }) {
  const fallbackLabel =
    projectIcons[project.name] ?? project.name.slice(0, 2).toUpperCase();
  const imageAlt =
    variant === "list"
      ? `Thumbnail dự án ${project.name}`
      : `Screenshot dự án ${project.name}`;

  return (
    <div className="relative h-full w-full overflow-hidden">
      {project.thumbnail ? (
        <img
          src={project.thumbnail}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3"
          style={{
            background: `linear-gradient(135deg, ${project.color}26, ${project.color}08)`,
          }}
          aria-hidden="true"
        >
          <span
            className="grid h-14 w-14 place-items-center rounded-xl border text-lg font-bold"
            style={{
              borderColor: `${project.color}55`,
              color: project.color,
              backgroundColor: `${project.color}12`,
            }}
          >
            {fallbackLabel}
          </span>
          <span
            className="font-display text-sm font-bold tracking-wide"
            style={{ color: project.color }}
          >
            {project.name}
          </span>
        </div>
      )}

      {/* Active overlay — dùng cho cả list lẫn detail khi cần */}
      {isActive && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `${project.color}22` }}
        />
      )}
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/50 hover:text-text"
          aria-label={`GitHub repository – ${project.name}`}
        >
          GitHub ↗
        </a>
      )}
      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-light transition-colors hover:bg-accent/20"
          aria-label={`Live demo – ${project.name}`}
        >
          Live Demo ↗
        </a>
      ) : (
        <span
          className="cursor-not-allowed rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted opacity-40"
          title="Chưa triển khai"
          aria-label={`Demo ${project.name} chưa triển khai`}
        >
          Demo
        </span>
      )}
    </div>
  );
}

function ProjectTags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`rounded-lg border px-2.5 py-1 text-xs ${
            tagColors[tag] ?? "border-border bg-border/50 text-muted"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// ─── Variants ─────────────────────────────────────────────────────────────────

/**
 * Compact clickable card dùng trong sidebar danh sách.
 */
function ProjectListCard({ project, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      aria-pressed={isActive}
      className={`group relative w-full overflow-hidden rounded-xl border text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        isActive
          ? "border-accent/50 shadow-lg shadow-accent/10"
          : "border-border hover:border-accent/30"
      }`}
    >
      {/* Thumbnail strip */}
      <div className="relative h-28 w-full">
        <ProjectThumbnail
          project={project}
          variant="list"
          isActive={isActive}
        />
        {/* Animated side bar — layoutId shared across all list items */}
        {isActive && (
          <motion.div
            layoutId="active-project-bar"
            className="absolute bottom-0 left-0 top-0 w-1 rounded-r"
            style={{ background: project.color }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
          />
        )}
      </div>

      {/* Info */}
      <div
        className={`px-4 py-3 transition-colors ${
          isActive ? "bg-surface" : "bg-surface/60 group-hover:bg-surface"
        }`}
      >
        <p
          className={`font-display text-sm font-semibold ${
            isActive ? "text-text" : "text-muted group-hover:text-text"
          }`}
        >
          {project.name}
        </p>
        <p className="mt-0.5 text-xs text-muted">{project.role}</p>
      </div>
    </button>
  );
}

/**
 * Full detail panel hiển thị bên phải khi chọn project.
 */
function ProjectDetailCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="h-full overflow-hidden rounded-2xl border border-border bg-surface"
      aria-label={`Chi tiết dự án ${project.name}`}
    >
      {/* Thumbnail lớn */}
      <div className="relative h-52 w-full overflow-hidden md:h-64">
        <ProjectThumbnail project={project} variant="detail" />
        {/* Gradient fade để chữ bên dưới không bị cắt cứng */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <div className="flex flex-col gap-5 px-6 pb-6">
        {/* Title + links */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-text">
              {project.name}
            </h2>
            <p className="mt-1 text-xs text-muted">
              {project.role} · Team {project.teamSize} người · {project.period}
            </p>
          </div>
          <ProjectLinks project={project} />
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Highlights */}
        <section aria-labelledby={`highlights-${project.id}`}>
          <h3
            id={`highlights-${project.id}`}
            className="mb-3 font-mono text-xs uppercase tracking-widest text-accent"
          >
            Đóng góp chính
          </h3>
          <ul className="flex flex-col gap-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5 text-sm text-muted">
                <span
                  style={{ color: project.color }}
                  className="mt-0.5 shrink-0 font-bold"
                  aria-hidden="true"
                >
                  ▸
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech tags */}
        <section aria-labelledby={`tech-${project.id}`}>
          <h3
            id={`tech-${project.id}`}
            className="mb-3 font-mono text-xs uppercase tracking-widest text-accent"
          >
            Công nghệ
          </h3>
          <ProjectTags tags={project.tags} />
        </section>
      </div>
    </motion.article>
  );
}

// ─── Public export ─────────────────────────────────────────────────────────────

export default function ProjectCard({
  project,
  variant = "list",
  isActive = false,
  onSelect,
}) {
  if (variant === "list") {
    return (
      <ProjectListCard
        project={project}
        isActive={isActive}
        onSelect={onSelect}
      />
    );
  }
  return <ProjectDetailCard project={project} />;
}
