import { Project } from "../../../Model/@Types";
export async function Tittle({ Name}: Pick<Project, "Name" >) {
  return (
    <div className="flex flex-col justify-center items-center my-3">
      <h1 className="md:text-6xl text-3xl text-text-primary text-center font-bold">
        {Name}
      </h1>
    </div>
  );
}
