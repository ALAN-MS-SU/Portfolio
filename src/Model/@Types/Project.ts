import { StaticImageData } from "next/image";

export class Project {
  Name: string;
  Describe: string;
  Cover: {
    Large: StaticImageData | string;
    Medium: StaticImageData | string;
    Small: StaticImageData | string;
  };
  Repository: string;
  Type: "Web" | "Mobile";
  Language: string;
  Year: string;
  Technology: string;
  API: boolean;
  Team: number | false;
  constructor(
    Name: string,
    Describe: string,
    Cover: {
      Large: StaticImageData | string;
      Medium: StaticImageData | string;
      Small: StaticImageData | string;
    },
    Repository: string,
    Type: "Web" | "Mobile",
    Language: string,
    Year: string,
    Technology: string,
    API: boolean,
    Team: number | false
  ) {
    this.Name = Name;
    this.Describe = Describe;
    this.Cover = Cover;
    this.Language = Language;
    this.Repository = Repository;
    this.Type = Type;
    this.Year = Year;
    this.Technology = Technology;
    this.API = API;
    this.Team = Team;
  }
}
export class Web extends Project {
  URL?: string;
  constructor(
    Name: string,
    Describe: string,
    Cover: {
      Large: StaticImageData | string;
      Medium: StaticImageData | string;
      Small: StaticImageData | string;
    },
    Language: string,
    Repository: string,
    Type: "Web" | "Mobile",
    Year: string,
    Technology: string,
    API: boolean,
    Team: number | false,
    URL?: string
  ) {
    super(
      Name,
      Describe,
      Cover,
      Repository,
      Type,
      Language,
      Year,
      Technology,
      API,
      Team
    );
    this.URL = URL;
  }
}
export class Mobile extends Project {
  Download?: string;
  constructor(
    Name: string,
    Describe: string,
    Cover: {
      Large: StaticImageData | string;
      Medium: StaticImageData | string;
      Small: StaticImageData | string;
    },
    Language: string,
    Repository: string,
    Type: "Web" | "Mobile",
    Year: string,
    Technology: string,
    API: boolean,
    Team: number | false,
    Download?: string
  ) {
    super(
      Name,
      Describe,
      Cover,
      Repository,
      Type,
      Language,
      Year,
      Technology,
      API,
      Team
    );
    this.Download = Download;
  }
}
