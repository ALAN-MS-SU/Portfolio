import { Mobile, Web } from "../Model/@Types";
import UserControlSmall from "@/Assets/Photos/Cover/Small/User-Control.png";
import UserControlMedium from "@/Assets/Photos/Cover/Medium/User-Control.png";
import UserControlLarge from "@/Assets/Photos/Cover/Large/User-Control.png";
import UrnaSmall from "@/Assets/Photos/Cover/Small/Urna.png";
import UrnaMedium from "@/Assets/Photos/Cover/Medium/Urna.png";
import UrnaLarge from "@/Assets/Photos/Cover/Large/Urna.png";
import CalendarSmall from "@/Assets/Photos/Cover/Small/Etec-Calendar.png";
import CalendarMedium from "@/Assets/Photos/Cover/Medium/Etec-Calendar.png";
import CalendarLarge from "@/Assets/Photos/Cover/Large/Etec-Calendar.png";
import HackSmall from "@/Assets/Photos/Cover/Small/HackROM.png";
import HackMedium from "@/Assets/Photos/Cover/Medium/HackROM.png";
import HackLarge from "@/Assets/Photos/Cover/Large/HackROM.png";
const JS = "JS";
const CS = "C#";
export const LengthDiv = 3;

export const projects: (Web | Mobile)[] = [
  {
    Name: "User Control",
    Describe:
      "Project to control user entry and exit, using back-end with JS/TS to do the connect with Postgresql database and to manage JWT tokens for level access control for each user. The Project has two level access user and admin, users can view other users and edit their own information, admins can perform all users functions and they can also remove other users from the list, but only if the other user isn't an admin.",
    Cover: {
      Small: UserControlSmall,
      Medium: UserControlMedium,
      Large: UserControlLarge,
    },
    Language: JS,
    Type: "Web",
    Repository: "https://github.com/ALAN-MS-SU/User-Control/tree/main",
    Year: "2024",
    Technology: ["NextJS"],
    API: true,
    Team: false,
    URL: "https://usercontrol.vercel.app",
  },
  {
    Name: "Calendar App",
    Type: "Mobile",
    Describe:
      "The project was developed for studies at Etec Paulistano. This Project is a simple calendar made for Etec Paulistano professors, where you can save calendars and dates related to the school. The app was made with .NET 8v and NET MAUI, using XAML for made the graphical interface and C# for the code behind, the app also includes a local storage for saving for your data.",
    Cover: {
      Small: CalendarSmall,
      Medium: CalendarMedium,
      Large: CalendarLarge,
    },
    Language: CS,
    Repository: "https://github.com/ALAN-MS-SU/Etec-Calendar",
    Download:
      "https://github.com/ALAN-MS-SU/Etec-Calendar/releases/download/APK/Etec-Calendario.apk",
    Year: "2024",
    API: false,
    Team: false,
    Technology: [".NET MAUI"],
  },
  {
    Name: "Urna",
    Type: "Web",
    Describe:
      "This project is a voting system for ranking movies inspired by games. It automatically updates when a new vote is registered for any movie and includes a graphic that visually displays the votes for each movie.",
    Cover: {
      Small: UrnaSmall,
      Medium: UrnaMedium,
      Large: UrnaLarge,
    },
    Language: JS,
    Repository: "https://github.com/ALAN-MS-SU/Urna",
    URL: "https://urna.vercel.app",
    Year: "2024",
    Technology: ["NextJS"],
    Team: false,
    API: true,
  },
  {
    Name: "Hack Roms",
    Describe:
      "This project was made a long time ago. It's a Super Nintendo hack ROM site inspired by SMW Central. Here you can download and upload hack ROMs for any Super Nintendo game. The site was built with React, Express.js and a MySQL database, but the database was later replaced by PostgreSQL to slightly improve performance.",
    Cover: {
      Small: HackSmall,
      Medium: HackMedium,
      Large: HackLarge,
    },
    Language: JS,
    Type: "Web",
    Repository: "https://github.com/ALAN-MS-SU/hack-roms",
    Year: "2024",
    Technology: ["ReactJS", "ExpressJS"],
    API: true,
    Team: false,
    URL: "https://hackroms.vercel.app/",
  },
];
export const Types = ["Mobile", "Web"];
export const Languages = [JS, CS];
