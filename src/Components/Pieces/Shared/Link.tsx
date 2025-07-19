import Link from "next/link";
export function LinkStyle({
  Text,
  Href,
  Black,
  ...props
}: {
  Text: string;
    Href: string;
  Black?: boolean
} & React.ButtonHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className=" flex flex-col text-text-secondary justify-center items-center transition-colors ease-in border-2 border-secondary cursor-pointer hover:border-transparent p-3 rounded-xl bg-transparent hover:bg-secondary text-xl font-bold hover:text-text-primary w-[200px]"
      href={Href}
      target={Black?"_blank":"_self"}
      {...props}
    >
      {Text}
    </Link>
  );
}
