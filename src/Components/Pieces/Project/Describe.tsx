"use client"
import { Project } from "../../../Model/@Types";
import Image from "next/image"
export function DescribeProject({ Describe,Photo,Mob }: Pick<Project, "Describe"|"Photo">&{Mob?:boolean}) {
  return (
    <div className="flex flex-row justify-center items-center mb-2">
        <div className={"max-w-400 w-full flex flex-row justify-center items-center gap-2"}>
        <div className={`w-5/10 p-8 h-[400px] relative bg-bg rounded-xl flex flex-col justify-center items-center`} >
            <h2 className="min-[610px]:text-xl text-lg font-bold absolute top-1 left-8">Visualização</h2>
            <div className={`${Mob?"w-1/4 ":"w-full"} h-full relative`}>
             <Image className={"rounded-2xl border-text-primary border-1 border-solid"} src={`/View/${Photo}`} alt={"Photo"} fill
             />
            </div>
        </div>
      <div className="w-5/10 p-8 min-[610px]:h-[400px] h-[400px] relative bg-bg rounded-xl">
        <h2 className="min-[610px]:text-xl text-lg mb-[20px] font-bold">
            Visão Geral
        </h2>
        <p className="text-text-primary text-md text-justify">
          &nbsp;&nbsp;{Describe}
        </p>
      </div>
        </div>
    </div>
  );
}
