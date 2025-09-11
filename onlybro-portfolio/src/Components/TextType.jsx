import React, { useState, useEffect } from 'react';

const TextType = ({ 
  text, 
  speed = 100, 
  pause = 2000, 
  loop = true,
  className = '',
  cursor = true,
  cursorChar = '|'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Convert text to array if it's not already
  const textArray = Array.isArray(text) ? text : [text];

  useEffect(() => {
    if (isPaused) return;

    const currentText = textArray[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Finished typing, start pause
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pause);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex(prev => {
            const nextIndex = prev + 1;
            if (nextIndex >= textArray.length) {
              return loop ? 0 : textArray.length - 1;
            }
            return nextIndex;
          });
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isPaused, textArray, speed, pause, loop]);

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <span className="animate-pulse">{cursorChar}</span>
      )}
    </span>
  );
};

export default TextType;
