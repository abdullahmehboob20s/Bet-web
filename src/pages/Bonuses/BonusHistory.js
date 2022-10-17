import FormButton from "components/FormButton";
import Input from "components/Input";
import SelectBox from "components/SelectBox";
import Filter from "layouts/ResultPage/Filter";
import React from "react";

function BonusHistory() {
  return (
    <div className="container-wrapper mb-10">
      {/* <Filter subtitle="All, 24 hours"> */}
      <Filter>
        <div className="px-4">
          <div className="border-t-1px border-t-b py-3 ">
            <div className="space-y-2">
              <SelectBox
                title="Category"
                options={[{ title: "Sports" }, { title: "Casino" }]}
              />
              <SelectBox
                title="Period"
                options={[{ title: "24 hours" }, { title: "72 hours" }]}
              />
            </div>

            <div className="mt-6">
              <FormButton label="SHOW" variant={1} />
            </div>
          </div>
        </div>
      </Filter>

      <div className="mt-8">
        <p className="text-center text-xs text-white-7">
          There are no data for the selected time period
        </p>
      </div>
    </div>
  );
}

export default BonusHistory;
