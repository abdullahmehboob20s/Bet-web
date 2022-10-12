import Checkbox from "components/Checkbox";
import Input from "components/Input";
import React from "react";
import { IoClose } from "react-icons/io5";
import Navbar from "./Navbar";

const CloseModalBtn = () => {
  return (
    <button className="flex text-2xl">
      <IoClose className="fill-white-6" />
    </button>
  );
};

function SignInModal() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-b z-[500]">
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

        <form className="space-y-4">
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInModal;
