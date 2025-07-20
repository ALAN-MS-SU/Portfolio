import Image from "next/image";
import { Project } from "../../../Model/@Types";

export async function Tittle({ Name, Photo }: Pick<Project, "Name" | "Photo">) {
  return (
    <div>
      <Image
        src={Photo}
        alt="Cover"
        className="w-full h-[45vh] border-b-8 border-text-secondary mb-8"
      />
      <h1 className="md:text-6xl text-3xl text-center font-bold">{Name}</h1>
    </div>
  );
}
