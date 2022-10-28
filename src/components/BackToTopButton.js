import React, { useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import ReactDOM from "react-dom";

function BackToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => document.removeEventListener("scroll", handler);
  });

  return ReactDOM.createPortal(
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`fixed bottom-[90px] left-1/2 -translate-x-1/2 w-[56px] h-[56px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,.15)] backdrop-blur-[2px] z-[300] transition-all duration-[.24s] ${
        isScrolled
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <MdDoubleArrow className="fill-white-8 -rotate-90" size={20} />
    </button>,
    document.getElementById("modals")
  );
}

export default BackToTopButton;
