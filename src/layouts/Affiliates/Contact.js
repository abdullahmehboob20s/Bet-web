import React from "react";

const LabelAndInput = ({
  label,
  placeholder,
  id,
  type = "text",
  Component,
  height = "50px",
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-3 text-sm font-qualy font-medium text-black opacity-70 block w-fit cursor-pointer"
      >
        {label}
      </label>
      {Component ? (
        <Component
          placeholder={placeholder}
          id={id}
          className="text-sm xl:text-base px-5 border-1px border-b rounded block w-full outline-none bg-transparent text-black opacity-50 font-bold"
          style={{ height }}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="text-sm xl:text-base px-5 border-1px border-b rounded block w-full outline-none bg-transparent text-black opacity-50 font-bold"
          style={{ height }}
        />
      )}
    </div>
  );
};

function Contact() {
  return (
    <div className="container-2">
      <h1 className="mb-8 text-center text-2xl md:text-4xl xl:text-6xl text-hero font-qualy font-medium">
        Contact
      </h1>

      <form className="max-w-[480px] mx-auto w-full space-y-5">
        <LabelAndInput id="name" label="Name*" placeholder="Name" />
        <LabelAndInput id="email" label="Email*" placeholder="Email Address" />
        <LabelAndInput
          id="msg"
          label="Message*"
          placeholder="Write a message"
          height="120px"
          Component={(props) => (
            <textarea
              {...props}
              className={`${props.className} py-3 resize-none`}
            ></textarea>
          )}
        />

        <button
          type="submit"
          className="mx-auto w-full max-w-[100px] lg:max-w-[140px] rounded h-8 lg:h-12 flex items-center justify-center font-bold text-white font-qualy text-sm lg:text-base transition-all duration-[.24s] bg-[#892157] hover:bg-[rgb(163,32,100)]"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
