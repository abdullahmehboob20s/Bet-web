import React from "react";

function SocialIcon(props) {
  const { children, className } = props;
  return (
    <a
      {...props}
      className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
}

export default SocialIcon;
