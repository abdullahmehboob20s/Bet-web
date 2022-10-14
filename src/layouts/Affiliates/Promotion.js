import PromotingCard from "components/PromotingCard";
import React from "react";
import { IoLogIn } from "react-icons/io5";
import { GiSpeaker } from "react-icons/gi";
import { AiFillCreditCard } from "react-icons/ai";

function Promotion() {
  return (
    <div className="container-2 grid md:grid-cols-3 gap-8 md:gap-6 xl:gap-8">
      <PromotingCard
        Icon={() => (
          <IoLogIn className="text-[2rem] md:text-[3rem] xl:text-[5rem] fill-black opacity-80 relative md:left-[-.6rem]" />
        )}
        title="Sign Up"
        desc=" Make an informed and smart choice."
      />
      <PromotingCard
        Icon={() => (
          <GiSpeaker className="text-[2rem] md:text-[3rem] xl:text-[5.4rem] fill-black opacity-80 relative md:left-[-.6rem]" />
        )}
        title="Promote"
        desc="We offer you various marketing tools to promote your business."
      />
      <PromotingCard
        Icon={() => (
          <AiFillCreditCard className="text-[1.8rem] md:text-[2.6rem] xl:text-[5rem] fill-black opacity-80" />
        )}
        title="Earn"
        desc="The more traffic you bring us, the more you earn"
      />
    </div>
  );
}

export default Promotion;
