import React from "react";

function Bar({ title, RightComponent, titleClassName, className }) {
  return (
    <div className={`flex items-center justify-between ${className} `}>
      <h1 className={`${titleClassName ? titleClassName : "heading"} `}>
        {title && title}
      </h1>

      {RightComponent && <RightComponent />}
    </div>
  );
}

export default Bar;
