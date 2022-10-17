import Layout from "layouts/Layout";
import Filter from "layouts/ResultPage/Filter";
import Results from "layouts/ResultPage/Results";
import TabsSection from "layouts/ResultPage/TabsSection";
import React from "react";
import SelectBox from "components/SelectBox";
import CustomDatePicker from "components/CustomDatePicker";

function ResultsPage() {
  return (
    <Layout>
      <div className="pt-7px mb-6">
        <div className="mb-10px">
          <TabsSection />
        </div>
        <div className="mb-6">
          <Filter>
            <div className="container-wrapper">
              <div className="border-t-1px border-t-b py-3 space-y-2">
                <div className="flex items-center space-x-2">
                  <CustomDatePicker />
                  <CustomDatePicker />
                </div>

                <SelectBox
                  title="Sports"
                  options={[{ title: "Footbal" }, { title: "Cricket" }]}
                />
                <SelectBox
                  title="Competition"
                  options={[{ title: "All" }, { title: "Cricket" }]}
                />
              </div>
            </div>
          </Filter>
        </div>

        <Results />
      </div>
    </Layout>
  );
}

export default ResultsPage;
