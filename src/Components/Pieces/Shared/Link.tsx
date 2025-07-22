import Link from "next/link";
import React from "react";
export function LinkStyle({
  Text,
  children,
  Href,
  On,
  Black,
  ExtraCss,
  ...props
}: {
  Href: string;
    children?: React.ReactNode;
  ExtraCss?: string
  On?: boolean;
  Text?: string;
  Black?: boolean;
} & React.ButtonHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className={
        children
          ? ` ${ExtraCss?ExtraCss:""}`
          : `flex flex-col ${
              On ? "ButtonOn" : "ButtonOff"
            } justify-center items-center transition-colors ease-in border-2 cursor-pointer p-3 rounded-xl lg:text-xl text-md font-bold   text-nowrap ${ExtraCss?ExtraCss:""}`
      }
      href={Href}
      target={Black ? "_blank" : ""}
      {...props}
    >
      {Text}
      {children}
    </Link>
  );
}
