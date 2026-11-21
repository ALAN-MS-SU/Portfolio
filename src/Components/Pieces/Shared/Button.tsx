import React from "react";
export function Button({
  Text,
  children,
  On,
  className,
  Mode = "CO",
  ...props
}: {
  children?: React.ReactNode;
  On?: boolean;
  Text?: string;
  Mode?: "OP" | "CO";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={
        children
          ? ` ${Mode == "OP" ? (On ? "opacity-100" : "opacity-50") : ""} ${className ? className : ""}`
          : `flex flex-col ${
              On ? "ButtonOn" : "ButtonOff"
            } justify-center items-center transition-colors ease-in border-2 cursor-pointer p-3 rounded-xl lg:text-xl text-md font-bold text-nowrap ${
              className ? className : ""
            }`
      }
      {...props}
    >
      {Text}
      {children}
    </button>
  );
}
