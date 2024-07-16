import React from "react";

const Button = ({ title, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${className} my-4 py-[6px] px-4 bg-[#25408F] font-[600] text-lg rounded-sm text-center text-[#ffffff] w-full`}
    >
      {title}
    </button>
  );
};

export default Button;
