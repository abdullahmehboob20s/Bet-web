import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CloseModalBtn = ({ to = -1 }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)} className="flex text-2xl">
      <IoClose className="fill-white-6" />
    </button>
  );
};
export default CloseModalBtn;
