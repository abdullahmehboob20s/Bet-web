import Input from "components/Input";
import React from "react";

function PromoCode() {
  return (
    <form className="grid grid-cols-[1fr_auto] space-x-2">
      <Input label="Promo code" />
      <button
        disabled={true}
        type="submit"
        className="bg-oc-1 text-white uppercase transition-all duration-[.24s] px-8 rounded text-xs disabled:bg-white-1 disabled:text-white-3"
      >
        Apply
      </button>
    </form>
  );
}

export default PromoCode;
