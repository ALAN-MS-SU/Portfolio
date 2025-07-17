import { StaticImageData } from "next/image";

export class Project {
  Name: string;
  Describe: string;
  Photo: StaticImageData | string;
  Repository: string;
  Type: "Web" | "API" | "Mobile";
  Language: React.ReactNode;
  constructor(
    Name: string,
    Describe: string,
    Photo: StaticImageData | string,
    Repository: string,
    Type: "Web" | "API" | "Mobile",
    Language: React.ReactNode
  ) {
    this.Name = Name;
    this.Describe = Describe;
    this.Photo = Photo;
    this.Language = Language;
    this.Repository = Repository;
    this.Type = Type;
  }
}
export class Web extends Project {
  URL?: string;
  constructor(
    Name: string,
    Describe: string,
    Photo: StaticImageData | string,
    Language: React.ReactNode,
    Repository: string,
    Type: "Web" | "API" | "Mobile",
    URL?: string
  ) {
    super(Name, Describe, Photo, Repository, Type, Language);
    this.URL = URL;
  }
}
export class Mobile extends Project {
  Dowload?: string;
  constructor(
    Name: string,
    Describe: string,
    Photo: StaticImageData | string,
    Language: React.ReactNode,
    Repository: string,
    Type: "Web" | "API" | "Mobile",
    Dowload?: string
  ) {
    super(Name, Describe, Photo, Repository, Type, Language);
    this.Dowload = Dowload;
  }
}
export class API extends Project {
  ViewTest?: string;
  constructor(
    Name: string,
    Describe: string,
    Photo: StaticImageData | string,
    Language: React.ReactNode,
    Repository: string,
    Type: "Web" | "API" | "Mobile",
    ViewTest?: string
  ) {
    super(Name, Describe, Photo, Repository, Type, Language);
    this.ViewTest = ViewTest;
  }
}
