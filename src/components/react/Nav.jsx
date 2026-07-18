import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Sticky nav: condenses on scroll, animated mobile menu.
export default function Nav({ links }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-display text-[15px] font-bold tracking-tight">
          arnab<span className="text-accent">.</span>biswas
          <span className="text-accent">()</span>
        </a>

        <ul className="hidden gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] text-muted transition-colors hover:text-accent"
              >
                <span className="text-faint">#</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
          className="rounded-md border border-line px-2.5 py-1.5 text-text md:hidden"
        >
          {open ? "✕" : "≡"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-surface md:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-sm text-muted hover:text-accent"
                >
                  <span className="text-faint">#</span> {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
