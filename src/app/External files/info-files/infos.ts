import { IPhoto, ITeacher, ITechnology } from "./infos.model"
import { IFeedback } from "./infos.model"

export const teachers: ITeacher[]= [
    {
        tname: "Ghiath Serri",
        image: "images/Serri.png",
        description: "Serri is a senior full-stack developer and the lead trainer at our bootcamp. He is passionate about mentoring, enjoys debugging code, helping students achieve goals in software development. Serri is dedicated to shaping tomorrow's developers. Try to catch him during the break to learn from his vast experience!",
        jobTitle: "Lead Trainer",
        years: "10+",
        focused: "Mentoring passion",
    },
    {
        tname: "Riola Lama",
        image: "images/riola.png",
        description: "Riola is a computer science and engineering graduate who is passionate about technology. She combines her programming expertise with her love for teaching coding and mathematics at Codefactory, where she mentors tech enthusiasts and ensures they are supported in their learning.",
        jobTitle: "Trainer",
        years: "5+",
        focused: "Technology, Teaching",
    },
    {
        tname: "Dusan Grozdic",
        image: "images/dusan.png",
        description: "Dusan is a passionate full-stack web developer, and comes from Serbia. With a love for coding deeply ingrained in my DNA, I embark on every project with enthusiasm, dedication, and a knack for problem-solving. Dusan is our go-to guide for CSS questions, delivering info with dedication and humor.",
        jobTitle: "Trainer",
        years: "2+",
        focused: "Web development",
    },
    {
        tname: "Hassan Momen",
        image: "images/hassan.png",
        description: "Hassan Momen, from Aleppo, Syria. His passion for IT led him to Full Stack Web Development. Determined to empower others through coding, Hassan thrives on challenges, and removing obstacles from the way of students. Coding is his happy place.",
        jobTitle: "Trainer",
        years: "3+",
        focused: "IT and programming",
    },
]

export const feedbacks: IFeedback[]= [
    {
        stars: 5,
        fname: "Clara Ines",
        description: "Very friendly, patient and helpful trainers! The Frontend Developer evening course was very informative and fun, as there was no shortage of humor. In terms of content, not only the basics, but also important facts were conveyed. I can only recommend CodeFactory.",
    },
    {
        stars: 5,
        fname: "Leandra Sitte",
        description: "The courses are very well structured, you will learn a lot hands-on. In the beginning, all the new information can overwhelm you, but the coaches will help you if you have any questions. It helped me a lot to always have someone to turn to when I had problems or insecurities. I can only recommend the courses!",
    },
    {
        stars: 5,
        fname: "Christian",
        description: "Very friendly and patient trainers! The basic course took place with joy, competence and humor. In terms of content, they learned not only the basics, but also important facts that you need as a good developer. I can only recommend CodeFactory and I look forward to the next course!",
    },
    {
        stars: 5,
        fname: "Uros Petrovic",
        description: "I took the full stack course, got good basics and work habits, trained for a few more months and got a job. This course is very intensive but a great start for anyone who wants to do this work." 
    },
    {
        stars: 5,
        fname: "Maria Agneter",
        description: "Excellent price-performance ratio and excellent accessibility, pleasant staff and bright, clean halls. I highly recommend CodeFactory - amazing experience!",
    }
]

export const photos: IPhoto[]= [
    {
    photo: "images/fb2.jpg"
    },
    {
        photo: "images/fb3.jpg"
    },
    {
        photo: "images/fb4.jpg"
    },
    {
        photo: "images/fb5.jpg"
    },
    {
        photo: "images/fb6.jpg"
    }
]

export const technologies: ITechnology[]= [
    {
    photo: "logos/angular-144.png",
    lname: "Angular"
    },
    {
        photo: "logos/html5-144.png",
        lname: "HTML"
    },
    {
        photo: "logos/bootstrap-144.png",
        lname: "Bootstrap"
    },
    {
        photo: "logos/css3-144.png",
        lname: "CSS"
    },
    {
        photo: "logos/javascript-144.png",
        lname: "JavaScript"
    },
    {
        photo: "logos/typescript-144.png",
        lname: "TypeScript"
    },
    {
        photo: "logos/symfony-144.png",
        lname: "Sympfony"
        },
        {
            photo: "logos/python-144.png",
            lname: "Phyton"
        },
        {
            photo: "logos/php-logo-150.png",
            lname: "PHP"
        },
        {
            photo: "logos/mysql-144.png",
            lname: "MySQL"
        },

]
