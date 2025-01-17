import { ICourses } from './courses.model';

export let themes = [
  {
    name: 'Frontend',
    image: './images/frontend-image.png',
    course1: 'Frontend Developer - Intensive',
    logo1: './logos/FEcourse.png',
    course2: 'Frontend Developer Evening Course',
    logo2: './logos/FEcourse.png',
    course3: 'Basic course HTML/CSS',
    logo3: './logos/html5-144.png',
    course4: 'Basic course JavaScript',
    logo4: './logos/css3-144.png',
    courseQtty: 4,
    id: 1,
  },
  {
    name: 'Backend',
    image: './images/backend-image.png',
    course1: 'Backend Developer - Intensive',
    logo1: './logos/FEcourse.png',
    course2: '',
    logo2: '',
    course3: '',
    logo3: '',
    course4: '',
    logo4: '',
    courseQtty: 1,
    id: 2,
  },
  {
    name: 'Fullstack',
    image: './images/fullstack-image.png',
    course1: 'Fullstack Developer - Intensive',
    logo1: './logos/FEcourse.png',
    course2: 'Fullstack Developer Evening course',
    logo2: './logos/FEcourse.png',
    course3: 'string',
    logo3: '',
    course4: 'string',
    logo4: '',
    courseQtty: 2,
    id: 3,
  },
];

