import { useEffect, useState } from "react";

// Rotating typewriter for the hero role line.
export default function Typed({ words, prefix = "> " }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wi = 0;
    let ci = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wi];
      setText(word.substring(0, ci));

      if (!deleting && ci < word.length) {
        ci++;
        timer = setTimeout(tick, 65);
      } else if (!deleting && ci === word.length) {
        deleting = true;
        timer = setTimeout(tick, 1500);
      } else if (deleting && ci > 0) {
        ci--;
        timer = setTimeout(tick, 30);
      } else {
        deleting = false;
        wi = (wi + 1) % words.length;
        timer = setTimeout(tick, 350);
      }
    };

    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span className="text-accent-2">
      {prefix}
      {text}
      <span className="caret">&nbsp;</span>
    </span>
  );
}
