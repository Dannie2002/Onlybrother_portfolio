import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function WordRotate({
  words,
  duration = 2500,
  className = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words, duration]);

  const motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  };

  return (
    <div className="py-2 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={className}
          {...motionProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}