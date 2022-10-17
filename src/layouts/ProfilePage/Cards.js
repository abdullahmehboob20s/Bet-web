import { CSSTransition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";
import Main from "./Cards/Main";
import MyProfile from "./Cards/MyProfile";
import BetHistory from "./Cards/BetHistory";
import BalanceManagement from "./Cards/BalanceManagement";
import Bonuses from "./Cards/Bonuses";
import Messages from "./Cards/Messages";

function Cards() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.clientHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div
      className="container-wrapper mb-5 transition-all duration-500 relative overflow-hidden"
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <div className="relative">
        <CSSTransition
          in={activeMenu === "main"}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <Main states={{ activeMenu, setActiveMenu }} />
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "My Profile"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <MyProfile states={{ activeMenu, setActiveMenu }} />
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "Bet History"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <BetHistory states={{ activeMenu, setActiveMenu }} />
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "Balance Managment"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <BalanceManagement states={{ activeMenu, setActiveMenu }} />
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "Bonuses"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <Bonuses states={{ activeMenu, setActiveMenu }} />
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "Messages"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <Messages states={{ activeMenu, setActiveMenu }} />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Cards;
