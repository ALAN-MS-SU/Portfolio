import { User } from "../Model/@Types";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export const GitUser: User = {
  Name: "Alan Martins",
  PhotoUrl: "https://avatars.githubusercontent.com/u/183554060?v=4",
  Describe:
      "Sou um Desenvolvedor Full Stack, com foco em Back-End, mas também possuo experiência em Front-End. Estou sempre buscando melhorar minhas habilidades técnicas e interpessoais para evoluir os projetos dos quais participo e também me tornar uma pessoa melhor.",
};

export const UserSocialMedia: { Icon: React.ReactNode; Link: string }[] = [
  {
    Icon: (
        <FaLinkedin className="lg:text-[400%] sm:text-[300%] text-[200%] text-text-primary transition-colors ease-in cursor-pointer hover:text-primary" />
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