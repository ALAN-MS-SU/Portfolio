export class Project {
  Name: string;
  Describe: string;
  Cover: string;
  Repository?: string;
  Plat: ("app"|"api"|"site")[];
  Photo: string;
  Features: string[];
  Year: string;
  Technology: string[];
  Team: number | false;
  constructor(
    Name: string,
    Describe: string,
    Cover: string,
    Repository: string,
    Plat: ("app"|"api"|"site")[],
    Photo: string,
    Features: string[],
    Year: string,
    Technology: string[],
    Team: number | false,
  ) {
    this.Name = Name;
    this.Describe = Describe;
    this.Cover = Cover;
    this.Features = Features;
    this.Repository = Repository;
    this.Plat = Plat;
    this.Photo = Photo;
    this.Year = Year;
    this.Technology = Technology;
    this.Team = Team;
  }
}
export class Web extends Project {
  URL?: string;
  constructor(
    Name: string,
    Describe: string,
    Cover: string,
    Features: string[],
    Repository: string,
    Plat: ("app"|"api"|"site")[],
    Photo: string,
    Year: string,
    Technology: string[],
    Team: number | false,
    URL?: string,
  ) {
    super(
      Name,
      Describe,
      Cover,
      Repository,
      Plat,
      Photo,
      Features,
      Year,
      Technology,
      Team,
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
    Features: string[],
    Repository: string,
    Plat: ("app"|"api"|"site")[],
    Photo: string,
    Year: string,
    Technology: string[],
    Team: number | false,
    Download?: string,
  ) {
    super(
      Name,
      Describe,
      Cover,
      Repository,
      Plat,
      Photo,
      Features,
      Year,
      Technology,
      Team,
    );
    this.Download = Download;
  }
}
export interface FilterItems {
  languages: string[];
  Frameworks: string[];
  Types: string[];
  Databases: string[];
  Others: string[];
}
