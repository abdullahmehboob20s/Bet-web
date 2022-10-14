import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CustomHeader({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) {
  const years = [1990, 2000, 2010, 2020, 2022];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex items-center justify-between px-2">
      <button
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        className="flex text-lg"
      >
        <IoIosArrowBack className="fill-white-5" />
      </button>

      <div className="flex items-center space-x-2 justify-center">
        <select
          className="bg-white-2 text-white-7 px-1 py-1 rounded outline-none"
          value={months[new Date(date).getMonth()]}
          onChange={({ target: { value } }) =>
            changeMonth(months.indexOf(value))
          }
        >
          {months.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          className="bg-white-2 text-white-7 px-1 py-1 rounded outline-none"
          value={new Date(date).getFullYear()}
          onChange={({ target: { value } }) => changeYear(value)}
        >
          {years.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        className="flex text-lg"
      >
        <IoIosArrowForward className="fill-white-5" />
      </button>
    </div>
  );
}

export default CustomHeader;
