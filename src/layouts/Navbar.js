import VerticalDropdown from "components/VerticalDropdown";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleRegisterModal } from "redux/registerModalState";
import { toggleSignInModal } from "redux/signInModalState";

function Navbar(props) {
  const {
    NavbarBottomContent,
    showDropdown = true,
    showSignInButton = true,
    showRegisterButton = true,
    NavbarRightComponent,
  } = props;
  const [lastScrollTop, setlastScrollTop] = React.useState(0);
  const [scrollHide, setScrollHide] = React.useState(false);

  const dispatch = useDispatch();

  const toggleModal = (type) => {
    if (type === "signin") {
      dispatch(toggleSignInModal(true));
      dispatch(toggleRegisterModal(false));
      console.log("signin");
    }

    if (type === "register") {
      console.log("register");
      dispatch(toggleRegisterModal(true));
      dispatch(toggleSignInModal(false));
    }
  };

  React.useEffect(() => {
    if (NavbarBottomContent) {
      const handler = () => {
        if (window.scrollY > 80) {
          if (window.scrollY > 200) {
            var scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
              setScrollHide(true);
            } else {
              setScrollHide(false);
            }

            setlastScrollTop(scrollTop);
          }
        } else {
        }
      };

      document.addEventListener("scroll", handler);

      return () => {
        document.removeEventListener("scroll", handler);
      };
    }
  });

  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      <div className="h-mobile-header-main-section-height flex items-center bg-b border-b-2 border-[rgba(255,255,255,.05)] relative z-50">
        <div className="px-1 pr-4 flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <Link className="logo" to="/">
              <img
                className="max-w-[100px]"
                src="https://cmsbetconstruct.com/storage/medias/vbet/media_4_e78a4ffd98a54aa7f8225fcb13f555ea.gif?v=10/06/2022-16:31"
                alt=""
              />
            </Link>
            <a
              target="_self"
              className="h-6 w-6 block"
              href="/en/?profile=open&amp;account=bonus-journey&amp;page=journeys"
            >
              <img
                className="h-full w-full"
                src="https://cmsbetconstruct.com/storage/medias/vbet/media_4_4ac7eaa91a5473d2e549c9fd4cdaa78e.gif"
                alt=""
              />
            </a>
          </div>

          <div className="flex items-center space-x-3">
            {showSignInButton && (
              <button
                className="text-xs text-white uppercase underline"
                onClick={() => toggleModal("signin")}
              >
                Sign in
              </button>
            )}
            {showRegisterButton && (
              <button
                className="btn text-xs uppercase h-7"
                onClick={() => toggleModal("register")}
              >
                Register
              </button>
            )}

            {showDropdown && <VerticalDropdown />}

            {NavbarRightComponent && <NavbarRightComponent />}
          </div>
        </div>
      </div>

      {NavbarBottomContent && (
        <div
          className={`absolute top-mobile-header-main-section-height left-0 w-full h-mobile-header-navigation-height z-20 transition-all duration-[.24s] ${
            scrollHide
              ? "-translate-y-mobile-header-navigation-height"
              : "translate-y-0"
          }`}
        >
          <NavbarBottomContent />
        </div>
      )}
    </div>
  );
}

export default Navbar;
