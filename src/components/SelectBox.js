import { IoIosArrowDown } from "react-icons/io";

const BG = "bg-[rgba(255,255,255,0.15)]";

function SelectBox({
  options,
  showDropdownIcon = true,
  title,
  bg = BG,
  titleClassName = "absolute top-[8px] text-xs text-white-4 pl-[15px]",
  children,
  selectBoxClassName = "pl-[15px] pb-0 pt-6 text-white-9 text-sm flex flex-col",
  wrapperClassName = "h-[52px]",
  downIconClassName = "top-1/2 -translate-y-1/2 right-5 text-base",
  Component,
  overflowHidden = true,
  disabled = false,
}) {
  return (
    <label
      className={`flex items-center rounded relative cursor-pointer ${bg} ${wrapperClassName} ${
        disabled ? "opacity-60" : "opacity-100"
      }`}
      style={{ overflow: overflowHidden ? "hidden" : "visible" }}
    >
      {Component ? (
        <Component
          className={`w-full h-full outline-none appearance-none cursor-pointer border-none bg-transparent ${selectBoxClassName}`}
        />
      ) : (
        <select
          disabled={disabled}
          className={`w-full h-full outline-none appearance-none cursor-pointer border-none bg-transparent ${selectBoxClassName}`}
        >
          {options &&
            options.map((item, index) => (
              <option key={index} className="bg-b" value={item.value}>
                {item.title}
              </option>
            ))}
        </select>
      )}

      <span className={`pointer-events-none select-none ${titleClassName}`}>
        {title && title}
      </span>

      {showDropdownIcon && (
        <button className={`absolute pointer-events-none ${downIconClassName}`}>
          <IoIosArrowDown />
        </button>
      )}

      {children && children}
    </label>
  );
}

export default SelectBox;
