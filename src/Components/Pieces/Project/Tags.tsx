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
      <div className="mb-10 mt-10 p-8 border-4 w-[1760px] h-[400px] relative border-text-secondary rounded-xl">
        <h2 className="text-4xl mb-[20px] font-bold absolute">Information</h2>
        <div className="grid grid-cols-3 justify-items-center w-full h-full">
          <p className="text-4xl font-bold flex items-center">
            Language: {Language}
          </p>
          <p className="text-4xl font-bold flex items-center">
            Project Year: {Year}
          </p>
          <p className="text-4xl font-bold flex items-center">{Type} Project</p>
          <p className="text-4xl font-bold flex items-center">
            Technology: {Technology}
          </p>
          <p className="text-4xl font-bold flex items-center">
            API: {API ? "Yes" : "No"}
          </p>
          <p className="text-4xl font-bold flex items-center">
            {Team ? `Team size: ${Team}` : "Solo Project"}
          </p>
        </div>
      </div>
    </div>
  );
}
