import FormButton from "components/FormButton";
import RadioButton from "components/RadioButton";
import React from "react";

function TimeOut() {
  return (
    <div className="container-wrapper">
      <p className="text-xs text-white-5 mb-8">
        Temporary self-exclusion allows you to take a break from the website for
        a chosen period. Once you have taken time-out, you will not be able to
        replenish your account, play or withdraw money from your balance.
      </p>

      <div className="space-y-4 mb-7">
        <RadioButton label="23 hours" name="time" className="w-fit" />
        <RadioButton label="One week" name="time" className="w-fit" />
        <RadioButton label="One month" name="time" className="w-fit" />
        <RadioButton label="Two month" name="time" className="w-fit" />
      </div>

      <FormButton label="save changes" variant={1} disabled={true} />
    </div>
  );
}

export default TimeOut;
