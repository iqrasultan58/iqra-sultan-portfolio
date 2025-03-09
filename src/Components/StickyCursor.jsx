import { useEffect, useCallback, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function StickyCursor({ stickyElement }) {
  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const [isClient, setIsClient] = useState(false);

  const manageMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }, [cursorSize, mouse.x, mouse.y]);

  useEffect(() => {
    setIsClient(true); // This ensures rendering happens only on the client side

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", manageMouseMove);
      return () => {
        window.removeEventListener("mousemove", manageMouseMove);
      };
    }
  }, [manageMouseMove]);

  if (!isClient) return null; // Prevents rendering on the server

  return (
    <div>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className="cursor"
      />
    </div>
  );
}
