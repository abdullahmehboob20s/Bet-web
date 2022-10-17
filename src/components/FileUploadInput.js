import React from "react";

const FileUploadInput = ({ handler, stateGetter, stateSetter }) => {
  return (
    <>
      <input
        type="file"
        className="hidden"
        name="passportImage"
        step="0"
        multiple=""
        value=""
        onChange={handler}
      />

      <span className="text-xs ml-[15px] mt-4">
        {stateGetter ? stateGetter.name : "Choose File"}{" "}
      </span>
    </>
  );
};

export default FileUploadInput;
