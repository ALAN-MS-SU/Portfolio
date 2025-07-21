import Link from "next/link";
export function LinkStyle({
  Text,
  Href,
  Black,
  ...props
}: {
  Text: string;
  Href: string;
  Black?: boolean;
} & React.ButtonHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className=" flex flex-col text-text-primary justify-center items-center transition-colors ease-in border-2 border-primary cursor-pointer hover:border-transparent p-3 rounded-xl bg-transparent hover:bg-primary lg:text-xl text-md  font-bold hover:text-text-secondary lg:w-[200px] w-[170px] text-nowrap"
      href={Href}
      target={Black ? "_blank" : ""}
      {...props}
    >
      {Text}
    </Link>
  );
}
