import Checkbox from "components/Checkbox";
import Input from "components/Input";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSignInModal } from "redux/signInModalState";
import { signIn } from "redux/user";
import Navbar from "./Navbar";

const CloseModalBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="flex text-2xl"
      onClick={() => dispatch(toggleSignInModal(false))}
    >
      <IoClose className="fill-white-6" />
    </button>
  );
};

function SignInModal({ style, className }) {
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn());
    dispatch(toggleSignInModal(false));
  };

  return (
    <div
      style={style}
      className={`fixed top-0 left-0 w-full h-full bg-b z-[500] grid grid-rows-[1fr_auto] transition-all duration-[.3s] ${className} `}
    >
      <Navbar
        showDropdown={false}
        showSignInButton={false}
        NavbarRightComponent={CloseModalBtn}
      />

      <div className="container-wrapper mt-mobile-header-main-section-height pt-3">
        <p className="text-sm text-white-5 mb-10px">Already have an account?</p>
        <p className="text-lg text-white mb-4 uppercase leading-1">
          Sign in, we are waiting for you
        </p>

        <form className="space-y-4" onSubmit={formSubmit}>
          <Input label="Email / Username" />
          <Input label="Password" type="password" />
          <Checkbox id="me" title="Remember Me" />

          <div>
            <button
              type="submit"
              className="text-wite uppercase bg-oc-1 transition-all duration-[.24s] text-center rounded text-xs w-full h-9 hover:bg-oc-1-hover"
            >
              Sign In
            </button>

            <a
              href="/"
              className="uppercase mx-auto block w-fit mt-5 text-white-7 text-sm"
            >
              Forgot your password?
            </a>
          </div>
        </form>
      </div>

      <Link
        to="/"
        className="flex items-center justify-center space-x-2 mx-auto w-fit mb-5"
      >
        <BsFillPersonFill className="fill-white-5 text-lg" />
        <span className="underline text-sm text-white-5">Contact support</span>
      </Link>
    </div>
  );
}

export default SignInModal;
