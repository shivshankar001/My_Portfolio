import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1,
    be,sql, mini, snl,
  } from "../assets";

  const profiles = [
    {
      link: "https://auth.geeksforgeeks.org/user/aarti_rathi",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    },
    {
      link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
    },
    {
      link: "https://www.hackerrank.com/_shinchancode",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    {
      link:"https://dev.to/shinchancode",
      icon: hf,
    },
    {
      link:"https://www.holopin.io/@shinchancode#badges",
      icon: holopin,
    },
  ];

  const achievements = [
    {
      title: "Competitive Programming: Maximum rating: 1391 (Pupil) at Codeforces | highest global rank: 1729 (Divison 2)",
    },
    {
      title: "Competitive Programming: Maximum rating: 1646 (3 stars) at CodeChef | highest global rank: 1288 (Starter - 132)",
    },
    {
      title: "Open Soft Competition: Secured Gold medal in the Open Soft General Championship 2023-24 at IIT Kharagpur",
    },
    {
      title: "Data Analytics Competition: Secured 2nd place in Data Analytics Competition in GC 2023-24, showcasing expertise",
    },
    {
      title: "Taught basic concepts of the C programming language like structures, OOPs, Binary Trees, and linked lists to 50+ UGs"
    },
    {
      title: "Data Science Competition: Finalist in IIT Ropar Quantathon Data Science Competition, showcasing expertise "
    },
  ]
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name:"Google Cloud",
      icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
    },
    {
      name:"C++ tool",
      icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
  ];

  const list = [
    {
      id: "c++",
      title: "C++",
    },
    {
      id: "web",
      title: "Web Dev",
    },
    {
      id: "other",
      title: "Other",
    },
    {
      id: "java",
      title: "Java",
    },
  ];

  export const javaProject = [
    
  ];
  
  export const cProject = [
    {
      name: "Spell Checker",
      description:
        "Trie data structure implementation used as a dictionary, where customer details are checked, searched, inserted and removed. Using Trie, search complexities can be brought to optimal limit (key length)",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "trie",
          color: "green-text-gradient",
        },
        {
          name: "dictionary",
          color: "pink-text-gradient",
        },
      ],
      image: trie,
      source_link: "https://github.com/shivshankar001/Trie_Data_Structure",
      source_code_link: "https://github.com/shivshankar001/Trie_Data_Structure",
    },
    {
      name: "DSA Lab",
      description:
        "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
      tags: [
        {
          name: "DSA",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: ds,
      source_link: "https://github.com/shivshankar001/PDS_LAB_CPP",
      source_code_link: "https://github.com/shivshankar001/PDS_LAB_CPP",
    },
    {
      name: "Computer Graphics Lab",
      description:
        "These projects contain computer graphics topics like : Line Drawing Algorithm (DDA and Bresenham), Bresenham circle drawing, Polygon filling, 2D transformation, Cohen Sutherland polygon clipping and Bezier curve.",
      tags: [
        {
          name: "computergraphics",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: cg,
      source_link: "https://github.com/shivshankar001/Graphics_in_CPP",
      source_code_link: "https://github.com/shivshankar001/Graphics_in_CPP",
    },
    
  ];
  
  export const webProject = [
    {
      name: "3D React Portfolio",
      description:
        "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "3d_react",
          color: "pink-text-gradient",
        },
      ],
      image: port_3d,
      source_link: "",
      source_code_link: "",
    },
    {
      name: "Notes Application",
      description:
        "A web-based notes app made by using javaScript, This web-based notes app having functionalities like Drag and drop, Search notes etc.",
      tags: [
        {
          name: "notes",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: notes,
      source_link: "https://shivshankar001.github.io/Notes-App/",
      source_code_link: "https://github.com/shivshankar001/Notes-App/tree/main",
    },
  ];
  
  export const otherProject = [
    {
      name: "Multilingual Multiple Choice Question Generation",
      description:
        "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "multilingual",
          color: "green-text-gradient",
        },
        {
          name: "BE_Project",
          color: "pink-text-gradient",
        },
      ],
      image: be,
      source_link: "",
      source_code_link: "",
    },

    {
      name: "DBMS Lab",
      description:
        "Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.",
      tags: [
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
        {
          name: "dbms",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: sql,
      source_link: "",
      source_code_link: "",
    },
    {
      name: "SQL : Library Management System",
      description:
        "Semester 4 : DBMS Mini Project. Created a library management system using SQL and different functionalities.",
      tags: [
        {
          name: "sql",
          color: "blue-text-gradient",
        },
        {
          name: "management",
          color: "green-text-gradient",
        },
        {
          name: "miniproject",
          color: "pink-text-gradient",
        },
      ],
      image: mini,
      source_link: "",
      source_code_link: "",
    },
    {
      name: "Pyhton : Snake and Ladder",
      description:
        "Snake and Ladder game using python language. A simple command line interface snake and ladder game",
      tags: [
        {
          name: "snake and ladder",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "CLI",
          color: "pink-text-gradient",
        },
      ],
      image: snl,
      source_link: "",
      source_code_link: "",
    },
    
  ];
  
  const experiences = [
    {
      title: "Software Devloper",
      company_name: "Bluestock Fintech",
      icon: bny,
      iconBg: "#383E56",
      date: "Aug 2023 - Present",
      link: "",
      points: [
        "Engineered an IPO tracking feature utilizing Bluestock’s RESTful APIs, which boosted investment activity by 25%",
        "Synthesized data from NSE using ETL pipelines to aggregate and display 20+ upcoming IPOs, boosted by 15% ",
        "Architected sector-based investment portal, integrating 12+ industries with real data from 200+ companies via APIs ",
        "Implemented a JWT auth and 6-digit PIN verification for admin logins and secured data for 500+ users account",
        "Using technologies like Javascript, ReactJS, .NET and AngularJS.",
      ],
      link: "https://drive.google.com/drive/folders/17E8S8I2IyuvaHn7QTLG04P86Unt4yfUl?usp=sharing",
    },
    {
      title: "Frontend Devloper",
      company_name: "Border Wallet",
      icon: bny,
      iconBg: "#383E56",
      date: "Aug 2023 - Present",
      link: "",
      points: [
        "Redesigned documentation page in Figma, cutting discovery time by 35% and onboarding time from 15 to 9 minutes",
        "Displayed 8 associates on homepage, highlighting Bitcoin seed phrase encryption algorithm used by 5,000+ customers",
        "Incorporated feedback and social proofs featuring Twitter testimonials, resulting in a 15% increase in users trust",
        "Contributed to 3 other projects, collaborating with 2 mentors to optimize code quality and streamline CI/CD pipelines",
        "Using technologies like ReactJS, Figma, CI/CD and AngularJS.",
      ],
      link: "https://drive.google.com/drive/folders/17E8S8I2IyuvaHn7QTLG04P86Unt4yfUl?usp=sharing",
    },
    {
      title: "Opensoft General Championship, IIT Kharagpur",
      company_name: "Indian Institute of Technology Kharagpur",
      icon: "https://media.glassdoor.com/l/16/99/df/8f/best-iit.jpg",
      iconBg: "#383E56",
      date: "Mar 2022 - Oct 2023",
      link: "",
      points: [
        "Led a 4-person team to create UI for homepage, subscription, and login pages using ReactJS, Angular and Tailwind",
        "Delivered the frontend within a strict 72-hour deadline, ensuring seamless functionality and smooth user experience",
        "Implemented Framer Motion for smooth transitions, enhancing UI, adopted by 12 team members for branding.",
        "Optimized MongoDB Atlas Search with real-time autocomplete and fuzzy matching, achieving 40% faster queries",
        "Integrated Stripe API payment gateway in test mode, reducing checkout time and transaction efficiency by 15%",
      ],
      link: "https://drive.google.com/drive/folders/17E8S8I2IyuvaHn7QTLG04P86Unt4yfUl?usp=sharing",
    },
    {
      title: "Open IIT Data Analytics Competition, IIT Kharagpur",
      company_name: "Indian Institute of Technology Kharagpur",
      icon: "https://media.glassdoor.com/l/16/99/df/8f/best-iit.jpg",
      iconBg: "#383E56",
      date: "Mar 2022 - Oct 2023",
      link: "",
      points: [
        "Crafted a React dashboard using Rechart to visualize demographic data, analyzing social factors on a 0-10 scale",
        "Integrated Django, RestAPI and Axios into the dashboard to fetch, display 6 personalized suggestions for patients",
        "Successfully deployed frontend on Vercel and backend on AWS EC2, ensuring seamless integration, and scalability",
      ],
      link: "https://drive.google.com/drive/folders/17E8S8I2IyuvaHn7QTLG04P86Unt4yfUl?usp=sharing",
    },
    {
      title: "Research Intern",
      company_name: "Indian Institute of Technology Kharagpur",
      icon: "https://media.glassdoor.com/l/16/99/df/8f/best-iit.jpg",
      iconBg: "#383E56",
      date: "Mar 2022 - Oct 2023",
      link: "",
      points: [
        "Creating a system for secure fine-grained next-generation access control and authorization of digital assets and operations using policy based cryptosystem.",
        "Collaborating with cross-functional technologies like spring boot, react etc. to integrate high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      link: "https://drive.google.com/drive/folders/17E8S8I2IyuvaHn7QTLG04P86Unt4yfUl?usp=sharing",
    },
    {
      title: "DSA Mentor",
      company_name: "GeeksforGeeks (Intern)",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
      iconBg: "#E6DEDD",
      date: "May 2022 - Apr 2023",
      link: "",
      points: [
        "Teaching Assistant : Teaching Assistant for online batches of Data Structures, Algorithms, and Competitive programming with an average rating of 4.9*.",
        "Responsible for reviewing and writing articles based on Data Structures and Algorithms.",
      ],
      link: "https://drive.google.com/drive/folders/17E8S8I2IyuvaHn7QTLG04P86Unt4yfUl?usp=sharing",
    },
    {
      title: "Hacktoberfest",
      company_name: "GitHub",
      icon: hf,
      iconBg: "#E6DEDD",
      date: "Oct (2020 - 2022)",
      link: "",
      points: [
        "Hacktoberfest is an annual worldwide event held during the month of October. The event encourages open source developers to contribute to repositories through pull requests (PR).",
        "GitHub hosts many open source repositories that contribute to this event.",
      ],
      // link: "https://dev.to/shinchancode",
    },
  ];
  
  const educations = [
    {
      degree: "Bachelor of Technology",
      branch:
        "Civil Engineering",
      marks:
        "CGPA : 8.81 / 10",
      name: "Indian Institute of Technology, Kharagpur",
      year: "(2021 - 2025)",
      image: clg,
    },
    {
      degree:
        "12th Grade",
      branch : "Science",
      marks:
        "Percentage : 93.4 %",
      name: "Kendriya Vidyalaya RHE Khadki Katihar",
      year: "2021",
      image: school,
    },
    {
      degree:
        "10th Grade",
      branch: "SSC",
      marks:
        "Percentage : 94.4 %",
      name: "Kendriya Vidyalaya RHE Khadki Katihar",
      year: "2019",
      image: school,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
