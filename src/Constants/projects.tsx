import { Mobile, Web } from "../Model/@Types";
import UserControl from "@/Assets/Photos/User-Control.png";
import Urna from "@/Assets/Photos/Urna.png";
import Calendar from "@/Assets/Photos/Etec-Calendar.png";
const JS = "JS";
const CS = "C#";
export const LengthDiv = 3;

export const projects: (Web | Mobile)[] = [
  {
    Name: "User Control",
    Describe:
      "\tProject to control user entry and exit, using back-end with JS/TS to do the connect with Postgresql database and to manage JWT tokens for level access control for each user. The Project has two level access user and admin, users can view other users and edit their own information, admins can perform all users functions and they can also remove other users from the list, but only if the other user isn't an admin.",
    Photo: UserControl,
    Language: JS,
    Type: "Web",
    Repository: "https://github.com/ALAN-MS-SU/User-Control/tree/main",
    Year: "2024",
    Technology: "NextJS",
    API: true,
    Team: false,
    URL: "https://usercontrol.vercel.app",
  },
  {
    Name: "Calendar App",
    Type: "Mobile",
    Describe:
      "The project was developed for studies at Etec Paulistano. This Project is a simple calendar made for Etec Paulistano professors, where you can save calendars and dates related to the school. The app was made with .NET 8v and NET MAUI, using XAML for made the graphical interface and C# for the code behind, the app also includes a local storage for saving for your data.",
    Photo: Calendar,
    Language: CS,
    Repository: "https://github.com/ALAN-MS-SU/Etec-Calendar",
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
      "This project is a voting system for ranking movies inspired by games. It automatically updates when a new vote is registered for any movie and includes a graphic that visually displays the votes for each movie.",
    Photo: Urna,
    Language: JS,
    Repository: "https://github.com/ALAN-MS-SU/Urna",
    URL: "https://urna.vercel.app",
    Year: "2024",
    Technology: "NextJS",
    Team: false,
    API: true,
  },
];
export const Types = ["Mobile", "Web"];
export const Languages = ["JS", "C#"];
