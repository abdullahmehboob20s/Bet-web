import React from "react";
import { IoClose } from "react-icons/io5";

function CrossButton({ onClick }) {
  return (
    <button className="flex text-2xl" onClick={onClick}>
      <IoClose className="fill-white-6" />
    </button>
  );
}

export default CrossButton;
