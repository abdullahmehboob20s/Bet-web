import Bar from "components/Bar";
import MoreLink from "components/MoreLink";
import SliderCard from "components/SliderCard";
import SliderSection from "./SliderSection";

const BarComponent = () => {
  return <Bar title="Games" RightComponent={() => <MoreLink to="/" />} />;
};

function Games() {
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

export default Games;
