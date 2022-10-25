import useDelayUnmount from "hooks/useDelayUnmount";
import React, { useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import ReactDOM from "react-dom";

function BackToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldbottomButtonRender = useDelayUnmount(isScrolled, 300);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => document.removeEventListener("scroll", handler);
  });

  return (
    shouldbottomButtonRender &&
    ReactDOM.createPortal(
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={`fixed bottom-[90px] left-1/2 -translate-x-1/2 w-[56px] h-[56px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,.15)] backdrop-blur-[2px] z-[300] ${
          shouldbottomButtonRender ? "fade-in" : "fade-out"
        }`}
      >
        <MdDoubleArrow className="fill-white-8 -rotate-90" size={20} />
      </button>,
      document.getElementById("modals")
    )
  );
}

export default BackToTopButton;
