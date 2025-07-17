import { API, Mobile, Web } from "../../Model/@Types";
import UserControl from "@/Assets/Photos/User-Control.png";
import Urna from "@/Assets/Photos/Urna.png";
import Calendar from "@/Assets/Photos/Etec-Calendar.png";
const TS = <p className="text-3xl font-bold text-text-primary">TS</p>;
const CS = <p className="text-3xl font-bold text-text-primary">C#</p>;
export const projects: (Web | API | Mobile)[] = [
  {
    Name: "User Control",
    Describe:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Photo: UserControl,
    Language: TS,
    Type: "Web",
    Repository: "",
    URL: "",
  },
  {
    Name: "Calendar",
    Type: "Mobile",
    Describe:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Photo: Calendar,
    Language: CS,
    Repository: "",
    Dowload: "",
  },
  {
    Name: "Urna",
    Type: "Web",
    Describe:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Photo: Urna,
    Language: TS,
    Repository: "",
    URL: "",
  },
  // {
  //   Name: "API",
  //   Describe: "",
  //   Photo: "",
  //   ViewTest: "",
  // },
];
