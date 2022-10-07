import SliderCard from "components/SliderCard";
import SliderSection from "./SliderSection";

function LiveCasino() {
  return (
    <div className="container-wrapper">
      <SliderSection title="Live Casino" moreLink="/">
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </SliderSection>
    </div>
  );
}

export default LiveCasino;
