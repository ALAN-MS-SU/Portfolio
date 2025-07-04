import { projects } from "@/Constants";
import { Box } from "./Box";

export function ViewProjects() {
  return (
    <div className=" w-full p-10 grid-cols-3 row-auto grid justify-items-center">
      {projects.map((project, index) => {
        if ("URL" in project) return <Box Web={project} key={index} />;
        if ("Dowload" in project) return <Box Mobile={project} key={index} />;
        if ("ViewTest" in project) return <Box API={project} key={index} />;
        return <></>;
      })}
    </div>
  );
}
