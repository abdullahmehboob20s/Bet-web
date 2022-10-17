import React from "react";

function ErrorMessage({ msg }) {
  return (
    <div className="p-5px bg-[rgba(var(--oc-3-rgb),.2)] rounded text-xs text-white">
      {msg}
    </div>
  );
}

export default ErrorMessage;
