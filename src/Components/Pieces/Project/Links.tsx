import { Mobile, Project, Web } from "@/Model/@Types";
import { LinkStyle } from "../Shared/Link";

export async function Links({
  Repository,
  URL,
  Download,
}: Pick<Project, "Repository"> & Pick<Web, "URL"> & Pick<Mobile, "Download">) {
  return (
    <div className="flex flex-row justify-center items-center gap-[100px] m-[20px]">
      <LinkStyle Href={Repository} Text="View Repository" />

      {URL && <LinkStyle Href={URL} Text="View Site" Black />}
      {Download && (
        <LinkStyle Href={Download} Text="Download APK" />
      )}
    </div>
  );
}
