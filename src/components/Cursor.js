import { useEffect, useRef } from "react";

export function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        width: "26px",
        height: "26px",
        borderRadius: "50%",
        position: "fixed",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 999999,

        background:
          "radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0.15))",

        border: "1px solid rgba(255,255,255,0.4)",

        boxShadow:
          "0 0 18px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.25)",

        backdropFilter: "blur(6px)",

        transition: "transform 0.06s linear",
      }}
    />
  );
}