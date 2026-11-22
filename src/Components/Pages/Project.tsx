"use client"
import { projects } from "@/Constants";
import { DescribeProject, Tags, Tittle, Links } from "../Pieces";
import { Mobile, Web } from "@/Model/@Types";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from "../Pieces/Shared/Button";
import { useRouter } from "next/navigation";
export function ProjectView({ ID }: { ID: number }) {
  const Project = projects[ID];
  const {
    Name,
    Describe,
    Repository,
    Photo,
    Features,
    Year,
    Technology,
    Team,
    Plat,
  } = Project;
  const URL = (Project as Web).URL;
  const Download = (Project as Mobile).Download;
  const Router = useRouter();
  return (
    <>
      <Button
        onClick={Router.back}
        className="absolute md:w-auto w-full justify-center outline-none items-center transition-colors ease-in border-2 cursor-pointer lg:p-3 p-2 md:rounded-xl md:border-x-2 border-x-0 md:border-t-2 border-t-0 lg:text-xl text-md font-bold text-nowrap ButtonOff xl:top-5 xl:left-5 md:top-2 md:left-2 top-0 left-0"
      >
        <FaArrowLeftLong className="w-full" />
      </Button>
      <Tittle Name={Name} />
      <DescribeProject
        Mob={Plat.some((plat) => plat == "app") ? true : false}
        Photo={Photo}
        Describe={Describe}
      />
      <Tags
        Features={Features}
        Year={Year}
        Technology={Technology}
        Plat={Plat}
        Team={Team}
      />
      <Links Repository={Repository} URL={URL} Download={Download} />
    </>
  );
}
