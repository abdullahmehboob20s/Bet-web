import CompetitionCard from "components/CompetitionCard";
import CompetitionSegment from "components/CompetitionSegment";

const England_Poisition = "0 26.9896193772%";
const Italy_Poisition = "0 43.9446366782%";
const World_Poisition = "0 98.615916955%";

function Competitions() {
  return (
    <div className="space-y-4px">
      <CompetitionCard
        title="Europe"
        subtitle="U19 UEFA European Championship - Women"
      >
        <CompetitionSegment />
        <CompetitionSegment isVideo={false} />
      </CompetitionCard>
      <CompetitionCard
        title="England"
        subtitle="Professional Development League"
        flagPosition={England_Poisition}
      >
        <CompetitionSegment isChart={false} />
      </CompetitionCard>
      <CompetitionCard
        title="Italy"
        subtitle="Campionato Primavera 1"
        flagPosition={Italy_Poisition}
      >
        <CompetitionSegment isChart={false} isVideo={false} />
      </CompetitionCard>
      <CompetitionCard
        title="World"
        subtitle="International Friendlies - Women"
        flagPosition={World_Poisition}
      >
        <CompetitionSegment isChart={false} isVideo={false} twoColumns={true} />
      </CompetitionCard>
    </div>
  );
}

export default Competitions;
