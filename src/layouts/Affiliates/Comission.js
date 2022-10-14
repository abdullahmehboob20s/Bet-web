import ComissionCard from "components/ComissionCard";
import React from "react";

function Comission() {
  return (
    <div className="container-2">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[50px] qualy-font text-[#1b3b54] mb-6 md:mb-12 text-center md:text-left">
        Commissions
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-12">
        <ComissionCard
          title="Revenue Share"
          desc="We have a NO NEGATIVE CARRY-OVER policy. That means that in the rare cases you have an unlucky month and your referred players take your affiliate account into the negative, you'll start fresh the following month, the negative balance doesn't carry-forward."
        />
        <ComissionCard
          title="CPA"
          desc="On a CPA commvission deal you will earn a flat rate on each new player you refer,  who meets the requirements indicated in the deal plan we agree. We offer some of the best CPA deals and Hybrid offers to all our affiliates. If you'd like to discuss a bespoke deal, please contact our affiliate team"
        />
        <ComissionCard
          title="Hybrid"
          desc="The hybrid deal we offer is fully flexible combination of the Cost Per Acquisition and the Revenue Share deal. It enables affiliates to get an upfront payment without giving up the long term profits. For the Affiliates interested in Hybrid model contact to the affiliate manager."
        />
        <ComissionCard
          title="Sub Affiliates"
          desc="Every time you introduce an affiliate to VBET, we reward you with a default 5% commission based on your sub network's performance. Invite your friends - it's a win-win for all!"
        />
      </div>
    </div>
  );
}

export default Comission;
