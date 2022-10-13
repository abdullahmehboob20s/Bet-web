import Layout from "layouts/Layout";
import Filter from "layouts/ResultPage/Filter";
import Results from "layouts/ResultPage/Results";
import TabsSection from "layouts/ResultPage/TabsSection";
import React from "react";

function ResultsPage() {
  return (
    <Layout>
      <div className="pt-7px mb-6">
        <div className="mb-10px">
          <TabsSection />
        </div>
        <div className="mb-6">
          <Filter />
        </div>

        <Results />
      </div>
    </Layout>
  );
}

export default ResultsPage;
