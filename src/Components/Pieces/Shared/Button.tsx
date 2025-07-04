import Link from "next/link";

export function Button({
  Text,
  Type,
  Href,
  ...props
}: {
  Text: string;
  Type?: "submit" | "reset" | "button" | undefined;
  Href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  if (Href) {
    return (
      <Link
        className=" flex flex-col justify-center items-center transition-colors ease-in border-2 border-secondary cursor-pointer hover:border-transparent w-[150px] h-[50px] rounded-xl bg-transparent hover:bg-secondary text-text-secondary hover:text-text-primary"
        href={Href}
        target="_blank"
      >
        {Text}
      </Link>
    );
  }
  return (
    <button
      className=" transition-colors ease-in border-2 border-secondary cursor-pointer hover:border-transparent w-[150px] h-[50px] rounded-xl bg-transparent hover:bg-secondary text-text-secondary hover:text-text-primary"
      type={Type}
      {...props}
    >
      {Text}
    </button>
  );
}
