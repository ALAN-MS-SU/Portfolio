import { Project } from "../../../Model/@Types";
export async function Tittle({ Name}: Pick<Project, "Name" >) {
  return (
    <div className="flex flex-col justify-center items-center my-3">
      <h1 className="xl:text-6xl lg:text-4xl md:text-3xl sm:text-xl text-[100%] text-text-primary text-center font-bold">
        {Name}
      </h1>
    </div>
  );
}
