import { Icompanies, Icourse } from "./news.model";
import { Ievent } from "./news.model";


export let courses: Icourse[] = [
  {
    cName: "Python introduction course",
    duration: "4 weeks",
    image: "./images/python-course.png",
    level: "Beginners",
    price: 2500,
    available: false,
    link: "/details/28"
  }, {
    cName: "Data Analysis & Visualization course",
    duration: "5 weeks",
    image: "./images/Data-analysis.png",
    level: "Medium",
    price: 3500,
    available: true,
    link: "/details/29"
  }
];

export let events: Ievent[] = [
  {
    eName: "Nordic Cyber Summit",
    date: "16.05.2024",
    info: "The Nordic Cyber Summit is a premier event focused on cybersecurity in the Nordic region. It gathers industry leaders, experts, and policymakers to discuss the latest threats, innovations, and strategies in cybersecurity. The summit features keynote speeches, panel discussions, and networking opportunities to foster collaboration and knowledge sharing.",
    available: false,
  }, {
    eName: "Ai & Tech Networking",
    date: "12.08.2024",
    info: "The AI & Tech Networking event brings together professionals and enthusiasts in artificial intelligence and technology. Participants engage in discussions, share insights, and explore innovations in AI and tech industries. The event features keynote speakers, panel discussions, and networking sessions, fostering collaboration and knowledge exchange among attendees.",
    available: true,
  }, {
    eName: "Carreers in tech",
    date: "20.10.2024",
    info: "Careers in tech encompass a wide range of roles, including software development, cybersecurity, data science, and IT management. Professionals in these fields drive innovation, solve complex problems, and support technological infrastructure. Opportunities for growth and advancement are abundant, with continuous learning and adaptation to emerging technologies being key to success.",
    available: true,
  },];


export let companies: Icompanies[] = [
  {
    image: '/logos/microsoft-144.png'
  },
  {
    image: '/logos/sap-144.png'
  },
  {
    image: '/logos/aws-144.png'
  }
];