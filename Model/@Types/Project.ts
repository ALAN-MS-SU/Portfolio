import { StaticImageData } from "next/image";

export class Project {
  Name: string;
  Describe: string;
  Photo: StaticImageData | string;
  constructor(Name: string, Describe: string, Photo: StaticImageData | string) {
    this.Name = Name;
    this.Describe = Describe;
    this.Photo = Photo;
  }
}
export class Web extends Project {
  URL?: string;
  constructor(
    Name: string,
    Describe: string,
    Photo: StaticImageData | string,
    URL?: string
  ) {
    super(Name, Describe, Photo);
    this.URL = URL;
  }
}
export class Mobile extends Project {
  Dowload?: string;
  constructor(
    Name: string,
    Describe: string,
    Photo: StaticImageData | string,
    Dowload?: string
  ) {
    super(Name, Describe, Photo);
    this.Dowload = Dowload;
  }
}
export class API extends Project {
  ViewTest?: string;
  constructor(
    Name: string,
    Describe: string,
    Photo: StaticImageData | string,
    ViewTest?: string
  ) {
    super(Name, Describe, Photo);
    this.ViewTest = ViewTest;
  }
}
