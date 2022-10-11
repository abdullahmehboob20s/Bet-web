import SearchBar from "components/SearchBar";
import React, { useState } from "react";

function ProviderSelector() {
  const [active, setActive] = useState();

  return (
    <div className="container-wrapper flex items-center justify-between relative mb-10px">
      <button
        onClick={() => setActive((val) => !val)}
        className={`border-1px border-white transition-all duration-[.25s] rounded h-7 px-4 text-xs uppercase ${
          active ? "bg-white text-b" : "bg-transparent text-white"
        }`}
      >
        Select Provider
      </button>
      <SearchBar />
    </div>
  );
}

export default ProviderSelector;
