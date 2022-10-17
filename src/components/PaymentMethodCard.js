import React from "react";

function PaymentMethodCard({ title, img }) {
  return (
    <div className="bg-white-1 px-10px transition-all duration-[.24s] rounded">
      <div className="h-[56px] border-b-1px border-b-b mb-1 flex items-center justify-center">
        <img src={img} className="max-w-[80%] max-h-[80%]" alt="" />
      </div>

      <div className="min-h-[42px] flex items-center justify-center text-center mb-1">
        <p
          className="text-xs text-white-6 break-words"
          style={{ wordBreak: "break-word" }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default PaymentMethodCard;
