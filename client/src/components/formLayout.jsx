import React from "react";

const FormLayout = ({ children, handleSubmit, title, subTitle }) => {
  return (
    <>
      <div
        className="fixed top-o left-0 right-0 h-[812px] z-10"
        style={{
          backgroundImage: "url(/images/bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className={`p-[36px_24px] relative z-20`}
        style={{
          background: "transparent",
          minHeight: `calc(${
            window.innerWidth > 768 ? "-130px" : "-192px"
          } + 100vh)`,
        }}
      >
        <div
          className="w-full max-w-[400px] mx-auto h-full rounded-md bg-white"
          style={{ boxShadow: "0 0 8px 0 rgba(158,158,158,0.490196)" }}
        >
          <div className="flex items-center justify-center p-6 pb-0">
            <img
              src="/images/Logo.svg"
              alt="CoVantage"
              className="w-[240px] h-[70px]"
            />
          </div>
          <form
            className="p-6"
            onSubmit={handleSubmit}
          >
            <div className="pb-2 mb-4 text-center">
              {title && (
                <h1 className="font-[500] text-[#0c0d0e] text-2xl">{title}</h1>
              )}
              {subTitle && <p className="mt-4 text-sm">{subTitle}</p>}
            </div>
            <div>{children}</div>
          </form>
          <div className="p-6 border-t border-[#e0e0e0] bg-[#25408f0d] w-full flex gap-2">
            <div className="flex-1">
              <a
                href="#"
                className="text-[#25408F] hover:underline text-sm block mb-3"
              >
                Register
              </a>
              <a
                href="#"
                className="text-[#25408F] hover:underline text-sm block mb-3"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-[#25408F] hover:underline text-sm block mb-3"
              >
                Privacy Notice
              </a>
              <a
                href="#"
                className="text-[#25408F] hover:underline text-sm"
              >
                Sign In Problems FAQ
              </a>
            </div>
            <div className="flex-1">
              <a
                href="#"
                className="text-[#25408F] hover:underline text-sm block mb-3"
              >
                ATM/Branches
              </a>
              <a
                href="#"
                className="text-[#25408F] hover:underline text-sm block mb-3"
              >
                Supported Browsers
              </a>
              <a
                href="#"
                className="text-[#25408F] hover:underline text-sm"
              >
                Disclosures
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
