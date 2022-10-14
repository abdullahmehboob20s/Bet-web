import JackpotCard from "components/JackpotCard";
import JackPotWrapper from "components/JackPotWrapper";
import Competitions from "layouts/EventView/Competitions";
import FilterBar from "layouts/EventView/FilterBar";
import WinnerDisplayer from "layouts/EventView/WinnerDisplayer";
import Layout from "layouts/Layout";
import SportsCardList from "layouts/SportsCardList";
import React from "react";

function EventView() {
  return (
    <Layout>
      <div className="pt-7px mb-6">
        <div>
          <div className="mb-4">
            <JackPotWrapper>
              <JackpotCard />
            </JackPotWrapper>
          </div>
          <div className="mb-10px">
            <FilterBar />
          </div>
          <div className="mb-10px">
            <SportsCardList />
          </div>
          <div className="mb-10px">
            <WinnerDisplayer />
          </div>
          <div className="mb-7">
            <Competitions />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EventView;
