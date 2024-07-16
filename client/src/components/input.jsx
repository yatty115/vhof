import React from "react";

const Input = ({ title, children, ...rest }) => {
  return (
    <div className="w-full cursor-pointer mb-5 input-wrapper relative">
      <label className="block mb-1 text-[#424242] text-sm">
        {title}
      </label>
      <input
        type="text"
        className={`p-2 w-full border border-[#d3d3d4] text-sm rounded-sm`}
        required
        {...rest}
      />
      {children ? children : null}
    </div>
  );
};

export default Input;
