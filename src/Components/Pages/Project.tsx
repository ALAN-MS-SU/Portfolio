import { projects } from "@/Constants";
import { DescribeProject, Tags, Tittle, Links } from "../Pieces";
import { Mobile, Web } from "@/Model/@Types";

export async function ProjectView({ ID }: { ID: number }) {
  const Project = projects[ID];
  const {
    Name,
    Describe,
    Cover,
    Repository,
    Type, 
      Photo,
    Language,
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
      <Tittle Name={Name} Cover={Cover} />
      <DescribeProject Mob={Type=="Mobile"?true:false} Photo={Photo} Describe={Describe} />
      <Tags
        Type={Type}
        Features={Features}
        Language={Language}
        Year={Year}
        Technology={Technology}
        API={API}
        Team={Team}
      />
      <Links Repository={Repository} URL={URL} Download={Download} />
    </>
  );
}
