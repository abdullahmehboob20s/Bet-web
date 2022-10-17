import TabButton from "components/TabButton";
import React from "react";

function TabsSection() {
  return (
    <div className="container-wrapper pt-2">
      <div className="flex h-[34px] rounded overflow-hidden space-x-1px">
        <TabButton title="Live" />
        <TabButton title="Finished" active={true} />
      </div>
    </div>
  );
}

export default TabsSection;
