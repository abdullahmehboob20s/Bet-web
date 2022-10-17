import FormButton from "components/FormButton";
import React from "react";

function ReferAFriend() {
  return (
    <div className="container-wrapper">
      <div className="h-[52px] border-1px border-white-6 rounded flex items-center px-4 mb-3">
        <p className="text-sm text-white-4">Share link</p>
      </div>

      <FormButton label="Generate" variant={1} />
    </div>
  );
}

export default ReferAFriend;
