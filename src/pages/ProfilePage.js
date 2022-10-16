import Account from "components/Account";
import BalanceCard from "components/BalanceCard";
import Slider from "components/Slider";
import User from "components/User";
import Layout from "layouts/Layout";
import Cards from "layouts/ProfilePage/Cards";
import PromoCode from "layouts/ProfilePage/PromoCode";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "redux/user";
import SwiperCore, { EffectCoverflow } from "swiper";
import { SwiperSlide } from "swiper/react";

SwiperCore.use([EffectCoverflow]);

const CloseModalBtn = () => {
  return (
    <Link to="/" className="flex text-2xl">
      <IoClose className="fill-white-6" />
    </Link>
  );
};

function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(signOut());
    navigate("/");
  };

  return (
    <Layout
      showFooter={false}
      showBottomBar={false}
      navbarProps={{
        showDropdown: false,
        showSignInButton: false,
        showRegisterButton: false,
        NavbarRightComponent: CloseModalBtn,
      }}
    >
      <div className="pt-3">
        <div className="container-wrapper mb-5">
          <Slider
            slidesPerView={1.2}
            spaceBetween={0}
            options={{
              centeredSlides: true,
              className: "balance-slider",
            }}
          >
            <SwiperSlide>
              <BalanceCard bg="#109121" />
            </SwiperSlide>
            <SwiperSlide>
              <BalanceCard bg="#aa7f00" />
            </SwiperSlide>
          </Slider>
        </div>

        <div className="mb-4">
          <User />
        </div>

        <div className="mb-4">
          <Account />
        </div>

        <Cards />

        <div className="container-wrapper mb-4">
          <PromoCode />
        </div>

        <div className="container-wrapper mb-4">
          <button
            onClick={logout}
            className="bg-white-05 text-white-7 h-[36px] rounded w-full text-center px-5 text-xs font-medium"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default ProfilePage;
