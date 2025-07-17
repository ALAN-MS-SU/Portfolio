"use client";
import Image from "next/image";
import { Mobile, Web, API } from "../../../../Model/@Types";

//import { Button } from "../Shared/Button";
export function Box({
  Web,
  Mobile,
  API,
}: {
  Web?: Web;
  Mobile?: Mobile;
  API?: API;
}) {
  if (Web)
    return (
      <div className="group/animate w-[400px] h-[400px] hover:scale-106 transition-all cursor-pointer perspective-midrange duration-[.5s]">
        <div className="group-hover/animate:rotate-x-[10deg] transition-all duration-[.5s] shadow-lg shadow-secondary group-hover/animate:shadow-2xl">
          <div className="opacity-0 absolute w-full h-full flex justify-center items-center bg-secondary group-hover/animate:opacity-90 transition-all ease-in">
            <p className="text-4xl text-text-primary font-bold">View</p>
          </div>
          <Image className="w-full h-full" src={Web.Photo} alt="Photo" />
          <div className="absolute bottom-0 h-[80px] flex justify-center items-center w-full">
            <div className="bg-secondary relative w-full transition-all ease-in h-full z-[0] opacity-100 group-hover/animate:opacity-0">
              <h1 className="transition-all ease-in flex justify-center items-center font-semibold h-full opacity-100 text-text-primary text-3xl z-[1] group-hover/animate:opacity-0">
                {Web.Name}
              </h1>
              <div className="relative bottom-[90%] left-[calc(100%-65px-7.5px)] flex justify-center items-center h-[65px] w-[65px] border-[4px] border-text-primary rounded-md">
                {Web.Language}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  if (Mobile)
    return (
      <div className="group/animate w-[400px] h-[400px] hover:scale-106 transition-all cursor-pointer perspective-midrange duration-[.5s]">
        <div className="group-hover/animate:rotate-x-[10deg] transition-all duration-[.5s] shadow-lg shadow-secondary group-hover/animate:shadow-2xl">
          <div className="opacity-0 absolute w-full h-full flex justify-center items-center bg-secondary group-hover/animate:opacity-90 transition-all ease-in">
            <p className="text-4xl text-text-primary font-bold">View</p>
          </div>
          <Image className="w-full h-full" src={Mobile.Photo} alt="Photo" />
          <div className="absolute bottom-0 h-[80px] flex justify-center items-center w-full">
            <div className="bg-secondary relative w-full transition-all ease-in h-full z-[0] opacity-100 group-hover/animate:opacity-0">
              <h1 className="transition-all ease-in flex justify-center items-center font-semibold h-full opacity-100 text-text-primary text-3xl z-[1] group-hover/animate:opacity-0">
                {Mobile.Name}
              </h1>
              <div className="relative bottom-[90%] left-[calc(100%-65px-7.5px)] flex justify-center items-center h-[65px] w-[65px] border-[4px] border-text-primary rounded-md">
                {Mobile.Language}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  if (API)
    return (
      <div className="w-[400px] h-[400px] border-2 border-secondary flex flex-col items-center rounded-2xl bg-linear-to-r/srgb from-transparent">
        <Image src={API.Photo} alt="Photo" width={200} height={200} />
        <h1>{API.Name}</h1>
      </div>
    );
  return <></>;
}
