import { Project } from "../../../Model/@Types";
export async function DescribeProject({ Describe }: Pick<Project, "Describe">) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[1760px] mt-6 mb-6 border-4 border-text-secondary p-8 rounded-xl">
        <h2 className="text-4xl mb-[20px] font-bold">Description</h2>
        <p className="text-xl ">&nbsp;&nbsp;{Describe}</p>
      </div>
    </div>
  );
}
