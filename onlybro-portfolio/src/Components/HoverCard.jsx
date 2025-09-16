import { useRef, useState, useCallback } from 'react';

/**
 * HoverCard
 * Pure React implementation of Bento-style hover animations:
 * - Subtle 3D tilt based on mouse position
 * - Light "magnet" translation toward the cursor
 * - Reactive border glow following the cursor
 *
 * No external animation libs. Uses requestless CSS transitions and React state.
 */
export default function HoverCard({
  children,
  className = '',
  // Visual sizing
  width = '100%',
  height = '100%',
  borderRadius = 20,
  // Behavior toggles
  enableTilt = true,
  enableMagnetism = true,
  enableGlow = true,
  // Motion tuning
  rotateAmplitude = 8,      // max deg of rotate on both axes
  magnetStrength = 0.05,    // fraction of offset applied as translation
  hoverScale = 1.01,        // slight scale on hover
  // Glow color in rgb string (e.g. '185, 136, 21' for the project's gold)
  glowColor = '185, 136, 21'
}) {
  // Reference to the interactive element for geometry
  const cardRef = useRef(null);

  // Track hover and dynamic transform values
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0, scale: 1 });

  // Track glow hotspot as percentages (0-100)
  const [glowAt, setGlowAt] = useState({ xPct: 50, yPct: 50, intensity: 0 });

  // Compute transforms/glow from mouse position
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || !isHovered) return;

    const rect = cardRef.current.getBoundingClientRect();

    // Center of the card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Offsets from center
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    // Normalize to [-1, 1] range
    const nx = offsetX / (rect.width / 2);
    const ny = offsetY / (rect.height / 2);

    // Tilt angles
    const rotateX = enableTilt ? -ny * rotateAmplitude : 0; // negative for natural feel
    const rotateY = enableTilt ? nx * rotateAmplitude : 0;

    // Subtle magnet translation
    const translateX = enableMagnetism ? offsetX * magnetStrength : 0;
    const translateY = enableMagnetism ? offsetY * magnetStrength : 0;

    // Glow hotspot in percentages within the card box
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;

    setTransform({ rotateX, rotateY, translateX, translateY, scale: hoverScale });
    setGlowAt({ xPct, yPct, intensity: 1 });
  }, [isHovered, enableTilt, rotateAmplitude, enableMagnetism, magnetStrength, hoverScale]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    // On enter, gently scale up; rotation/translation will update on move
    setTransform((t) => ({ ...t, scale: hoverScale }));
    setGlowAt((g) => ({ ...g, intensity: 1 }));
  }, [hoverScale]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    // Reset all transforms smoothly
    setTransform({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0, scale: 1 });
    setGlowAt({ xPct: 50, yPct: 50, intensity: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        // Sizing and shape
        width,
        height,
        borderRadius,
        // Create a 3D space for child transforms
        perspective: '1000px'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow layer: a radial gradient that follows the cursor. */}
      {enableGlow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius,
            // Smoothly fade the glow in/out on hover
            transition: 'opacity 200ms ease',
            opacity: glowAt.intensity ? 1 : 0,
            // Radial gradient centered at the cursor position
            background: `radial-gradient(circle at ${glowAt.xPct}% ${glowAt.yPct}%, rgba(${glowColor}, 0.28) 0%, rgba(${glowColor}, 0.14) 22%, rgba(${glowColor}, 0.06) 40%, transparent 60%)`
          }}
        />
      )}

      {/* Transforming inner wrapper that carries content */}
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          // Combine tilt, magnet translation, and scale
          transform: `
            translate3d(${transform.translateX}px, ${transform.translateY}px, 0)
            rotateX(${transform.rotateX}deg)
            rotateY(${transform.rotateY}deg)
            scale(${transform.scale})
          `,
          // Use a single transform transition for snappy feel without jank
          transition: 'transform 160ms ease-out'
        }}
      >
        {/* Content slot - you control what goes inside the card */}
        {children}
      </div>
    </div>
  );
}


