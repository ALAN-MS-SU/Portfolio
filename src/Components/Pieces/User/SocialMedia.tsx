import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { LinkStyle } from "../Shared/Link";
export async function SocialMedia() {
  return (
    <section className="flex flex-col justify-center items-center gap-y-[5px] mb-[30px]">
      <h1 className="lg:text-5xl sm:text-4xl text-2xl font-bold relative">Social Media</h1>
      <div className="flex flex-row justify-center items-center gap-[px]">
        <LinkStyle Href="https://www.linkedin.com/in/alan-ms-su" Black>
          <FaLinkedin className="lg:text-[400%] sm:text-[300%] text-[200%] text-text-primary transition-colors ease-in cursor-pointer hover:text-primary" />
        </LinkStyle>
        <LinkStyle Href="https://github.com/ALAN-MS-SU/ALAN-MS-SU" Black>
          <FaGithubSquare className="lg:text-[400%] sm:text-[300%] text-[200%] text-text-primary transition-colors ease-in cursor-pointer hover:text-primary" />
        </LinkStyle>
      </div>
    </section>
  );
}
