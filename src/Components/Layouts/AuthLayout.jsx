import { useEffect, useRef } from "react";

function Auth(props) {
  const { children } = props;
  const auth = useRef(null);
  const bubble = useRef(null);

  function getColorRandom() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
  }

  let lastBubbleTime = 0;
  const delay = 80;

  function handleMouseMove(e) {
    const { pageX, pageY } = e;

    const now = Date.now();
    // cek waktu yang berlalu
    if (now - lastBubbleTime < delay) return; // lewati jika belum cukup waktu
    lastBubbleTime = now;

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.backgroundColor = getColorRandom();

    bubble.style.left = `${pageX}px`;
    bubble.style.top = `${pageY}px`;

    auth.current.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 1000);
  }

  return (
    <>
      <div ref={auth} onMouseMove={handleMouseMove}>
        <div ref={bubble}></div>
        {children}
      </div>
    </>
  );
}

export default Auth;
