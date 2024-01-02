import React from "react";

const sizeClasses = {
  txtInterMedium18: "font-inter font-medium",
  txtInterRegular14WhiteA70075: "font-inter font-normal",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold24Bluegray90001: "font-inter font-semibold",
  txtHelveticaNowDisplayMedium55: "font-helveticanowdisplay font-medium",
  txtInterSemiBold24Gray50: "font-inter font-semibold",
  txtInterSemiBold54: "font-inter font-semibold",
  txtInterSemiBold32: "font-inter font-semibold",
  txtInterRegular66: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular14Black9007e: "font-inter font-normal",
  txtHelveticaNowDisplayRegIta14: "font-helveticanowdisplay font-normal italic",
  txtHelveticaNowDisplayRegular14: "font-helveticanowdisplay font-normal",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
