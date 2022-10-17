import FileUploadInput from "components/FileUploadInput";
import FormButton from "components/FormButton";
import SelectBox from "components/SelectBox";
import React, { useState } from "react";
import { ImUpload } from "react-icons/im";

function VerifyAccount() {
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="container-wrapper">
      <p className="text-xs text-white-5 font-medium mb-6">
        •Please select Your Type of ID (Bank slip, Passport or other) <br />
        •Choose File and click “BROWSE” <br />
        •Click the “VERIFY” button and your account will be verified and shown
        in the status tab - above “My Profile”, if your documents are
        “Accepted”. <br />
        ATTENTION Only JPG, PNG, GIF, or PDF format files not exceeding 10MB are
        supported.
      </p>

      <div className="space-y-2 mb-5">
        <SelectBox
          title="Please select your type of ID"
          options={[
            { title: "Bank Slip" },
            { title: "Document" },
            { title: "Passport / ID Card" },
            { title: "IBAN" },
          ]}
        />

        <SelectBox
          title="Attach File"
          showDropdownIcon={false}
          Component={() => (
            <FileUploadInput
              stateGetter={selectedFile}
              stateSetter={setSelectedFile}
              handler={changeHandler}
            />
          )}
        >
          <ImUpload className="fill-white-8 absolute top-1/2 -translate-y-1/2 right-5 pointer-events-none text-lg" />
        </SelectBox>
      </div>

      <FormButton
        label="Verify"
        variant={1}
        disabled={selectedFile ? false : true}
      />

      <div className="mt-5 py-4 border-t-1px border-white-5">
        <p className="text-xs text-white-6 mb-2 font-medium">
          Uploaded documents
        </p>
        <p className="text-10px text-white-6 mb-3 font-medium">
          There are no uploaded documents.
        </p>
      </div>
    </div>
  );
}

export default VerifyAccount;
