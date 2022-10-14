import React from "react";

function InovationCard({
  className,
  title,
  Icon,
  desc,
  titleColor = "white",
  descriptionColor = "rgba(255,255,255,.7)",
  borderColor = "rgba(255,255,255,.5)",
  size = "w-[70px] md:w-[90px] xl:w-[120px] h-[70px] md:h-[90px] xl:h-[120px]",
}) {
  return (
    <div
      className={`${className} flex flex-col items-center space-y-3 text-center`}
    >
      <div
        className={`border-1px rounded-full flex items-center justify-center ${size}`}
        style={{ borderColor }}
      >
        {Icon && <Icon />}
      </div>

      {title && (
        <p
          className="text-sm xl:text-base font-semibold text-center"
          style={{ color: titleColor }}
        >
          {title}
        </p>
      )}

      {desc && (
        <p
          className="text-center text-xs xl:text-sm"
          style={{ color: descriptionColor }}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

export default InovationCard;
