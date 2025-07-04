import { API, Mobile, Web } from "../../Model/@Types";
import UserControl  from "@/Assets/Photos/User-Control.png"
import Urna from "@/Assets/Photos/Urna.png"
import Calendar from "@/Assets/Photos/Etec-Calendar.png"
export const projects: (Web | API | Mobile)[] = [
  {
    Name: "Web",
    Describe: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Photo: UserControl,
    URL: "",
  },
  {
    Name: "Mobile",
    Describe: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Photo: Calendar,
    Dowload: "",
  },
  {
    Name: "Web",
    Describe: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Photo: Urna,
    URL: "",
  },
  // {
  //   Name: "API",
  //   Describe: "",
  //   Photo: "",
  //   ViewTest: "",
  // },
];
