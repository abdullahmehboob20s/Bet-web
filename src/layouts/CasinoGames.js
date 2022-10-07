import SliderCard from "components/SliderCard";
import SliderSection from "./SliderSection";

function CasinoGames() {
  return (
    <div className="container-wrapper">
      <SliderSection title="Casino games" moreLink="/">
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </SliderSection>
    </div>
  );
}

export default CasinoGames;
