import { Mobile, Web } from "../Model/@Types";
import UserControl from "@/Assets/Photos/User-Control.png";
import Urna from "@/Assets/Photos/Urna.png";
import Calendar from "@/Assets/Photos/Etec-Calendar.png";
const TS = "TS";
const CS = "C#";
export const LengthDiv = 3;
export const projects: (Web | Mobile)[] = [
  {
    Name: "User Control",
    Describe:
      "\tProject to control user entry and exit, using back-end with JS/TS to do the connect with Postgresql database and to manage JWT tokens for level access control for each user. The Project has two level access user and admin, users can view other users and edit their own information, admins can perform all users functions and they can also remove other users from the list, but only if the other user isn't an admin.",
    Photo: UserControl,
    Language: TS,
    Type: "Web",
    Repository: "https://github.com/ALAN-MS-SU/User-Control/tree/main",
    Year: "2024",
    Technology: "NextJS",
    API: true,
    Team: false,
    URL: "https://usercontrol.vercel.app",
  },
  {
    Name: "Calendar",
    Type: "Mobile",
    Describe:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Photo: Calendar,
    Language: CS,
    Repository: "",
    Download:
      "https://github.com/ALAN-MS-SU/Etec-Calendar/releases/download/APK/Etec-Calendario.apk",
    Year: "2024",
    API: false,
    Team: false,
    Technology: ".NET MAUI",
  },
  {
    Name: "Urna",
    Type: "Web",
    Describe:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Photo: Urna,
    Language: TS,
    Repository: "",
    URL: "https://urna.vercel.app",
    Year: "2024",
    Technology: "NextJS",
    Team: false,
    API: true,
  }
];
