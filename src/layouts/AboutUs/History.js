import CompetitionCard from "components/CompetitionCard";
import React from "react";
import { BsPlusLg } from "react-icons/bs";

const ButtonLeftComponent = ({ state }) => {
  return (
    <BsPlusLg
      className={`text-lg sm:text-xl fill-black opacity-60 mr-4 transition-all duration-[.24s] ${
        state ? "rotate-45" : "rotate-0"
      }`}
    />
  );
};

function History() {
  return (
    <div>
      <div className="container-2">
        <h1 className="text-black italic text-center font-bold mb-8 lg:mb-12 text-4xl lg:text-5xl xl:text-6xl font-bebas">
          History
        </h1>

        <div className="grid md:grid-cols-2 gap-y-2 md:gap-y-3 gap-x-6 xl:gap-x-14">
          <div className="space-y-2 md:space-y-4">
            <CompetitionCard
              showDropdownIcon={false}
              className="border-1px border-[rgba(0,0,0,.4)] rounded overflow-hidden"
              title={
                <>
                  <span className="text-black text-sm sm:text-base lg:text-lg xl:text-xl opacity-80 block">
                    2003 - Foundation
                  </span>{" "}
                </>
              }
              ButtonLeftComponent={ButtonLeftComponent}
              accordionButtonClassName="px-4 sm:px-6 py-2"
              open={false}
            >
              <div className="pb-4 px-6">
                <p className="text-black opacity-80 text-xs sm:text-sm">
                  Founded by Vigen and Vahe Badalyan, VBET began life as Vivaro
                  with just four employees – including its founders. The newly
                  established company first set up its premises in a small
                  bookmaker shop in Yerevan, Armenia.
                </p>
              </div>
            </CompetitionCard>
            <CompetitionCard
              showDropdownIcon={false}
              className="border-1px border-[rgba(0,0,0,.4)] rounded overflow-hidden"
              title={
                <>
                  <span className="text-black text-sm sm:text-base lg:text-lg xl:text-xl opacity-80 block">
                    2015 - First European License
                  </span>{" "}
                </>
              }
              ButtonLeftComponent={ButtonLeftComponent}
              accordionButtonClassName="px-4 sm:px-6 py-2"
              open={false}
            >
              <div className="pb-4 px-6">
                <p className="text-black opacity-80 text-xs sm:text-sm">
                  Founded by Vigen and Vahe Badalyan, VBET began life as Vivaro
                  with just four employees – including its founders. The newly
                  established company first set up its premises in a small
                  bookmaker shop in Yerevan, Armenia.
                </p>
              </div>
            </CompetitionCard>
            <CompetitionCard
              showDropdownIcon={false}
              className="border-1px border-[rgba(0,0,0,.4)] rounded overflow-hidden"
              title={
                <>
                  <span className="text-black text-sm sm:text-base lg:text-lg xl:text-xl opacity-80 block">
                    2015 - First European License
                  </span>{" "}
                </>
              }
              ButtonLeftComponent={ButtonLeftComponent}
              accordionButtonClassName="px-4 sm:px-6 py-2"
              open={false}
            >
              <div className="pb-4 px-6">
                <p className="text-black opacity-80 text-xs sm:text-sm">
                  Founded by Vigen and Vahe Badalyan, VBET began life as Vivaro
                  with just four employees – including its founders. The newly
                  established company first set up its premises in a small
                  bookmaker shop in Yerevan, Armenia.
                </p>
              </div>
            </CompetitionCard>
          </div>

          <div className="space-y-2 md:space-y-4">
            <CompetitionCard
              showDropdownIcon={false}
              className="border-1px border-[rgba(0,0,0,.4)] rounded overflow-hidden"
              title={
                <>
                  <span className="text-black text-sm sm:text-base lg:text-lg xl:text-xl opacity-80 block">
                    2015 - First European License
                  </span>{" "}
                </>
              }
              ButtonLeftComponent={ButtonLeftComponent}
              accordionButtonClassName="px-4 sm:px-6 py-2"
              open={false}
            >
              <div className="pb-4 px-6">
                <p className="text-black opacity-80 text-xs sm:text-sm">
                  Founded by Vigen and Vahe Badalyan, VBET began life as Vivaro
                  with just four employees – including its founders. The newly
                  established company first set up its premises in a small
                  bookmaker shop in Yerevan, Armenia.
                </p>
              </div>
            </CompetitionCard>
            <CompetitionCard
              showDropdownIcon={false}
              className="border-1px border-[rgba(0,0,0,.4)] rounded overflow-hidden"
              title={
                <>
                  <span className="text-black text-sm sm:text-base lg:text-lg xl:text-xl opacity-80 block">
                    2015 - First European License
                  </span>{" "}
                </>
              }
              ButtonLeftComponent={ButtonLeftComponent}
              accordionButtonClassName="px-4 sm:px-6 py-2"
              open={false}
            >
              <div className="pb-4 px-6">
                <p className="text-black opacity-80 text-xs sm:text-sm">
                  Founded by Vigen and Vahe Badalyan, VBET began life as Vivaro
                  with just four employees – including its founders. The newly
                  established company first set up its premises in a small
                  bookmaker shop in Yerevan, Armenia.
                </p>
              </div>
            </CompetitionCard>
            <CompetitionCard
              showDropdownIcon={false}
              className="border-1px border-[rgba(0,0,0,.4)] rounded overflow-hidden"
              title={
                <>
                  <span className="text-black text-sm sm:text-base lg:text-lg xl:text-xl opacity-80 block">
                    2015 - First European License
                  </span>{" "}
                </>
              }
              ButtonLeftComponent={ButtonLeftComponent}
              accordionButtonClassName="px-4 sm:px-6 py-2"
              open={false}
            >
              <div className="pb-4 px-6">
                <p className="text-black opacity-80 text-xs sm:text-sm">
                  Founded by Vigen and Vahe Badalyan, VBET began life as Vivaro
                  with just four employees – including its founders. The newly
                  established company first set up its premises in a small
                  bookmaker shop in Yerevan, Armenia.
                </p>
              </div>
            </CompetitionCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
