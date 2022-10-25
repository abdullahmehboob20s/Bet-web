import React, { useEffect, useRef, useState } from "react";
import { IoIosWarning, IoMdClose } from "react-icons/io";
import { MdDone, MdEdit } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toggleRegisterModal } from "redux/registerModalState";
import { toggleSignInModal } from "redux/signInModalState";
import { toogleStakeModalVisibility } from "redux/stakeModalVisibilityState";
import FormButton from "./FormButton";
import ReactDOM from "react-dom";

function StakeModal() {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [searchState, setSearchState] = useState("");

  const [keyboardVisible, setKeyboardVisibility] = useState(false);
  const [editables, setEditables] = useState([
    { id: "1", title: 5, isSelected: true },
    { id: "2", title: 10, isSelected: false },
    { id: "3", title: 50, isSelected: false },
  ]);

  const inputRef = useRef();
  const keyboardRef = useRef();

  const toggleSelected = (id) => {
    const newArr = editables.map((item, index) =>
      item.id === id
        ? { ...item, isSelected: true }
        : { ...item, isSelected: false }
    );
    setEditables(newArr);
  };

  const search = (character) => {
    setSearchState((val) => val + character.toString());
  };

  const deleteSearch = () => {
    setSearchState((val) => val.slice(0, -1));
  };

  useEffect(() => {
    const func = (e) => {
      if (
        !inputRef.current?.contains(e.target) &&
        !keyboardRef.current?.contains(e.target)
      ) {
        setKeyboardVisibility(false);
      }
    };

    document.addEventListener("mousedown", func);

    return () => {
      document.removeEventListener("mousedown", func);
    };
  });

  return ReactDOM.createPortal(
    <div className="fixed bottom-0 left-0 rounded rounded-b-none px-10px pt-10px pb-6 bg-white z-[800] w-full transition-all duration-300">
      <div className="flex items-center justify-between mb-1">
        <p className="text-black opacity-70 text-xs">ASC FC - Bengaluru FC</p>

        <button
          className="text-black text-base"
          onClick={() =>
            dispatch(toogleStakeModalVisibility({ visibility: false }))
          }
        >
          <IoMdClose className="fill-black" />
        </button>
      </div>

      <div className="flex items-center justify-between mb-1">
        <p className="text-black opacity-90 text-xs font-medium">
          Match Result
        </p>
        <p className="text-oc-3 text-xs font-bold line-through">15.00</p>
      </div>

      <div className="flex items-center justify-between mb-1">
        <p className="text-black opacity-90 text-base font-bold">ASC FC</p>
        <p className="text-accent text-base font-bold">23.00</p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-black opacity-90 text-xs font-medium">
          Possible win:
        </p>
        <p className="text-oc-1 text-xs font-bold">0 $</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter stake"
          inputMode="none"
          value={searchState}
          onChange={(e) => setSearchState((val) => e.target.value)}
          className="text-xs px-10px rounded h-9 bg-[rgba(var(--b-rgb),.1)] outline-none text-[rgba(0,0,0,.7)]"
          onClick={() => setKeyboardVisibility((val) => !val)}
        />
        <FormButton
          label="Bet Now"
          variant={1}
          disabled={searchState.length > 1 ? false : true}
          disabledClassName="disabled:bg-[#109121] disabled:opacity-60"
        />
      </div>

      <div className="h-[34px] px-10px flex items-center space-x-2 bg-[rgba(170,127,0,.2)]">
        <IoIosWarning className="fill-[#aa7f00]" />
        <span className="text-[rgba(var(--b-rgb),.9)] text-xs">
          To place your bet, please{" "}
          <span
            className="cursor-pointer text-inherit underline"
            onClick={() => dispatch(toggleSignInModal(true))}
          >
            Sign in
          </span>{" "}
          <span className="text-inherit">or</span>{" "}
          <span
            className="cursor-pointer text-inherit underline"
            onClick={() => dispatch(toggleRegisterModal(true))}
          >
            Register
          </span>
        </span>
      </div>

      <div
        ref={keyboardRef}
        className={`${keyboardVisible ? "grid" : "hidden"} mt-4 ${
          isEditing ? "grid-cols-[3fr_2.6fr]" : "grid-cols-[3fr_1fr]"
        } gap-2px transition-all duration-[.24s]`}
      >
        <div className="grid grid-cols-3 gap-2px">
          <button
            onClick={() => search("1")}
            className="calculator-btn"
            data-value="1"
          >
            1
          </button>
          <button
            onClick={() => search("2")}
            className="calculator-btn"
            data-value="2"
          >
            2
          </button>
          <button
            onClick={() => search("3")}
            className="calculator-btn"
            data-value="3"
          >
            3
          </button>

          <button
            onClick={() => search("4")}
            className="calculator-btn"
            data-value="4"
          >
            4
          </button>
          <button
            onClick={() => search("5")}
            className="calculator-btn"
            data-value="5"
          >
            5
          </button>
          <button
            onClick={() => search("6")}
            className="calculator-btn"
            data-value="6"
          >
            6
          </button>

          <button
            onClick={() => search("7")}
            className="calculator-btn"
            data-value="7"
          >
            7
          </button>
          <button
            onClick={() => search("8")}
            className="calculator-btn"
            data-value="8"
          >
            8
          </button>
          <button
            onClick={() => search("9")}
            className="calculator-btn"
            data-value="9"
          >
            9
          </button>

          <button
            onClick={() => search(".")}
            className="calculator-btn editor"
            data-value="."
          >
            .
          </button>
          <button
            onClick={() => search("0")}
            className="calculator-btn"
            data-value="0"
          >
            0
          </button>
          <button
            onClick={() => deleteSearch()}
            className="calculator-btn editor"
          >
            <RiDeleteBack2Fill
              className="fill-[rgba(var(--b-rgb),.8)]"
              size={18}
            />
          </button>
        </div>
        <div className="grid gap-2px">
          {editables.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                search(item.title);

                if (isEditing) {
                  toggleSelected(item.id);
                }
              }}
              className={`calculator-btn editor ${
                item.isSelected ? (isEditing ? "selected" : "") : ""
              }`}
              data-value={item.title}
            >
              {item.title}
            </button>
          ))}

          <button
            className="calculator-btn editor"
            onClick={() => setIsEditing((val) => !val)}
          >
            {isEditing ? (
              <MdDone className="fill-[rgba(var(--b-rgb),.8)]" size={22} />
            ) : (
              <MdEdit className="fill-[rgba(var(--b-rgb),.8)]" size={18} />
            )}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals")
  );
}

export default StakeModal;
