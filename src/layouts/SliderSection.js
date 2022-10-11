import React from "react";

function SliderSection({ children, title, Bar }) {
  return (
    <div>
      <div className="mb-4">{Bar && <Bar />}</div>
      <div className="slider-horizontal-cards-wrapper overflow-x-scroll">
        {children}
      </div>
    </div>
  );
}

export default SliderSection;
