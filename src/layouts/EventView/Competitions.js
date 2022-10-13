import CompetitionCard from "components/CompetitionCard";
import CompetitionSegment from "components/CompetitionSegment";

function Competitions() {
  return (
    <div className="space-y-4px">
      <CompetitionCard
        title="Europe"
        subtitle="U19 UEFA European Championship - Women"
        countryName="europe"
        accordionButtonClassName="container-wrapper h-[36px]"
        className="bg-white-1"
      >
        <div className="container-wrapper space-y-2 pb-2">
          <CompetitionSegment />
          <CompetitionSegment isVideo={false} />
        </div>
      </CompetitionCard>
      <CompetitionCard
        title="England"
        subtitle="Professional Development League"
        countryName="england"
        accordionButtonClassName="container-wrapper h-[36px]"
        className="bg-white-1"
      >
        <div className="container-wrapper space-y-2 pb-2">
          <CompetitionSegment isChart={false} />
        </div>
      </CompetitionCard>
      <CompetitionCard
        title="Italy"
        subtitle="Campionato Primavera 1"
        countryName="italy"
        accordionButtonClassName="container-wrapper h-[36px]"
        className="bg-white-1"
      >
        <div className="container-wrapper space-y-2 pb-2">
          <CompetitionSegment isChart={false} isVideo={false} />
        </div>
      </CompetitionCard>
      <CompetitionCard
        title="Egypt"
        subtitle="International Friendlies - Women"
        countryName="egypt"
        accordionButtonClassName="container-wrapper h-[36px]"
        className="bg-white-1"
      >
        <div className="container-wrapper space-y-2 pb-2">
          <CompetitionSegment
            isChart={false}
            isVideo={false}
            twoColumns={true}
          />
        </div>
      </CompetitionCard>
    </div>
  );
}

export default Competitions;