export const courses: ICourses[] = [
  {
    id: 21,
    name: 'Full Stack Evening Course',
    price: 5490,
    description: `Are you passionate about programming and design? Do you dream of becoming a Full Stack Web Developer but struggle to find the time and the right format to learn while balancing other obligations like your job? Look no further! Our new part-time evening Full Stack Developer course is the perfect solution for you!
        Our comprehensive curriculum covers everything from the basics of HTML, CSS, PHP, MYSQL, and JavaScript to more advanced topics such as responsive design and framework libraries. With our experienced instructors and hands-on approach, you'll start coding and building real-world projects from day one`,
    dates: ['Start: Monday, 20th January 2025'],
    advantages: [],
    keyfacts: [
      'Duration: ~8 months',
      'Language: English',
      'Location: online or onsite',
      'Fee: € 5.490,-',
      'Level: beginners and advanced',
    ],
    requirements: `The Full Stack Web Developer evening course requires motivation and a willingness to learn. Good basic English knowledge is essential, but previous knowledge in HTML/CSS or JavaScript is not necessary (though it can help). A laptop with a working microphone and headphones are recommended`,
    chaptersFrontend: [],
    chaptersBackend: [],
    whysection: '',
    jobsection: '',
    chapters: [],
    infoUrl: 'https://codefactory.wien/en/fullstack-evening-course/',
    applyUrl:
      'https://codefactory.wien/en/registration-full-stack-developer-evening-course/',
    joke: "Once done with this course, your future colleagues will ask you to fix the printer.",
  },
  {
    id: 22,
    name: 'Frontend Developer Evening Course',
    price: 3490,
    description: `Are you passionate about programming and design? Do you dream of becoming a Frontend Web Developer but struggle to find the time and the right format to learn while balancing other obligations like your job? Look no further! Our new part-time evening Frontend Developer course is the perfect solution for you!
        Our comprehensive curriculum covers everything from the basics of HTML, CSS, and JavaScript to more advanced topics such as responsive design and framework libraries. With our experienced instructors and hands-on approach, you'll start coding and building real-world projects from day one`,
    dates: ['Start: Monday, 20th January 2025'], 
    advantages: [],
    keyfacts: [
      'Duration: 14 weeks',
      'Language: English',
      'Location: online or onsite',
      'Times: Monday, Wednesday, Friday 6 p.m. to 9 p.m. with attendance online via Zoom',
      'Fee: € 3490,-',
      'Level: beginners and advanced',
    ],
    requirements: `The Frontend Web Developer evening course requires motivation and a willingness to learn. Good basic English knowledge is essential, but previous knowledge in HTML/CSS or JavaScript is not necessary (though it can help). A laptop with a working microphone and headphones are recommended`,
    chaptersFrontend: [],
    chaptersBackend: [],
    whysection: '',
    jobsection: '',
    chapters: [],
    infoUrl:
      'https://codefactory.wien/en/frontend-web-developer-evening-course/',
    applyUrl:
      'https://codefactory.wien/en/registration-frontend-developer-evening-course/',
    joke: "Your final boss on this journey is the product designer.",
  },
  {
    id: 23,
    name: 'Full Stack Web Developer',
    price: 4990,
    description: `The CodeFactory Full Stack Web Developer training course prepares you for your versatile career as a Junior Web Developer. From back-end to front-end programming languages and frameworks you will learn how to use the most popular programs, such as Angular, PHP, HTML, CSS and JavaScript.`,
    dates: [],
    advantages: [
      'Learn coding in less than 4 months',
      'Be job-ready immediately after completing your training',
      'Secure job opportunities by gaining highly demanded IT skills',
      'Gain practical experience by working on real projects',
    ],
    keyfacts: [
      'Duration: 16 weeks',
      'Language: English/German',
      'Dates: 13.05. - 29.08.2024',
      'Location: CodeFactory, Kettenbrückengasse 23/2/12, 1050 Vienna or online',
      'Times: Monday to Thursday 9 a.m. to 4 p.m. @ CodeFactory plus tasks with free time allocation, project work',
      'Fee: € 4.990,-',
      'Level: beginners** and advanced',
    ],
    requirements: `You are motivated to work in a team and have the ability to learn independently. Our trainers speak German, but the lessons are held in English. For this reason you should have a good basic understanding of English. Your own laptop, ideally with an SSD hard drive and at least 4 GB RAM, is recommended. However, we can also provide a rental laptop if required.`,
    chaptersFrontend: [
      'HTML5',
      'CSS',
      'JavaScript',
      'Version Control (Git -GitHub)',
    ],
    chaptersBackend: [
      'PHP',
      'SQL (MySQL)',
      'SCRUM & Requirements Engineering',
      'AJAX',
    ],
    whysection: `The performance of IT is what makes competitiveness and innovation
        possible for companies in all industries. Especially since the DSGVO
        came into force, every company must deal professionally with the
        protection of its customer data. Despite the demand, IT employees are
        still desperately sought after.`,
    jobsection:
      'Thanks to the intensive and practice-oriented CodeFactory training format, which prepares our graduates for an entry as a Junior Developer in just under 4 months, you will be qualified for an entry-level position as a Junior Developer for both the front-end and the back-end area within a very short time',
    chapters: [],
    infoUrl: 'https://codefactory.wien/en/full-stack-web-developer-en/',
    applyUrl:
      'https://codefactory.wien/en/registration-full-stack-web-developer-en/',
    joke: "Once done with this course, your future colleagues will ask you to fix the printer.",
  },
  {
    id: 24,
    name: 'Frontend Developer',
    price: 3290,
    description: `The CodeFactory Frontend Web Developer course prepares you for your versatile use as a Junior Frontend Web Developer. It is the first module of the fullstack Web Developer course, which you can also take separately. If desired, a continuation of the training in the backend part is possible.
        In this course you will learn the most common programming languages and frameworks, from HTML, CSS, and JavaScript to the sophisticated Angular Framework. Furthermore you will learn important basics in testing and project management`,
    dates: [],
    advantages: [
      'Learn coding in 2 months',
      'Be job-ready immediately after completing your training',
      'Secure job opportunities by gaining highly demanded IT skills',
      'Experience an innovative training format that is unique in Austria and based on US coding schools',
      'Gain practical experience by working on real projects',
    ],
    keyfacts: [
      'Duration: 8 weeks',
      'Language: Englisch/German',
      'Dates: 13.05. - 04.07.2024 and 02.09. - 25.10.2024',
      'Times: Monday to Thursday 9 a.m. to 4 p.m. @ CodeFactory plus tasks with free time allocation, project work Friday or Saturday as desired',
      'Fee: € 3.290,-',
      'Level: beginners** and advanced',
    ],
    requirements: `You are motivated to work in a team and have the ability to learn independently. As a beginner without any previous knowledge, you have either attended our basic courses JavaScript and HTML/CSS or you bring along this previous knowledge. Our Full Stack course is modular and consists of 8 weeks of front-end and 7 weeks of back-end lessons. If you are already fit or have already completed training, you can, of course, decide to attend only one of the two modules`,
    chaptersFrontend: [
      'HTML5',
      'CSS',
      'JavaScript',
      'Version Control (Git -GitHub)',
      'Angular',
      'TypeScript',
    ],
    chaptersBackend: [],
    whysection: `The performance of IT is what makes competitiveness and innovation possible for companies in all industries. Especially since the DSGVO came into force, every company must deal professionally with the protection of its customer data.
        Despite the demand, IT employees are still desperately sought after. The professional association of management consulting/information technology (UBIT) informs that in 2018 alone there will be a shortage of approx. 10,000 IT specialists in Austria. This shortage of specialists and generalists with IT skills will be exacerbated by access restrictions to universities and their high drop-out rates of over 50%`,
    jobsection: `Thanks to the intensive and practice-oriented CodeFactory training format, which prepares our graduates for an entry as a Junior Developer in just under 4 months, you will be qualified for an entry-level position as a Junior Developer for both the front-end and the back-end area within a very short time. Our completion rates confirm the success of the CodeFactory concept: 75% of our graduates found a new job within 6 months`,
    chapters: [],
    infoUrl: 'https://codefactory.wien/en/frontend-developer-en/',
    applyUrl: 'https://codefactory.wien/en/registration-frontend-developer-en/',
    joke: "Your final boss on this journey is the product designer.",
  },
  {
    id: 25,
    name: 'Backend Developer',
    price: 3290,
    description: `The CodeFactory Backend Web Developer course prepares you for your versatile use as a Junior Backend Web Developer. It is the second module of the fullstack Web Developer course, which you can also take separately. If desired, you can complete the training in the frontend part of a following course.
        In this course you will learn the most common programming languages and frameworks, from SQL databases, PHP to the sophisticated Symfony framework. Furthermore you will learn important basics in testing and agile project management`,
    dates: [],
    advantages: [
      'Learn coding in less than 2 months',
      'Be job-ready immediately after completing your training',
      'Secure job opportunities by gaining highly demanded IT skills',
      'Experience an innovative training format that is unique in Austria and based on US coding schools',
      'Gain practical experience by working on real projects',
    ],
    keyfacts: [
      'Duration: 8 weeks',
      'Language: Englisch/German',
      'Dates: 11.03. - 02.05.2024',
      'Times: Monday to Thursday 9 a.m. to 4 p.m. @ CodeFactory plus tasks with free time allocation, project work Friday or Saturday as desired',
      'Fee: € 3.290,-',
      'Level: beginners** and advanced',
    ],
    requirements: `You are motivated to work in a team and have the ability to learn independently. As a beginner without any previous knowledge, you have either attended our basic courses JavaScript and HTML/CSS or you bring along this previous knowledge. Our Full Stack course is modular and consists of 8 weeks of front-end and 7 weeks of back-end lessons. If you are already fit or have already completed training, you can, of course, decide to attend only one of the two modules.`,
    chaptersFrontend: [],
    chaptersBackend: [
      'SQL (MySQL)',
      'SCRUM & Requirements Engineering',
      'PHP',
      'AJAX',
      'Symfony PHP framework',
    ],
    whysection: `The performance of IT is what makes competitiveness and innovation possible for companies in all industries. Especially since the DSGVO came into force, every company must deal professionally with the protection of its customer data.
        Despite the demand, IT employees are still desperately sought after. The professional association of management consulting/information technology (UBIT) informs that in 2018 alone there will be a shortage of approx. 10,000 IT specialists in Austria. This shortage of specialists and generalists with IT skills will be exacerbated by access restrictions to universities and their high drop-out rates of over 50%.`,
    jobsection: `Thanks to the intensive and practice-oriented CodeFactory training format, which prepares our graduates for an entry as a Junior Developer in just under 4 months, you will be qualified for an entry-level position as a Junior Developer for both the front-end and the back-end area within a very short time. Our completion rates confirm the success of the CodeFactory concept: 75% of our graduates found a new job within 6 months`,
    chapters: [],
    infoUrl: 'https://codefactory.wien/en/backend-developer-en/',
    applyUrl: 'https://codefactory.wien/en/registration-backend-developer-en/',
    joke: "No jokes here, your future client requirements are the joke!",
  },
  {
    id: 26,
    name: 'Basic Course HTML/CSS',
    price: 290,
    description: `The CodeFactory Basic Course HTML / CSS Teaches you the building blocks of HTML and CSS, with which you can create and design your first website from scratch. Learning HTML and CSS is extremely important not only for developers.
        Thinking like a developer and understanding the technical terms and “language” of programmers is especially important for those who work with developers or want to communicate with them for projects`,
    dates: [],
    advantages: [
      'Learn the basic building blocks of Web Development',
      'Experience for yourself how exciting and easy programming can be',
      'Get ready for intensive training like the Fullstack Web Developer course',
      'Benefit from experienced, friendly trainers who care about your personal progress',
      'Experience exchange and motivation in peer groups',
    ],
    keyfacts: [
      'Duration: 2 days',
      'Language: Englisch',
      'Times: 2 days 9:00-15:00 (1 hour lunch break) @ CodeFactory or Online',
      'Fee: € 290,-',
      'Level: beginners',
    ],
    requirements: `You are motivated to work in a team and have the ability to learn independently. You can communicate with your course colleagues in English (school English is more than sufficient).
        Your own computer is recommended. However, we can also provide a loan laptop if required. To prepare for the course you can install a text editor for programming (we use Sublime Text 3) and a modern browser (we recommend Google Chrome).`,
    chaptersFrontend: [],
    chaptersBackend: [],
    whysection: ``,
    jobsection: ``,
    chapters: [
      'The structure of HTML documents',
      'HTML tags such as headlines, text, images and videos and much more',
      'Make pages usable for users with limitations through HTML5 elements like semantic tags',
      'Modern styling of web pages with the latest elements of CSS3',
      'Best practices in programming and structuring Web Development projects',
    ],
    infoUrl: 'https://codefactory.wien/en/basiskurs-html-css-en/',
    applyUrl: 'https://codefactory.wien/en/registration-basiskurs-html-css-en/',
    joke: "After this course, you'll realize that every movie hacking scene is just plain HTML.",
  },
  {
    id: 27,
    name: 'Basic course JavaScript',
    price: 290,
    description: `The CodeFactory JavaScript Basic Course teaches you the first steps in programming with JavaScript, which you can use to make websites or web applications more exciting and interactive. Learning JavaScript is extremely important not only for developers.
        Thinking like a developer and understanding the technical terms and “language” of programmers is especially important for those who want to work with developers or communicate with them for projects.`,
    dates: [],
    advantages: [
      'Learn the basic building blocks of Web Development',
      'Experience for yourself how exciting and easy programming can be',
      'Get ready for intensive training like the Fullstack Web Developer course',
      'Benefit from experienced, friendly trainers who care about your personal progress',
      'Experience exchange and motivation in peer groups',
    ],
    keyfacts: [
      'Duration: 2 days',
      'Language: Englisch',
      'Times: 2 days 9:00-15:00 (1 hour lunch break) @ CodeFactory or Online',
      'Fee: € 290,-',
      'Level: beginners',
    ],
    requirements: `You are motivated to work in a team and have the ability to learn independently. You can communicate with your course colleagues in English (school English is more than sufficient).
        No previous programming knowledge is necessary, but knowledge of HTML and CSS can make your projects even more impressive. You can learn this for example in our basic course HTML / CSS!`,
    chaptersFrontend: [],
    chaptersBackend: [],
    whysection: ``,
    jobsection: ``,
    chapters: [
      'The basic elements of JavaScript (data types, variables, functions, loops and conditional statements and much more)',
      'How to combine JavaScript with HTML',
      'How to use JavaScript to program interactive applications such as simple games',
      'Best practices in programming and structuring Web Development projects',
      'Technical terms and communication between and with programmers',
      'Problem solving and research for programmers',
    ],
    infoUrl: 'https://codefactory.wien/en/basiskurs-javascript-en/',
    applyUrl:
      'https://codefactory.wien/en/registration-basiskurs-javascript-en/',
    joke: "After this course, you'll realize that 'undefined' is not just a variable but a way of life.",
  },
  {
    id: 28,
    name: 'Python Programming',
    price: 690,
    description: `The CodeFactory Python Developer course takes you the first steps on your journey to become a Python developer. Learn to think like an IT specialist - an essential skill in our modern digital world using the popular programming language Python.`,
    dates: ['Start: Monday, 20th January 2025'],
    advantages: [
      'Learn the basics of Python in just 1 week!',
      'Experience an innovative course format unique in Austria, based on US-American coding schools',
      'Gain practical experience, by working on exciting projects',
    ],
    keyfacts: [
      'Duration: 5 days',
      'Language: English',
      'Times: Monday to Friday 9 a.m. to 4 p.m. @ CodeFactory plus tasks with free time allocation',
      'Course fee: € 690,-',
      'Level: beginners',
    ],
    requirements: `You are motivated to work in a team and have the ability to learn independently. As a beginner without any previous knowledge, you are familiar with working on the computer and concepts such as folder structures.
            Your own laptop, ideally with an SSD hard drive and at least 4 GB RAM, is recommended. However, we can also provide a rental laptop if required.`,
    chaptersFrontend: [],
    chaptersBackend: [],
    whysection: '',
    jobsection: '',
    chapters: [
      'Working in the Jupyter Notebook environment',
      'Python basics, including syntax and mathematical operators, variables and data types',
      'Application of Strings and Regex',
      'Create and edit Python lists, tuples, sentences and dictionaries',
      'Using functions and handling exceptions',
    ],
    infoUrl: 'https://codefactory.wien/en/python-programming-en/',
    applyUrl: 'https://codefactory.wien/en/registration-python-programming-en/',
    joke: "A real-life Python is half as scary than the programming language",
  },
  {
    id: 29,
    name: 'Data Analysis & Visualization',
    price: 890,
    description: `Embark on a 5-day journey into the heart of data analysis and visualization with Python programming! This intensive course covers the basics from Jupyter Notebook to Pandas DataFrame manipulation and statistical analysis.
        Throughout the course, you'll delve into descriptive and explorative data analysis, learn to visualize data using Matplotlib and Numpy, and even dip your toes into machine learning basics.
        But it's not just theory—you'll get hands-on experience through exercises and projects, ensuring you're ready to tackle real-world data challenges`,
    dates: ['Start: Monday, 20th January 2025'],
    advantages: [],
    keyfacts: [
      'Duration: 5 days',
      'Language: English',
      'Dates: 01.07. - 05.07.2024',
      'Location: CodeFactory, Kettenbrückengasse 23/2/12, 1050 Vienna or online',
      'Times: Monday to Friday 9 a.m. to 4 p.m. @ CodeFactory or Online',
      'Fee: € 890,-',
      'Level: intermediate and advanced',
    ],
    requirements: `Previous knowledge is necessary either trough our Python Programming course or previous Python knowledge. Good basic English knowledge is essential. A laptop with a working microphone and headphones are recommended`,
    chaptersFrontend: [],
    chaptersBackend: [],
    whysection: '',
    jobsection: '',
    chapters: [
      'Refreshing of Python basics',
      'Jupyter Notebook',
      'Pandas DataFrame',
      'Descriptive and Exploratory Data Analysis',
      'Statistical Data Analysis',
      'Data Visualization',
      'Matplotlib and Numpy',
    ],
    infoUrl: 'https://codefactory.wien/en/data-analysis-visualization/',
    applyUrl:
      'https://codefactory.wien/en/registration-data-analysis-visualization/',
    joke: "Just make sure you don't go into random forests alone at night!",
  },
];

