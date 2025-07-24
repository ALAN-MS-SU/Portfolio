import Image from "next/image";
import { Project } from "../../../Model/@Types";
export async function Tittle({ Name, Cover}: Pick<Project, "Name" | "Cover">) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={Cover.Large}
        alt="Cover"
        className="w-full h-[400px] min-[1000px]:block hidden border-b-8 border-text-primary mb-8"
      />
      <Image
        src={Cover.Medium}
        alt="Cover"
        className="w-full h-[400px] min-[1000px]:hidden min-[500px]:block hidden border-b-8 border-text-primary mb-8"
      />
      <Image
        src={Cover.Small}
        alt="Cover"
        className="w-full h-[400px] min-[500px]:hidden block border-b-8 border-text-primary mb-8"
      />
      <h1 className="md:text-6xl text-3xl text-text-primary text-center font-bold">
        {Name}
      </h1>
    </div>
  );
}
