import { projects } from "@/Constants";
import { Box } from "./Box";

export function ViewProjects() {
  return (
    <div className=" w-full xl:p-10 gap-y-[50px] xl:pl-4 xl:pr-4 xl:grid-cols-3 lg:pl-0 lg:pr-0 lg:p-8 lg:grid-cols-2 sm:grid-cols-1 row-auto grid justify-items-center p-0 pt-8">
      {projects.map((project, index) => {
        return <Box Project={project} key={index} ID={index} />;
      })}
    </div>
  );
}
