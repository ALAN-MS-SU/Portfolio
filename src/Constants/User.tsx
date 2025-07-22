import { User } from "../Model/@Types";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
export const GitUser: User = {
  Name: "Alan Martins",
  PhotoUrl: "https://avatars.githubusercontent.com/u/183554060?v=4",
  Describe:
    "I'm a Full Stack Developer, with a focus on Back-End, but I also have experience in Front-End. I'm always trying to improve my dev and soft skills to improve the projects in which I participate and to become a better person.",
};
export const UserSocialMedia: { Icon: React.ReactNode; Link: string }[] = [
  {
    Icon: (
      <FaLinkedin className="lg:text-[400%] sm:text-[300%] text-[200%] text-text-primary transition-colors ease-in cursor-pointe hover:text-primary" />
    ),
    Link: "https://www.linkedin.com/in/alan-ms-su",
  },
  {
    Icon: (
      <FaGithubSquare className="lg:text-[400%] sm:text-[300%] text-[200%] text-text-primary transition-colors ease-in cursor-pointer hover:text-primary" />
    ),
    Link: "https://github.com/ALAN-MS-SU/ALAN-MS-SU",
  },
];
