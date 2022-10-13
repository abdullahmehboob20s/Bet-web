import LeagueResultAccordion from "components/LeagueResultAccordion";
import ResultCard from "components/ResultCard";

function Results() {
  return (
    <div className="space-y-1">
      {new Array(14).fill("").map((item, index) => (
        <LeagueResultAccordion
          key={index}
          title="Copa do Brasil"
          // img="https://statistics.bcapps.org/images/c/s/9138/18277534.png"
        >
          <div className="space-y-2">
            <ResultCard />
            <ResultCard />
          </div>
        </LeagueResultAccordion>
      ))}
    </div>
  );
}

export default Results;
