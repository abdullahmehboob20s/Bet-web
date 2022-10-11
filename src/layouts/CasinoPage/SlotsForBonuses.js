import SliderCard from "components/SliderCard";
import SlotBar from "components/SlotBar";
import SliderSection from "layouts/SliderSection";

function SlotsForBonuses() {
  return (
    <div className="bg-purple-to-transparent">
      <div className="container-wrapper">
        <SliderSection
          Bar={() => (
            <SlotBar title="SLOTS FOR BONUSES" linkTitle="All (+41)" />
          )}
        >
          <div className="space-y-4 col-span-2">
            <div className="slider-horizontal-cards-wrapper">
              <SliderCard />
              <SliderCard />
              <SliderCard />
            </div>
            <div className="slider-horizontal-cards-wrapper">
              <SliderCard />
              <SliderCard />
              <SliderCard />
            </div>
          </div>
        </SliderSection>
      </div>
    </div>
  );
}

export default SlotsForBonuses;
