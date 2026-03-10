"use client"
import { Project } from "../../../Model/@Types";
import Image from "next/image"
export function DescribeProject({ Describe,Photo,Mob }: Pick<Project, "Describe"|"Photo">&{Mob?:boolean}) {
  return (
    <div className="flex flex-row justify-center items-center mb-2">
        <div className={"max-w-400 mx-2 w-full flex lg:flex-row flex-col justify-center items-center gap-2"}>
        <div className={`lg:w-5/10 md:w-8/10 w-full lg:pb-8 sm:pb-2 pb-0 md:px-8 sm:px-2 px-0 p-8 ${Mob?"lg:h-[400px] h-[450px] ":"lg:h-[400px] md:h-[350px] sm:h-[300px] h-[250px]"} relative bg-bg rounded-xl flex flex-col justify-center items-center
         @container`} >
            <h2 className="min-[610px]:text-xl lg:text-lg text-[100%] font-bold absolute top-1 left-2 md:left-8">Visualização</h2>
            <div className={`${Mob?"@xl:w-2/6 @lg:w-3/8 @md:w-4/10 @sm:w-1/2 w-7/10 ":"w-full "} h-full  relative`}>
             <Image className={"rounded-2xl border-text-primary border-1 border-solid"} src={`/View/${Photo}`} alt={"Photo"} fill
             />
            </div>
        </div>
      <div className="lg:w-5/10 md:w-8/10 w-full md:p-8 p-4 lg:h-[400px] h-auto relative bg-bg rounded-xl">
        <h2 className="min-[610px]:text-xl text-lg mb-[20px] font-bold">
            Visão Geral
        </h2>
        <p className="text-text-primary xl:text-[100%] md:text-sm text-[80%] text-justify">
          &nbsp;&nbsp;{Describe}
        </p>
      </div>
        </div>
    </div>
  );
}
