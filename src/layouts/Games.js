import SliderCard from "components/SliderCard";
import SliderSection from "./SliderSection";

function Games() {
  return (
    <div className="container-wrapper">
      <SliderSection title="Games" moreLink="/">
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </SliderSection>
    </div>
  );
}

export default Games;
