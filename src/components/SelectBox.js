import { IoIosArrowDown } from "react-icons/io";

function SelectBox() {
  return (
    <label class="h-[52px] flex items-center rounded overflow-hidden relative cursor-pointer bg-[rgba(255,255,255,0.15)]">
      <select class="w-full h-full outline-none flex-col appearance-none text-white-9 cursor-pointer text-sm border-none pb-0 pt-6 px-[15px] bg-transparent">
        <option className="bg-b" value="eng">
          English
        </option>
        <option className="bg-b" value="rus">
          Русский
        </option>
        <option className="bg-b" value="geo">
          ქართული
        </option>
        <option className="bg-b" value="fra">
          Français
        </option>
        <option className="bg-b" value="arm">
          Հայերեն
        </option>
        <option className="bg-b" value="arb">
          العربية
        </option>
      </select>
      <span class="pointer-events-none select-none text-white-4 absolute top-[8px] left-[15px] text-xs">
        Language
      </span>

      <button className="absolute top-1/2 -translate-y-1/2 right-5 text-base">
        <IoIosArrowDown />
      </button>
    </label>
  );
}

export default SelectBox;
