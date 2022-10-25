import CardBottomBar from "components/CardBottomBar";
import CompetitionCard from "components/CompetitionCard";
import ResultCard from "components/ResultCard";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";

const Cards = () => {
  return (
    <>
      <div className="container-wrapper space-y-2 pb-2">
        <ResultCard
          bg="rgba(255,255,255,.2)"
          BottomBar={() => (
            <CardBottomBar
              isVideo={false}
              isChart={true}
              StatsNumber={44}
              bg=""
            />
          )}
        />
        <ResultCard
          bg="rgba(255,255,255,.2)"
          BottomBar={() => (
            <CardBottomBar
              isVideo={false}
              isChart={true}
              StatsNumber={44}
              bg=""
            />
          )}
        />
      </div>
    </>
  );
};

function MatchNavbarDropdown() {
  const [active, setActive] = useState(false);
  const menuRef = OutsideClickDetector(() => setActive(false));

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [active]);

  return (
    <div ref={menuRef}>
      <button
        onClick={() => setActive((val) => !val)}
        className="w-6 h-6 flex items-center justify-center bg-white-1 rounded text-base"
      >
        <IoIosArrowDown
          className={`fill-white-8 transition-all duration-200 ${
            active ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {ReactDOM.createPortal(
        <>
          <div className={`black-screen ${active ? "show" : ""}`}></div>

          <CSSTransition
            in={active}
            timeout={400}
            classNames="match-dropdown"
            unmountOnExit
          >
            <div className="fixed top-[18%] left-0 flex justify-center w-[100%] transition-all duration-[.3s] z-[400]">
              <div className="space-y-1 rounded h-[50vh] bg-b p-7px overflow-y-auto w-[90%]">
                <CompetitionCard
                  title="ATP Challenger Playford - Hard"
                  countryName="europe"
                  accordionButtonClassName="container-wrapper h-[36px]"
                  className="bg-white-1"
                >
                  <Cards />
                </CompetitionCard>
                <CompetitionCard
                  open={false}
                  title="ATP Challenger Playford - Hard"
                  countryName="europe"
                  accordionButtonClassName="container-wrapper h-[36px]"
                  className="bg-white-1"
                >
                  <Cards />
                </CompetitionCard>
                <CompetitionCard
                  open={false}
                  title="ATP Challenger Playford - Hard"
                  countryName="europe"
                  accordionButtonClassName="container-wrapper h-[36px]"
                  className="bg-white-1"
                >
                  <Cards />
                </CompetitionCard>
                <CompetitionCard
                  open={false}
                  title="ATP Challenger Playford - Hard"
                  countryName="europe"
                  accordionButtonClassName="container-wrapper h-[36px]"
                  className="bg-white-1"
                >
                  <Cards />
                </CompetitionCard>
                <CompetitionCard
                  open={false}
                  title="ATP Challenger Playford - Hard"
                  countryName="europe"
                  accordionButtonClassName="container-wrapper h-[36px]"
                  className="bg-white-1"
                >
                  <Cards />
                </CompetitionCard>
                <CompetitionCard
                  open={false}
                  title="ATP Challenger Playford - Hard"
                  countryName="europe"
                  accordionButtonClassName="container-wrapper h-[36px]"
                  className="bg-white-1"
                >
                  <Cards />
                </CompetitionCard>
              </div>
            </div>
          </CSSTransition>
        </>,
        document.getElementById("modals")
      )}
    </div>
  );
}

export default MatchNavbarDropdown;
