"use client"
import Image from "next/image";
import { Mobile, Web, API } from "../../../../Model/@Types";
import { Button } from "../Shared/Button";
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
      <div className="overflow-hidden w-[450px] h-[400px] border-2 border-secondary flex flex-col items-center justify-between bg-linear-to-r/srgb from-transparent to-teal-transparent rounded-2xl pb-4">
        <Image className="w-[100%] h-[150px]" src={Web.Photo} alt="Photo" />
        <h1 className="font-semibold text-text-secondary text-2xl">
          {Web.Name}
        </h1>
        <p className="text-justify pl-3 pr-3 text-sm">{Web.Describe}</p>
        <Button Href="./" Text="Web Site" onClick={()=>{}}/>
      </div>
    );
  if (Mobile)
    return (
      <div className="overflow-hidden w-[450px] h-[400px] border-2 border-secondary flex flex-col items-center gap-5 bg-linear-to-r/srgb from-transparent to-teal-transparent rounded-2xl">
        <Image className="w-[100%] h-[150px]" src={Mobile.Photo} alt="Photo" />
        <h1 className="font-semibold text-text-secondary text-2xl">
          {Mobile.Name}
        </h1>
        <p className="text-justify pl-3 pr-3 text-sm">{Mobile.Describe}</p>
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
