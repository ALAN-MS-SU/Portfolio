import { Project } from "../../../Model/@Types";
import {Table} from "@/Components/Pieces";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
export async function Tags({
  Type,
    Features,
  Year,
  Technology,
  API,
  Team,
}: Pick<
  Project,
  "Type" | "Year" | "Technology" | "API" | "Team" |"Features"
>) {
  
     

  return (
    <div className="flex flex-row justify-center items-center mb-5">
      <div className={"flex flex-row justify-center items-center gap-2 max-w-400 w-full"}>
      <div className="w-1/3 p-8 min-[610px]:h-[315px] h-[400px] relative bg-bg rounded-xl">
        <h2 className=" min-[610px]:text-xl text-lg font-bold absolute top-5 ">
          Informações
        </h2>
        <div className="grid min-[1460px]:grid-cols-2 grid-cols-1 justify-items-center w-full h-full">
          <p className="text-lg text-center font-bold flex items-center text-text-primary">
            Ano do projeto <br/>{Year}
          </p>
          <p className="min-[610px]:text-xl text-lg font-bold flex items-center text-text-primary">
            Projeto {Type} 
          </p>
          <p className="min-[610px]:text-xl text-lg font-bold flex flex-col justify-center items-center text-text-primary">
            {Team ? `Tamanho da equipe: ${Team}` : "Projeto solo"}
            <span>
              {Team ? <IoPeopleSharp className={"text-2xl text-yes"}/> : <IoPersonSharp className={"text-2xl text-yes"}/>}
            </span>
          </p>
          <p className="min-[610px]:text-xl text-lg font-bold flex flex-col justify-center items-center text-text-primary">
            API
            
            <span>
              {API ? <BiSolidLike className={"text-2xl text-yes"}/> : <BiSolidDislike className={"text-2xl text-no"}/>}
            </span>
          </p>
          
        </div>
        
      </div>

        <div className="w-1/3 p-8 min-[610px]:h-[315px] h-[400px] relative bg-bg rounded-xl">
          <h2 className=" min-[610px]:text-xl text-lg font-bold absolute top-5 ">
            Funcionalidades
          </h2>
          <ul className={"mt-5 ml-3.5 list-disc space-y-2"}>
          {Features.map((Feature, index) => {
            return <li className={`${Features.length <= 7?"text-md":"text-sm"} text-text-primary`} key={index}>
              {Feature}
            </li>
          })}
        </ul>
        </div>

        <div className="w-1/3 p-8 min-[610px]:h-[315px] h-[400px] relative bg-bg rounded-xl">
        <h2 className=" text-lg font-bold absolute top-1 ">
          Stack de Tecnologias
        </h2>
        <div className={"w-full flex flex-col items-center justify-center h-full"}>
         <Table Technologies={Technology}/>
        </div>
      </div>
      </div>
    </div>
  );
}
