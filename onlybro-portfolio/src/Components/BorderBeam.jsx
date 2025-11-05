import React, { useEffect, useRef } from "react";

// Simple animated gradient border beam
export function BorderBeam({
  colorFrom = "#38bdf8",
  colorTo = "#9c40ff",
  borderWidth = 2,
  duration = 3,
  className = "",
  style = {},
}) {
  const beamRef = useRef(null);

  useEffect(() => {
    const beam = beamRef.current;
    if (!beam) return;
    beam.animate(
      [
        { backgroundPosition: "0% 50%" },
        { backgroundPosition: "100% 50%" },
      ],
      {
        duration: duration * 1000,
        iterations: Infinity,
        direction: "alternate",
      }
    );
  }, [duration]);

  return (
    <div
      ref={beamRef}
      className={`pointer-events-none absolute inset-0 rounded-[inherit] z-10 ${className}`}
      style={{
        border: `${borderWidth}px solid transparent`,
        boxSizing: "border-box",
        background: `linear-gradient(90deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
        backgroundSize: "200% 200%",
        filter: "blur(2px) brightness(1.2)",
        opacity: 0.7,
        ...style,
      }}
      aria-hidden="true"
    />
  );
}