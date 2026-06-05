import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/resume", label: "Resume" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const { isDark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-display font-bold text-xl tracking-tight"
        >
          <span className="text-gradient">TDT</span>
          <span className="text-muted">.</span>
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="menubar">
          {navLinks.map(({ path, label }) => (
            <li key={path} role="none">
              <NavLink
                to={path}
                onClick={() => setMenuOpen(false)}
                role="menuitem"
                end={path === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive
                      ? "text-accent-light"
                      : "text-muted hover:text-text"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-accent-glow rounded-lg border border-accent/30"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-surface transition-colors"
            aria-label={
              isDark ? "Chuyển sang light mode" : "Chuyển sang dark mode"
            }
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setMenuOpen(!menuOpen);
              }
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-text block transition-colors"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-text block"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-text block"
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1" role="menu">
              {navLinks.map(({ path, label }) => (
                <li key={path} role="none">
                  <NavLink
                    to={path}
                    end={path === "/"}
                    role="menuitem"
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-accent-glow text-accent-light border border-accent/30"
                          : "text-muted hover:text-text hover:bg-border"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
