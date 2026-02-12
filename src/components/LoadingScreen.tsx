import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHidden(true), 2000);
    const removeTimer = setTimeout(() => setRemoved(true), 3000);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`loading-screen${hidden ? ' hidden' : ''}`}>
      <div className="loader">
        <div className="loading-animation">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </div>
        <div className="loading-content">
          <h2 className="loading-title">
            <span className="title-line">The</span>
            <span className="title-main">Barbeque</span>
            <span className="title-line">Lounge</span>
          </h2>
          <div className="loading-line"></div>
        </div>
      </div>
    </div>
  );
}
