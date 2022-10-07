import PartnerCard from "components/PartnerCard";
import React from "react";

function Partners() {
  return (
    <div>
      <div className="container">
        <div className="pb-3 border-b-1px border-white-2">
          <div className="flex items-center justify-center mb-4">
            <a href="/">
              <img
                className="h-10"
                src="https://cmsbetconstruct.com/storage/medias/vbet/media_4_1dfbde1b506a2e6d6a797efab15b2608.png"
                alt=""
              />
            </a>
          </div>

          <div className="flex items-center space-x-2 overflow-x-scroll hide-scrollbar mb-3">
            <PartnerCard img="https://cmsbetconstruct.com/content/images/4085b83d97832244c74ec77846c90641_1869062_media.png" />
            <PartnerCard img="https://cmsbetconstruct.com/content/images/cde6a220539794a832cc10c636f29739_4_media.png" />
            <PartnerCard img="https://cmsbetconstruct.com/content/images/4085b83d97832244c74ec77846c90641_1869062_media.png" />
            <PartnerCard img="https://cmsbetconstruct.com/content/images/cde6a220539794a832cc10c636f29739_4_media.png" />
            <PartnerCard img="https://cmsbetconstruct.com/content/images/4085b83d97832244c74ec77846c90641_1869062_media.png" />
            <PartnerCard img="https://cmsbetconstruct.com/content/images/cde6a220539794a832cc10c636f29739_4_media.png" />
            <PartnerCard img="https://cmsbetconstruct.com/content/images/4085b83d97832244c74ec77846c90641_1869062_media.png" />
            <PartnerCard img="https://cmsbetconstruct.com/content/images/cde6a220539794a832cc10c636f29739_4_media.png" />
            <PartnerCard img="https://cmsbetconstruct.com/content/images/4085b83d97832244c74ec77846c90641_1869062_media.png" />
            <PartnerCard img="https://cmsbetconstruct.com/content/images/cde6a220539794a832cc10c636f29739_4_media.png" />
          </div>

          <p className="text-center text-white-4 font-medium text-xs mb-4">
            Vbet.com is operated by Radon B.V. (Commercial register of Curacao
            no.126922 Emancipatie Boulevard 29, Curacao) under a sublicense CIL
            pursuant to Master gaming License №5536/JAZ. Play responsibly.
          </p>

          <div className="flex items-center justify-center space-x-2">
            <a href="/">
              <img
                src="https://cmsbetconstruct.com/storage/medias/vbetam/media_1_59f6412eb0c7a915a0635b32f9661bf8.png"
                className="h-10"
                alt=""
              />
            </a>
            <a href="/">
              <img
                src="https://cmsbetconstruct.com/storage/medias/vbetam/media_1_6306043cbcf8fc235261e9a4de6db7bc.png"
                className="h-10"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
