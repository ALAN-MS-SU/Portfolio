import { User } from "../Model/@Types";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
export const GitUser: User = {
  Name: "Alan Martins",
  PhotoUrl: "https://avatars.githubusercontent.com/u/183554060?v=4",
  Describe:
    "Sou programador Full Stack, com foco em Back-End, mas tenho experiência em Front-End também. Estou sempre tentando melhorar minhas habilidades como programador, para melhorar os projetos em que eu participo, e melhorar como pessoa, para sempre ser um bom membro para qualquer equipe que esteja trabalhando junto.",
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
