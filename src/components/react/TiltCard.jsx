import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

// Project card: springy 3D tilt toward cursor + a glow that tracks the pointer.
export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const glow = useMotionTemplate`radial-gradient(340px circle at ${gx}% ${gy}%, rgba(74,222,128,0.10), transparent 70%)`;

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 10);
    rx.set((0.5 - py) * 10);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      whileHover={{ y: -4 }}
      className={`group relative rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-sm transition-colors hover:border-accent/50 ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </motion.div>
  );
}