export const upcomingCourses: ICourses[] = [
  {
    id: 28,
    name: 'Python Programming',
    price: 690,
    description: `The CodeFactory Python Developer course takes you the first steps on your journey to become a Python developer. Learn to think like an IT specialist - an essential skill in our modern digital world using the popular programming language Python.`,
    dates: ['Start: Monday, 20th January 2025'],
    advantages: [
      'Learn the basics of Python in just 1 week!',
      'Experience an innovative course format unique in Austria, based on US-American coding schools',
      'Gain practical experience, by working on exciting projects',
    ],
    keyfacts: [
      'Duration: 5 days',
      'Language: English',
      'Times: Monday to Friday 9 a.m. to 4 p.m. @ CodeFactory plus tasks with free time allocation',
      'Course fee: € 690,-',
      'Level: beginners',
    ],
    requirements: `You are motivated to work in a team and have the ability to learn independently. As a beginner without any previous knowledge, you are familiar with working on the computer and concepts such as folder structures.
            Your own laptop, ideally with an SSD hard drive and at least 4 GB RAM, is recommended. However, we can also provide a rental laptop if required.`,
    chaptersFrontend: [],
    chaptersBackend: [],
    whysection: '',
    jobsection: '',
    chapters: [
      'Working in the Jupyter Notebook environment',
      'Python basics, including syntax and mathematical operators, variables and data types',
      'Application of Strings and Regex',
      'Create and edit Python lists, tuples, sentences and dictionaries',
      'Using functions and handling exceptions',
    ],
    infoUrl: 'https://codefactory.wien/en/python-programming-en/',
    applyUrl: 'https://codefactory.wien/en/registration-python-programming-en/',
    joke: "A real-life Python is half as scary than the programming language",
  },
  {
    id: 29,
    name: 'Data Analysis & Visualization',
    price: 890,
    description: `Embark on a 5-day journey into the heart of data analysis and visualization with Python programming! This intensive course covers the basics from Jupyter Notebook to Pandas DataFrame manipulation and statistical analysis.
        Throughout the course, you'll delve into descriptive and explorative data analysis, learn to visualize data using Matplotlib and Numpy, and even dip your toes into machine learning basics.
        But it's not just theory—you'll get hands-on experience through exercises and projects, ensuring you're ready to tackle real-world data challenges`,
    dates: ['Start: Monday, 20th January 2025'],
    advantages: [],
    keyfacts: [
      'Duration: 5 days',
      'Language: English',
      'Dates: 01.07. - 05.07.2024',
      'Location: CodeFactory, Kettenbrückengasse 23/2/12, 1050 Vienna or online',
      'Times: Monday to Friday 9 a.m. to 4 p.m. @ CodeFactory or Online',
      'Fee: € 890,-',
      'Level: intermediate and advanced',
    ],
    requirements: `Previous knowledge is necessary either trough our Python Programming course or previous Python knowledge. Good basic English knowledge is essential. A laptop with a working microphone and headphones are recommended`,
    chaptersFrontend: [],
    chaptersBackend: [],
    whysection: '',
    jobsection: '',
    chapters: [
      'Refreshing of Python basics',
      'Jupyter Notebook',
      'Pandas DataFrame',
      'Descriptive and Exploratory Data Analysis',
      'Statistical Data Analysis',
      'Data Visualization',
      'Matplotlib and Numpy',
    ],
    infoUrl: 'https://codefactory.wien/en/data-analysis-visualization/',
    applyUrl:
      'https://codefactory.wien/en/registration-data-analysis-visualization/',
    joke: "Just make sure you don't go into random forests alone at night!",
  },
];
