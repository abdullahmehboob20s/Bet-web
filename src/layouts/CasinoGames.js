import Bar from "components/Bar";
import MoreLink from "components/MoreLink";
import SliderCard from "components/SliderCard";
import SliderSection from "./SliderSection";

const BarComponent = () => {
  return (
    <Bar title="Casino Games" RightComponent={() => <MoreLink to="/" />} />
  );
};

function CasinoGames() {
  return (
    <div className="container-wrapper">
      <SliderSection Bar={BarComponent}>
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </SliderSection>
    </div>
  );
}

export default CasinoGames;
