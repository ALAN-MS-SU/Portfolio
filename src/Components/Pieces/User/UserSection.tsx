import Image from "next/image";
import { GitUser } from "@/Constants";
export async function UserSection() {
  const { Name, PhotoUrl, Describe } = GitUser;
  return (
    <section className="flex md:flex-row flex-col justify-center items-center xl:gap-x-[300px] lg:gap-x-[200px] md:gap-x-[100px] gap-x-[50px] mt-[30px] animate-user">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={PhotoUrl}
          width={300}
          height={300}
          alt="Photo"
          className="lg:w-[300px] lg:h-[300px] sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] rounded-full border-[2px] border-text-primary"
        />
        <h2 className="min-[1210px]:text-3xl min-[610px]:text-xl text-lg mb-[20px] font-bold text-justify">
          {Name}
        </h2>
      </div>
      <p className="xl:text-2xl lg:text-xl md:text-lg text-sm lg:w-[40%] md:w-[55%] w-[80%] text-justify">
        &nbsp;&nbsp;{Describe}
      </p>
    </section>
  );
}
