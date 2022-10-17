import React, { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBitcoin, FaTicketAlt } from "react-icons/fa";
import SportCard from "components/SportCard";
import { IoMdWallet } from "react-icons/io";
import PaymentMethodCard from "components/PaymentMethodCard";
import { useSearchParams } from "react-router-dom";

function Withdraw() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([
    {
      id: "1",
      title: "All Games",
      group: "all",
      isSelected: false,
      Icon: BsFillGrid3X3GapFill,
      iconSize: "text-2xl",
    },
    {
      id: "2",
      title: "WALLET",
      group: "wallet",
      isSelected: false,
      Icon: IoMdWallet,
      iconSize: "text-2xl",
    },

    {
      id: "4",
      title: "Crypto",
      group: "crypto",
      isSelected: false,
      Icon: FaBitcoin,
      iconSize: "text-2xl",
    },
  ]);

  const changeSelected = (id, group) => {
    setSearchParams({ group: group });
  };

  return (
    <div className="container-wrapper mb-8">
      <div className="flex overflow-x-scroll hide-scrollbar space-x-2 mb-6">
        {data.map((item, index) => (
          <SportCard
            key={index}
            id={item.id}
            showId={false}
            onClick={(id) => changeSelected(id, item.group)}
            color="rgba(255,255,255,.5)"
            selectedBgColor="#A71F67"
            title={item.title}
            isSelected={searchParams.get("group") == item.group && true}
            Icon={(props) => <item.Icon className={item.iconSize} {...props} />}
          />
        ))}
      </div>

      {searchParams.get("group") === "all" ||
      searchParams.get("group") === null ? (
        <div className="grid grid-cols-3 gap-10px">
          {new Array(4).fill("").map((i, index) => (
            <React.Fragment key={index}>
              <PaymentMethodCard
                title="Skrill"
                img="https://cmsbetconstruct.com/content/images/payments/custom/4/1.png"
              />
              <PaymentMethodCard
                title="PerfectMoneyVoucher"
                img="https://cmsbetconstruct.com/content/images/payments/custom/4/994.png"
              />
              <PaymentMethodCard
                title="MuchBetter"
                img="https://cmsbetconstruct.com/content/images/payments/custom/4/957.png"
              />
              <PaymentMethodCard
                title="CryptoPay"
                img="https://cmsbetconstruct.com/content/images/payments/custom/4/7148.png"
              />
              <PaymentMethodCard
                title="Ecopay"
                img="https://cmsbetconstruct.com/content/images/payments/custom/4/48.png"
              />
              <PaymentMethodCard
                title="perfectmoney"
                img="https://cmsbetconstruct.com/content/images/payments/custom/4/141.png"
              />
            </React.Fragment>
          ))}
        </div>
      ) : null}

      {searchParams.get("group") === "wallet" && (
        <div className="grid grid-cols-3 gap-10px">
          {new Array(4).fill("").map((i, index) => (
            <React.Fragment key={index}>
              <PaymentMethodCard
                title="Skrill"
                img="https://cmsbetconstruct.com/content/images/payments/custom/4/1.png"
              />
              <PaymentMethodCard
                title="PerfectMoneyVoucher"
                img="https://cmsbetconstruct.com/content/images/payments/custom/4/994.png"
              />
            </React.Fragment>
          ))}
        </div>
      )}

      {searchParams.get("group") === "crypto" && (
        <div className="grid grid-cols-3 gap-10px">
          {new Array(4).fill("").map((i, index) => (
            <React.Fragment key={index}>
              <PaymentMethodCard
                title="Skrill"
                img="https://cmsbetconstruct.com/content/images/payments/custom/4/1.png"
              />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default Withdraw;
