export class Project {
  Name: string;
  Describe: string;
  Cover: string;
  Repository?: string;
  Type: "Web" | "Mobile";
  Photo: string;
  Language: string;
  Features: string[];
  Year: string;
  Technology: string[];
  API: boolean;
  Team: number | false;
  constructor(
    Name: string,
    Describe: string,
    Cover: string,
    Repository: string,
    Type: "Web" | "Mobile",
    Photo: string,
    Language: string,
    Features: string[],
    Year: string,
    Technology: string[],
    API: boolean,
    Team: number | false
  ) {
    this.Name = Name;
    this.Describe = Describe;
    this.Cover = Cover;
    this.Language = Language;
    this.Features = Features;
    this.Repository = Repository;
    this.Type = Type;
    this.Photo = Photo;
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
    Cover: string,
    Language: string,
    Features: string[],
    Repository: string,
    Type: "Web" | "Mobile",
    Photo: string,
    Year: string,
    Technology: string[],
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
      Photo,
      Language,
      Features,
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
    Cover: string,
    Language: string,
    Features: string[],
    Repository: string,
    Type: "Web" | "Mobile",
    Photo: string,
    Year: string,
    Technology: string[],
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
      Photo,
      Language,
      Features,
      Year,
      Technology,
      API,
      Team
    );
    this.Download = Download;
  }
}
