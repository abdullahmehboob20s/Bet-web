import FormButton from "components/FormButton";
import Input from "components/Input";
import React from "react";

function PromoCode() {
  return (
    <div className="container-wrapper">
      <div className="mb-3">
        <Input label="Promo code" />
      </div>
      <FormButton disabled={true} label="Generate" variant={1} />
    </div>
  );
}

export default PromoCode;
