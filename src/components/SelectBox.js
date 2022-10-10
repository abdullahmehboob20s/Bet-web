import { IoIosArrowDown } from "react-icons/io";

function SelectBox({ options, showDropdownIcon = true }) {
  return (
    <label className="h-[52px] flex items-center rounded overflow-hidden relative cursor-pointer bg-[rgba(255,255,255,0.15)]">
      <select className="w-full h-full outline-none flex-col appearance-none text-white-9 cursor-pointer text-sm border-none pb-0 pt-6 px-[15px] bg-transparent">
        {options.map((item, index) => (
          <option className="bg-b" value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
      <span className="pointer-events-none select-none text-white-4 absolute top-[8px] left-[15px] text-xs">
        Language
      </span>

      {showDropdownIcon && (
        <button className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-5 text-base">
          <IoIosArrowDown />
        </button>
      )}
    </label>
  );
}

export default SelectBox;
