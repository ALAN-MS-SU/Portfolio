import { projects } from "@/Constants";
import { Box } from "./Box";

export function ViewProjects() {
  return (
    <div className=" w-full p-10 grid-cols-3 row-auto grid justify-items-center">
      {projects.map((project, index) => {
        return <Box Project={project} key={index} ID={index} />;
      })}
    </div>
  );
}
