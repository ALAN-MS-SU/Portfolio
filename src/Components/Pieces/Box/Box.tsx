"use client";
import Image from "next/image";
import { Project } from "../../../Model/@Types";
import { useRouter } from "next/navigation";
export function Box({ Project, ID }: { Project: Project; ID: number }) {
  const router = useRouter();
  return (
    <div className="group/animate w-[400px] h-[400px] hover:scale-106 transition-all cursor-pointer perspective-midrange duration-[.5s]">
      <div
        className="group-hover/animate:rotate-x-[10deg] transition-all duration-[.5s] shadow-lg shadow-secondary group-hover/animate:shadow-2xl"
        onClick={() => {
          router.push(`/Project/${ID}`);
        }}
      >
        <div className="opacity-0 absolute w-full h-full flex justify-center items-center bg-secondary group-hover/animate:opacity-90 transition-all ease-in">
          <p className="text-4xl text-text-primary font-bold">View</p>
        </div>
        <Image className="w-full h-full" src={Project.Photo} alt="Photo" />
        <div className="absolute bottom-0 h-[80px] flex justify-center items-center w-full">
          <div className="bg-secondary relative w-full transition-all ease-in h-full z-[0] opacity-100 group-hover/animate:opacity-0">
            <h1 className="transition-all ease-in flex justify-center items-center font-semibold h-full opacity-100 text-text-primary text-3xl z-[1] group-hover/animate:opacity-0">
              {Project.Name}
            </h1>
            <div className="relative bottom-[90%] left-[calc(100%-65px-7.5px)] flex justify-center items-center h-[65px] w-[65px] border-[4px] border-text-primary rounded-md">
              <p className="text-3xl font-bold text-text-primary">
                {Project.Language}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
