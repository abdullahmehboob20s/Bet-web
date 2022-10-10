import { IoIosArrowDown } from "react-icons/io";

const BG = "bg-[rgba(255,255,255,0.15)]";
const HEIGHT = "h-[52px]";

function SelectBox({
  options,
  showDropdownIcon = true,
  title,
  bg = BG,
  height = HEIGHT,
  paddingTop = "pt-6",
  titleClassName = "absolute top-[8px] text-xs text-white-4",
  fromLeft = "pl-[15px]",
  children,
}) {
  return (
    <label
      className={`${height} flex items-center rounded overflow-hidden relative cursor-pointer ${bg}`}
    >
      <select
        className={`w-full h-full outline-none flex-col appearance-none text-white-9 cursor-pointer text-sm border-none pb-0 ${paddingTop} ${fromLeft} pr-[15px] bg-transparent`}
      >
        {options &&
          options.map((item, index) => (
            <option className="bg-b" value={item.value}>
              {item.title}
            </option>
          ))}
      </select>
      <span
        className={`pointer-events-none select-none ${fromLeft} ${titleClassName}`}
      >
        {title && title}
      </span>

      {showDropdownIcon && (
        <button className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-5 text-base">
          <IoIosArrowDown />
        </button>
      )}

      {children && children}
    </label>
  );
}

export default SelectBox;
