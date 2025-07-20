import { Project } from "../../../Model/@Types";
export async function DescribeProject({ Describe }: Pick<Project, "Describe">) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="min-[1770px]:w-[1760px] min-[1610px]:w-[1600px] min-[1460px]:w-[1450px] min-[1210px]:w-[1200px] min-[810px]:w-[800px] min-[610px]:w-[600px] min-[410px]:w-[400px] w-[300px] mt-6 mb-6 border-4 border-text-secondary min-[610px]:p-8 p-4 rounded-xl text-justify">
        <h2 className="min-[1210px]:text-4xl min-[610px]:text-2xl text-lg mb-[20px] font-bold">
          Description
        </h2>
        <p className="min-[610px]:text-xl text-md ">&nbsp;&nbsp;{Describe}</p>
      </div>
    </div>
  );
}
