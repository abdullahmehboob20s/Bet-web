import Input from "components/Input";
import React from "react";
import CustomDatePicker from "components/CustomDatePicker";
import SelectBox from "components/SelectBox";
import ErrorMessage from "components/ErrorMessage";
import FormButton from "components/FormButton";
import RadioOptions from "components/RadioOptions";

function MyProfilePage() {
  return (
    <div className="container-wrapper">
      <div className="pb-[calc(60px+20px)]">
        <div className="space-y-2 mb-6">
          <Input label="ID" val="8891233" disabled={true} />
          <Input label="Username" val="Shahid Afridi" disabled={true} />
          <Input label="First Name" />
          <Input label="Last Name" />
          <CustomDatePicker title="Birth Date" value={null} />
          <Input label="E-mail" val="example@gmail.com" disabled={true} />
          <Input label="Passport / ID" />
          <SelectBox
            title="Country"
            disabled={true}
            options={[{ title: "Pakistan" }]}
          />
          <Input label="City" />
          <Input label="Address" />
          <Input label="Phone Number" />
        </div>

        <div className="mb-3">
          <ErrorMessage msg="Subscribe for" />
        </div>

        <div className="py-5 border-t-1px border-b-1px border-white-1 mb-4">
          <div className="space-y-6">
            <RadioOptions title="Internal Messages" name="internal" />
            <RadioOptions title="Push Notifications" name="push" />
            <RadioOptions title="Phone Call" name="call" />
            <RadioOptions title="E-mail" name="mail" />
            <RadioOptions title="SMS" name="sms" />
          </div>
        </div>

        <div className="mb-2">
          <ErrorMessage msg="Enter your password to save changes" />
        </div>
        <Input label="Current Password" />
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-b h-[60px] container-wrapper flex items-center justify-center">
        <FormButton label="SAVE CHANGES" disabled={true} />
      </div>
    </div>
  );
}

export default MyProfilePage;
