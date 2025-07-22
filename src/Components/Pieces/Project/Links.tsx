import { Mobile, Project, Web } from "@/Model/@Types";
import { LinkStyle } from "../Shared/Link";

export async function Links({
  Repository,
  URL,
  Download,
}: Pick<Project, "Repository"> & Pick<Web, "URL"> & Pick<Mobile, "Download">) {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center md:gap-[100px] gap-[0px] md:gap-y-[0px] gap-y-[30px] mb-[20px]">
      <LinkStyle Href={Repository} Text="View Repository" Black />

      {URL && (
        <LinkStyle
          ExtraCss="lg:w-[200px] w-[170px]"
          Href={URL}
          Text="View Site"
          Black
        />
      )}
      {Download && (
        <LinkStyle
          ExtraCss="lg:w-[200px] w-[170px]"
          Href={Download}
          Text="Download APK"
        />
      )}
    </div>
  );
}
