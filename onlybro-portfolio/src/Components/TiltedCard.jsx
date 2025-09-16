import { useRef, useState, useCallback } from 'react';

// TiltedCard Component - Creates a 3D tilting card effect on hover
export default function TiltedCard({
  // Image props
  imageSrc,                    // Source URL for the background image
  altText = 'Tilted card image', // Alt text for accessibility
  
  // Layout props
  containerHeight = '300px',   // Height of the outer container
  containerWidth = '100%',     // Width of the outer container
  imageHeight = '300px',       // Height of the actual card/image
  imageWidth = '300px',        // Width of the actual card/image
  
  // Animation props
  scaleOnHover = 1.02,         // How much to scale the card on hover (1.02 = 2% bigger)
  rotateAmplitude = 8,         // Maximum rotation angle in degrees (8 degrees max)
  
  // Feature toggles
  showMobileWarning = false,   // Show warning on mobile devices
  showTooltip = false,         // Show tooltip on hover
  overlayContent = null,       // Content to display as overlay (heading, icon, paragraph)
  displayOverlayContent = false, // Whether to show the overlay content
  
  // Styling props
  className = '',              // Additional CSS classes for the container
  imageClassName = '',         // Additional CSS classes for the image
  tooltipClassName = '',       // Additional CSS classes for the tooltip
  captionText = '',            // Text to show in tooltip (unused in current version)
}) {
  // React refs and state
  const ref = useRef(null);    // Reference to the main container element
  const [isHovered, setIsHovered] = useState(false); // Track if mouse is over the card
  
  // Transform state - stores the current 3D transformation values
  const [transform, setTransform] = useState({
    rotateX: 0,    // Rotation around X-axis (up/down tilt)
    rotateY: 0,    // Rotation around Y-axis (left/right tilt)
    scale: 1       // Scale factor (1 = normal size)
  });

  // Mouse move handler - calculates 3D rotation based on mouse position
  const handleMouseMove = useCallback((e) => {
    // Only calculate if card is hovered and ref exists
    if (!ref.current || !isHovered) return;

    // Get the card's position and size on the screen
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate the center point of the card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate how far the mouse is from the center
    const offsetX = e.clientX - centerX;  // Horizontal offset (positive = right of center)
    const offsetY = e.clientY - centerY;  // Vertical offset (positive = below center)

    // Calculate rotation angles based on mouse position
    // The further the mouse is from center, the more the card tilts
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude; // Negative for natural feel
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    // Update the transform state with new rotation values
    setTransform({
      rotateX: rotationX,      // Apply calculated X rotation
      rotateY: rotationY,      // Apply calculated Y rotation
      scale: scaleOnHover      // Apply hover scale
    });
  }, [isHovered, rotateAmplitude, scaleOnHover]); // Dependencies for useCallback

  // Mouse enter handler - activates hover state
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true); // Enable hover effects
  }, []);

  // Mouse leave handler - resets card to normal state
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false); // Disable hover effects
    
    // Reset all transformations to default values
    setTransform({
      rotateX: 0,    // No X rotation
      rotateY: 0,    // No Y rotation
      scale: 1       // Normal size
    });
  }, []);

  return (
    // Main container - the perspective container for 3D effects
    <figure
      ref={ref}  // Attach ref for mouse position calculations
      className={`relative w-full h-full flex flex-col items-center justify-center ${className}`}
      style={{
        height: containerHeight,    // Set container height
        width: containerWidth,      // Set container width
        perspective: '1000px'      // Enable 3D perspective (closer = more dramatic effect)
      }}
      onMouseMove={handleMouseMove}    // Track mouse movement
      onMouseEnter={handleMouseEnter}  // Track mouse enter
      onMouseLeave={handleMouseLeave}  // Track mouse leave
    >
      {/* The actual card that will be transformed */}
      <div
        className="relative"
        style={{
          width: imageWidth,        // Set card width
          height: imageHeight,      // Set card height
          transformStyle: 'preserve-3d', // Enable 3D transformations for child elements
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`, // Apply 3D transform
          transition: 'transform 0.2s ease-out' // Smooth transition when not hovering
        }}
      >
        {/* Background image */}
        <img
          src={imageSrc}
          alt={altText}
          className={`absolute top-0 left-0 object-cover rounded-[15px] ${imageClassName}`}
          style={{
            width: imageWidth,              // Match container width
            height: imageHeight,            // Match container height
            backfaceVisibility: 'hidden'   // Hide the back of the image during 3D rotation
          }}
        />

        {/* Overlay content - appears on top of the image */}
        {displayOverlayContent && overlayContent && (
          <div 
            className="absolute top-0 left-0 z-[2]" // Position on top with high z-index
            style={{
              width: imageWidth,    // Match image width
              height: imageHeight   // Match image height
            }}
          >
            {overlayContent} {/* Render the passed overlay content (heading, icon, paragraph) */}
          </div>
        )}
      </div>
    </figure>
  );
}
