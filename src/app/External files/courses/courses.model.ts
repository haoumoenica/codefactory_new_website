export interface IThemes {
  name: string;
  image: string;
  course1: string;
  logo1: string;
  course2: string;
  logo2: string;
  course3: string;
  logo3: string;
  course4: string;
  logo4: string;
  courseQtty: number;
  id: number;
}

export interface ICourses {
  id: number;
  name: string;
  price: number;
  description: string;
  dates: string[];
  advantages: string[];
  keyfacts: string[];
  requirements: string;
  chaptersFrontend: string[];
  chaptersBackend: string[];
  whysection: string;
  jobsection: string;
  chapters: string[];
  infoUrl: string;
  applyUrl: string;
  joke: string
}
