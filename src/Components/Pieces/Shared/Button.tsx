export function Button({
  Text,
  Type,
  ...props
}: {
  Text: string;
  Type: "submit" | "reset" | "button" | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className=" transition-colors ease-in text-text-secondary border-2 border-secondary cursor-pointer hover:border-transparent w-[150px] h-[50px] rounded-xl bg-transparent hover:bg-secondary text-xl font-bold hover:text-text-primary"
      type={Type}
      {...props}
    >
      {Text}
    </button>
  );
}
