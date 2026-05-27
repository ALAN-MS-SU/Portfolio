import { projects } from "@/Constants";
import { DescribeProject, Tags, Tittle, Links, LinkStyle } from "../Pieces";
import { Mobile, Web } from "@/Model/@Types";
import { FaArrowLeftLong } from "react-icons/fa6";
export async function ProjectView({ ID }: { ID: number }) {
  const Project = projects[ID];
  const {
    Name,
    Describe,
    Repository,
    Type,
    Photo,
    Features,
    Year,
    Technology,
    API,
    Team,
  } = Project;
  const URL = (Project as Web).URL;
  const Download = (Project as Mobile).Download;
  return (
    <>
      <LinkStyle
        Href={"/#Projects"}
        className="absolute md:w-auto w-full justify-center items-center transition-colors ease-in border-2 cursor-pointer lg:p-3 p-2 md:rounded-xl md:border-x-2 border-x-0 md:border-t-2 border-t-0 lg:text-xl text-md font-bold text-nowrap ButtonOff xl:top-5 xl:left-5 md:top-2 md:left-2 top-0 left-0"
      >
        <FaArrowLeftLong className=" w-full" />
      </LinkStyle>
      <Tittle Name={Name} />
      <DescribeProject
        Mob={Type == "Mobile" ? true : false}
        Photo={Photo}
        Describe={Describe}
      />
      <Tags
        Type={Type}
        Features={Features}
        Year={Year}
        Technology={Technology}
        API={API}
        Team={Team}
      />
      <Links Repository={Repository} URL={URL} Download={Download} />
    </>
  );
}
