import Image from "next/image";
import { GitUser } from "@/Constants";
export async function UserSection() {
  const { Name, PhotoUrl, Describe } = GitUser;
  return (
    <section className="flex flex-row justify-center items-center gap-[300px] mt-[30px] animate-user">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={PhotoUrl}
          width={300}
          height={300}
          alt="Photo"
          className="w-[300px] h-[300px] rounded-full border-[2px] border-text-primary"
        />
        <h2 className="min-[1210px]:text-3xl min-[610px]:text-2xl text-lg mb-[20px] font-bold">
          {Name}
        </h2>
      </div>
      <p className="min-[610px]:text-2xl text-md w-[40%] text-justify">
        &nbsp;&nbsp;{Describe}
      </p>
    </section>
  );
}
