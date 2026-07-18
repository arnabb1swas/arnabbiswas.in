import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

// Full-page cursor spotlight — a soft glow that trails the pointer. Desktop only.
export default function Spotlight() {
  const x = useSpring(useMotionValue(-500), { stiffness: 120, damping: 25 });
  const y = useSpring(useMotionValue(-500), { stiffness: 120, damping: 25 });
  const bg = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(74,222,128,0.07), transparent 65%)`;

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ background: bg }}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
