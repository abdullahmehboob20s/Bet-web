import CompetitionCard from "components/CompetitionCard";
import CompetitionSegment from "components/CompetitionSegment";

function Competitions() {
  return (
    <div className="space-y-4px">
      <CompetitionCard
        title="Europe"
        subtitle="U19 UEFA European Championship - Women"
        countryName="europe"
      >
        <CompetitionSegment />
        <CompetitionSegment isVideo={false} />
      </CompetitionCard>
      <CompetitionCard
        title="England"
        subtitle="Professional Development League"
        countryName="england"
      >
        <CompetitionSegment isChart={false} />
      </CompetitionCard>
      <CompetitionCard
        title="Italy"
        subtitle="Campionato Primavera 1"
        countryName="italy"
      >
        <CompetitionSegment isChart={false} isVideo={false} />
      </CompetitionCard>
      <CompetitionCard
        title="Egypt"
        subtitle="International Friendlies - Women"
        countryName="egypt"
      >
        <CompetitionSegment isChart={false} isVideo={false} twoColumns={true} />
      </CompetitionCard>
    </div>
  );
}

export default Competitions;
