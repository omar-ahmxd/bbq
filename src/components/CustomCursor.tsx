import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      setTimeout(() => {
        follower.style.left = e.clientX - 15 + 'px';
        follower.style.top = e.clientY - 15 + 'px';
      }, 100);
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(1.5)';
      follower.style.transform = 'scale(1.5)';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
      follower.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', handleMouseMove);

    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, .menu-item, .gallery-item');
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      return hoverElements;
    };

    const elements = addHoverListeners();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
}
