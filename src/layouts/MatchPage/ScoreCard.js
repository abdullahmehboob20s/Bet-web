import React, { useState } from "react";
import Stats from "components/Stats";
import AttackStatsCards from "components/AttackStatsCards";
import GameEventsTimeLine from "components/GameEventsTimeLine";
import GameEventsDropdown from "components/GameEventsDropdown";
import ScoreCardBanner from "components/ScoreCardBanner";

function ScoreCard() {
  const [showStats, setShowStats] = useState(false);
  const [showAttackStatsCards, setShowAttackStatsCards] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showFeild, setShowFeild] = useState(true);

  return (
    <div className="container-wrapper space-y-3">
      <ScoreCardBanner
        setShowEvents={setShowEvents}
        setShowAttackStatsCards={setShowAttackStatsCards}
        setShowFeild={setShowFeild}
        setShowStats={setShowStats}
        showEvents={showEvents}
        showStats={showStats}
        showFeild={showFeild}
        showAttackStatsCards={showAttackStatsCards}
      />

      {showFeild && (
        <div className="relative pt-[58.6176%] rounded overflow-hidden">
          {/* <iframe
          title="https://visualization.ml.bcua.io"
          src="https://visualization.ml.bcua.io"
          className="absolute top-0 left-0 w-full h-full rounded"
        ></iframe> */}
          <img
            src="images/feild.png"
            className="w-full h-full absolute top-0 left-0 object-cover"
            alt=""
          />
        </div>
      )}

      {showStats && <Stats />}

      {showAttackStatsCards && <AttackStatsCards />}

      {showEvents && (
        <>
          <GameEventsTimeLine />
          <GameEventsDropdown />
        </>
      )}
    </div>
  );
}

export default ScoreCard;
