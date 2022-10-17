import FormButton from "components/FormButton";
import Input from "components/Input";
import React from "react";

function ChangePassword() {
  return (
    <div className="container-wrapper">
      <div className="space-y-2 mb-5">
        <Input label="Current password" />
        <Input label="New password" />
        <Input label="Confirm new password" />
      </div>

      <FormButton label="CHANGE PASSWORD" />
    </div>
  );
}

export default ChangePassword;
