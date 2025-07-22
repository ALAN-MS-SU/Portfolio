import { UserSocialMedia } from "@/Constants";
import { LinkStyle } from "@/Components/Pieces";
export async function SocialMedia() {
  return (
    <section className="flex flex-col justify-center items-center gap-y-[5px] mb-[30px]">
      <h1 className="lg:text-5xl sm:text-4xl text-2xl font-bold relative">
        Social Media
      </h1>
      <div className="flex flex-row justify-center items-center gap-[px]">
        {UserSocialMedia.map((Media, index) => {
          return (
            <LinkStyle Href={Media.Link} Black key={index}>
              {Media.Icon}
            </LinkStyle>
          );
        })}
      </div>
    </section>
  );
}
