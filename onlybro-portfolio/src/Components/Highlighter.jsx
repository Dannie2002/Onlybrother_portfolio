import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}) {
  const elementRef = useRef(null);
  const annotationRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const annotationConfig = {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    };

    const annotation = annotate(element, annotationConfig);
    annotationRef.current = annotation;
    annotation.show();

    const resizeObserver = new window.ResizeObserver(() => {
      annotation.hide();
      annotation.show();
    });

    resizeObserver.observe(element);

    return () => {
      annotation.remove();
      resizeObserver.disconnect();
    };
  }, [
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}