import { Project } from "../../../Model/@Types";
export async function Tags({
  Type,
  Language,

  Year,
  Technology,
  API,
  Team,
}: Pick<
  Project,
  "Type" | "Language" | "Year" | "Technology" | "API" | "Team"
>) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="min-[1770px]:w-[1760px] min-[1610px]:w-[1600px] min-[1460px]:w-[1450px] min-[1210px]:w-[1200px] min-[810px]:w-[800px] min-[610px]:w-[600px] min-[410px]:w-[400px] w-[300px] md:mb-10 mb-4 mt-10 p-8 border-4 min-[610px]:h-[400px] h-[500px] relative border-text-secondary rounded-xl">
        <h2 className="min-[1210px]:text-4xl min-[610px]:text-xl text-lg top-[10px] left-[10px] font-bold absolute">
          Information
        </h2>
        <div className="grid min-[1460px]:grid-cols-3 min-[610px]:grid-cols-2 grid-cols-1 justify-items-center w-full h-full">
          <p className="min-[1210px]:text-4xl min-[610px]:text-xl text-lg font-bold flex items-center">
            Language: {Language}
          </p>
          <p className="min-[1210px]:text-4xl min-[610px]:text-xl text-lg font-bold flex items-center">
            Project Year: {Year}
          </p>
          <p className="min-[1210px]:text-4xl min-[610px]:text-xl text-lg font-bold flex items-center">
            {Type} Project
          </p>
          <p className="min-[1210px]:text-4xl min-[610px]:text-xl text-lg font-bold flex items-center">
            Technology: {Technology}
          </p>
          <p className="min-[1210px]:text-4xl min-[610px]:text-xl text-lg font-bold flex items-center">
            API: {API ? "Yes" : "No"}
          </p>
          <p className="min-[1210px]:text-4xl min-[610px]:text-xl text-lg font-bold flex items-center">
            {Team ? `Team size: ${Team}` : "Solo Project"}
          </p>
        </div>
      </div>
    </div>
  );
}
