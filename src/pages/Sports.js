import Layout from "layouts/Layout";
import JackpotCard from "components/JackpotCard";
import JackPotWrapper from "components/JackPotWrapper";
import SportsPageLinks from "layouts/Sports/SportPageLinks";
import FilterButton from "components/FilterButton";
import { AiFillCloud } from "react-icons/ai";
import SearchBar from "components/SearchBar";
import TournamentSelector from "components/TournamentSelector";
import SportsCardList from "layouts/SportsCardList";
import SelectBox from "components/SelectBox";
import { FiClock } from "react-icons/fi";
import ButtonSelector from "components/ButtonSelector";
import { FaTrophy } from "react-icons/fa";
import { BsCalendarCheckFill, BsLightningFill } from "react-icons/bs";
import { IoIosSpeedometer } from "react-icons/io";
import CompetitionCard from "components/CompetitionCard";
import AccordionButton from "components/AccordionButton";
import { BiStar } from "react-icons/bi";

function Sports() {
  return (
    <Layout navbarProps={{ NavbarBottomContent: SportsPageLinks }}>
      <div className="pt-7px mb-6">
        <div className="mb-4">
          <JackPotWrapper>
            <JackpotCard />
          </JackPotWrapper>
        </div>

        <div className="container-wrapper mb-10px flex items-center space-x-2 overflow-x-scroll hide-scrollbar">
          <ButtonSelector
            isSelected={false}
            color="#583de3"
            title="Popular Matches"
            Icon={(props) => <FaTrophy className="text-xs" {...props} />}
          />
          <ButtonSelector
            isSelected={false}
            color="#2275e9"
            title="Popular Competitions"
            Icon={(props) => <FaTrophy className="text-xs" {...props} />}
          />
          <ButtonSelector
            isSelected={false}
            color="#ef9805"
            title="Multiple of the day"
            Icon={(props) => <BsLightningFill className="text-xs" {...props} />}
          />
          <ButtonSelector
            isSelected={false}
            color="#00bf19"
            title="Boosted Odds"
            Icon={(props) => (
              <IoIosSpeedometer className="text-sm" {...props} />
            )}
          />
          <ButtonSelector
            isSelected={false}
            color="#0097b7"
            title="Upcoming Mathces"
            Icon={(props) => (
              <BsCalendarCheckFill className="text-xs" {...props} />
            )}
          />
        </div>

        <div className="container-wrapper flex items-center justify-between relative mb-10px">
          <div className="flex items-center space-x-10px">
            <SelectBox
              height="w-full"
              options={[{ title: "All" }, { title: "All" }, { title: "All" }]}
              paddingTop="pt-0"
              selectBoxClassName="pl-[34px] pr-16 text-xs"
              wrapperClassName="h-[28px]"
              downIconClassName="top-1/2 -translate-y-1/2 right-2 text-base"
            >
              <FiClock className="absolute top-1/2 -translate-y-1/2 pointer-events-none left-10px text-white-9" />
            </SelectBox>

            <FilterButton
              Icon={({ className }) => (
                <AiFillCloud className={`text-base ${className}`} />
              )}
            />
          </div>

          <SearchBar />
        </div>

        <div className="mb-10px">
          <div className="container-wrapper">
            <TournamentSelector />
          </div>
        </div>

        <div className="mb-10px">
          <SportsCardList />
        </div>

        <div className="space-y-1">
          <CompetitionCard
            open={false}
            title="Europe"
            className="bg-white-1"
            titleFontSize="text-sm"
            countryName="europe"
          >
            <div className="mb-3 space-y-2">
              {new Array(6).fill("").map((item, index) => (
                <AccordionButton
                  key={index}
                  title="UEFA Champions League"
                  iconRotation="-90deg"
                  className="bg-white-1 rounded px-10px h-[36px]"
                  ButtonLeftComponent={() => (
                    <span className="flex pr-6px mr-3 border-r-1px border-r-b cursor-pointer">
                      <BiStar className="text-xl fill-white-7" />
                    </span>
                  )}
                />
              ))}
            </div>
          </CompetitionCard>
          <CompetitionCard
            open={false}
            title="Spain"
            countryName="spain"
            className="bg-white-1"
            titleFontSize="text-sm"
          >
            <div className="mb-3 space-y-2">
              {new Array(6).fill("").map((item, index) => (
                <AccordionButton
                  key={index}
                  title="UEFA Champions League"
                  iconRotation="-90deg"
                  className="bg-white-1 rounded px-10px h-[36px]"
                  ButtonLeftComponent={() => (
                    <span className="flex pr-6px mr-3 border-r-1px border-r-b cursor-pointer">
                      <BiStar className="text-xl fill-white-7" />
                    </span>
                  )}
                />
              ))}
            </div>
          </CompetitionCard>
          <CompetitionCard
            open={false}
            title="Germany"
            countryName="germany"
            className="bg-white-1"
            titleFontSize="text-sm"
          >
            <div className="mb-3 space-y-2">
              {new Array(6).fill("").map((item, index) => (
                <AccordionButton
                  key={index}
                  title="UEFA Champions League"
                  iconRotation="-90deg"
                  className="bg-white-1 rounded px-10px h-[36px]"
                  ButtonLeftComponent={() => (
                    <span className="flex pr-6px mr-3 border-r-1px border-r-b cursor-pointer">
                      <BiStar className="text-xl fill-white-7" />
                    </span>
                  )}
                />
              ))}
            </div>
          </CompetitionCard>
          <CompetitionCard
            open={false}
            title="Brazil"
            countryName="brazil"
            className="bg-white-1"
            titleFontSize="text-sm"
          >
            <div className="mb-3 space-y-2">
              {new Array(6).fill("").map((item, index) => (
                <AccordionButton
                  key={index}
                  title="UEFA Champions League"
                  iconRotation="-90deg"
                  className="bg-white-1 rounded px-10px h-[36px]"
                  ButtonLeftComponent={() => (
                    <span className="flex pr-6px mr-3 border-r-1px border-r-b cursor-pointer">
                      <BiStar className="text-xl fill-white-7" />
                    </span>
                  )}
                />
              ))}
            </div>
          </CompetitionCard>
        </div>
      </div>
    </Layout>
  );
}

export default Sports;
