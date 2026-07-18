import { motion } from "framer-motion";

// Scroll-reveal wrapper. Wraps slotted Astro HTML — fades + rises into view once.
export default function Reveal({ children, delay = 0, y = 24, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.5, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
