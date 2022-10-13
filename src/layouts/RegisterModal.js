import Checkbox from "components/Checkbox";
import Input from "components/Input";
import SelectBox from "components/SelectBox";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleRegisterModal } from "redux/registerModalState";
import Navbar from "./Navbar";

const CloseModalBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="flex text-2xl"
      onClick={() => dispatch(toggleRegisterModal(false))}
    >
      <IoClose className="fill-white-6" />
    </button>
  );
};

function RegisterModal({ style, className }) {
  return (
    <div
      style={style}
      className={`fixed top-0 left-0 w-full h-full bg-b z-[500] grid grid-rows-[1fr_auto] transition-all duration-[.3s] ${className}`}
    >
      <Navbar
        showDropdown={false}
        showRegisterButton={false}
        NavbarRightComponent={CloseModalBtn}
      />

      <div className="mt-mobile-header-main-section-height pt-3 overflow-y-scroll">
        <div className="container-wrapper">
          <p className="text-sm text-white-5 mb-10px">New member?</p>
          <p className="text-lg text-white mb-4 uppercase leading-1">
            Register now, it's easy!
          </p>
        </div>

        <form className="space-y-4 container-wrapper">
          <Input label="Username" />
          <Input label="Email" />
          <Input label="Password" type="password" />
          <Input label="Confirm Password" type="password" />
          <SelectBox
            title="Country"
            options={[{ title: "Pakistan" }, { title: "America" }]}
          />
          <SelectBox
            title="Currency"
            options={[{ title: "PKR" }, { title: "USD" }]}
          />
          <Input label="Promo Code" type="password" />

          <Checkbox
            id="me"
            className="flex items-start space-x-3"
            inputClassName="mt-1"
            title={
              <>
                <p className="text-sm">
                  <span className="text-white-7">
                    I confirm that I am 18 years old; By registering, I confirm
                    that I am familiar with and accept the terms of the contract
                    of offer to participate in gambling and the rules of the
                    organizer's game and agree to the processing of my personal
                    data
                  </span>{" "}
                  <a
                    className="text-white underline"
                    href="/?helpPageContent=privacy-policy"
                  >
                    <span>Privacy Policy</span>
                  </a>{" "}
                  <span className="text-white-7">and the</span>{" "}
                  <a
                    className="text-white underline"
                    href="/?helpPageContent=general-terms-and-conditions"
                  >
                    <span>General Terms &amp; Conditions</span>
                  </a>
                </p>
              </>
            }
          />
        </form>
        <div className="flex container-wrapper mt-4 items-center space-x-3 py-5 border-t-1px border-t-white-2">
          <img
            className="w-6"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABL1BMVEUAAAD///////////////////////////////////////////////+rq6tChfQcOqkkQa0hP6xUkfatra1OjfX19fU+fezX5v3i5vS1tbU3UrSwsLCmqbCvr6/t7e2xsbH8/P1XkvYuSrGkqLDi4uK4ubn4+v1Bg/Lx8fHW1tbIyMjDw8O9vb20tLSnqq7m7/7m6fZgmfZHiPS5zPPv7+9Cge/M0uzH0Ove3t5bccE+WLezs7MnRK7y9//C2PyryfuZvvpuovdEhPDs7Ozo6Ojk5OSwu+G7yNygrduMm9TM3v2yzvv19viEsPh5qfhZlPZkmfOvxPCqwfCRsvB2n+3f5OzK1+vY3um/z+h7nua6w+Wst+Crtt/Z2dmTodaPntXByNTR0dFsf8hNZLxHYLreSXCvAAAADHRSTlMA/fPy2baba04cGm5J2ZqkAAACaElEQVRYw63YaVfaQBSA4bALjgFssLUkhEZAWVxQAQGX1rp23/e9/v/f4BgTZ5IL3EHv+80RnjPnDJdDRvNKpxLxKJuyaDyRSmtymWSE3bJIMiOcmRi7Q7EZ35lFtoNuatbbD+bgkrunTIzduViGQ0lGUJKfe4QCiqS1FCMppSVooIQWp4HiWpQGimqhhfX2vJyxedjpLDiD//9+fatNlMIQu2/o4Raybrn+9xoKQQlCPOf8BQ5BCUKcOhMv3AAQkCAk6vvvfzDAIPYeQHJO99p5mMegt8sQktvtuk4Wg7Y8B0BC6l05AIIOBmVzP7iDQOuHOg7xUOiJTgMd6DTQnjECMk7O+86U0GN9RI/4P8onF9NAtdCGPhg+xDvLq0PPA0znHZ8WAbGuowLBI1vecudOQKyXV4T2NmXoqzfBAmK/FaF92Xlz813gQ3wucAie2T7zpTZwMOiV5LyWpgY4GNSWoJdiGTgoNC9BB9BRh+RDexZ0NgY50O5YyDTNJXPpKtO0ijzLqhYYGoTW5sItAkcJwhx1CDoEEOIgEOasqEH3AtAfBtqxnqpDos9gP9YckFQg8yMLVBryxWJJHRKdMqlji68ICYfkqhX/1/N2g/8pJAyC2c165Xjnb0teKuGQWvY2BSQkHMJr4dDi6RruDFdQiM/FF1SygQMgd756iFTET82b00/mJGcV/xzdfK8WmuOdZo2hUEGac3vMdirI0ILKdXsEUy8zFIJUpRn4YFkNb/BwCFpH9UarOlyttho/j8psUmQPfmSPomQPx2SP62QXCFRXGmSXLFTXPlQXUVRXY6SXdWTXh5dIMReAck/CkAAAAABJRU5ErkJggg=="
            alt=""
          />
          <div className="text-xs text-white-7">
            <a
              href="https://policies.google.com/privacy"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              Terms of Service
            </a>{" "}
          </div>
        </div>
      </div>

      <div className="bg-white-05">
        <div className="py-5 border-b-[3px] border-white-8">
          <Link
            to="/"
            className="flex items-center justify-center space-x-2 mx-auto w-fit"
          >
            <BsFillPersonFill className="fill-white-5 text-lg" />
            <span className="underline text-sm text-white-5">
              Contact support
            </span>
          </Link>
        </div>

        <div className="py-4 container-wrapper">
          <button
            type="submit"
            className="text-wite uppercase bg-oc-1 transition-all duration-[.24s] text-center rounded text-xs w-full h-9 hover:bg-oc-1-hover"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
