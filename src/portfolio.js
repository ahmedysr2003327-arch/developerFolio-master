import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};
const greeting = {
  username: "Ahmed Yaser",
  title: "Hi all, I'm Ahmed Yaser",
  subTitle: emoji(
    "Frontend Developer 🚀 specialized in React.js, JavaScript, TypeScript, and modern web technologies. Passionate about building responsive, scalable, and user-friendly web applications with clean code and exceptional user experiences."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pxpHpJKH6re6U4w8q-E7mtOeii8HcJyq/view?usp=drive_link",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ahmedysr2003327-arch",
  linkedin: "https://www.linkedin.com/in/ahmed-yaser-front-end/",
  gmail: "[ahmedysr777@gmail.com](mailto:ahmedysr777@gmail.com)",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  whatsapp: "https://wa.me/201007712634",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "FRONTEND DEVELOPER SPECIALIZED IN BUILDING MODERN WEB APPLICATIONS WITH REACT ECOSYSTEM",

  skills: [
    emoji(
      "⚡ Build responsive and interactive web applications using React.js and TypeScript"
    ),
    emoji("⚡ Develop reusable components and scalable frontend architectures"),
    emoji(
      "⚡ Integrate REST APIs and manage state using Redux Toolkit and React Query"
    ),
    emoji("⚡ Create modern user interfaces with Tailwind CSS and Bootstrap")
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Redux Toolkit",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "React Query",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fas fa-paint-brush"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Al-Azhar University",
      logo: require("./assets/images/alazharLogo.png"),
      subHeader: "Bachelor of Computer Engineering",
      duration: "2020 - 2025",
      desc: "Graduated from the Faculty of Engineering with a focus on software engineering and web development.",
      descBullets: [
        "Studied Data Structures and Algorithms",
        "Studied Software Engineering and Database Systems",
        "Built multiple web applications using React.js and MERN Stack"
      ]
    },
    {
      schoolName: "Digital Egypt Pioneers Initiative (DEPI)",
      logo: require("./assets/images/depiLogo.png"),
      subHeader: "Frontend Development Track",
      duration: "2024 - 2025",
      desc: "Professional training program focused on modern frontend development technologies and industry best practices.",
      descBullets: [
        "Advanced React.js Development",
        "JavaScript ES6+ and TypeScript",
        "Frontend Architecture and State Management",
        "Building Real-World Projects and Team Collaboration"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "95%"
    },
    {
      Stack: "React Ecosystem",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Integration",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: false,
  experience: []
};

/* Your Open Source Section */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Featured Projects",
  subtitle: "SOME PROJECTS I BUILT USING REACT AND MODERN WEB TECHNOLOGIES",

  projects: [
    {
      image: require("./assets/images/project1.png"),
      projectName: "E3mar Al Azhar",
      projectDesc:
        "Graduation project built with React.js. Includes responsive UI, reusable components, API integration, and optimized user experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://e3maralazhar.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/kunooz-althawq.jpg"),
      projectName: "Konooz Al Thawq",
      projectDesc:
        " Professional company website built with Next.js and Tailwind CSS. Features responsive design, SEO optimization, categorized project galleries, and WhatsApp integration.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://construction-company-eight-rose.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/stanfordLogo.png"),
      projectName: "Next.js E-Commerce",
      projectDesc:
        "A modern e-commerce web application built with Next.js, TypeScript, and Tailwind CSS. Features product browsing, product details, shopping cart with Context API, localStorage persistence, responsive design, and optimized performance.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ahmedstored23.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/project2.png"),
      projectName: "DPI Blog Project",
      projectDesc:
        "Modern blog platform built with React.js featuring CRUD operations, API integration, and responsive design.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://blog-main-z6cu.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/project3.png"),
      projectName: "Task Management System",
      projectDesc:
        "Full-stack task management system built with React, Node.js, Express, and MongoDB. Includes authentication and CRUD features.",
      footerLink: []
    }
  ],

  display: true
};

// Achievement Section (DEPI added here too)
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications, training programs, and professional achievements",

  achievementsCards: [
    {
      title: "Digital Egypt Pioneers Initiative (DEPI)",
      subtitle:
        "Professional Frontend Development Training Program focused on React, JavaScript, and modern web technologies.",
      image: require("./assets/images/depiLogo.png"),
      imageAlt: "DEPI Logo",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  display: false
};

// Talks Section
const talkSection = {
  display: false
};

// Podcast Section
const podcastSection = {
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I'm currently open to Frontend Developer opportunities and internships.",

  number: "01007712634",

  whatsappLink: "https://wa.me/201007712634",

  email_address: "ahmedysr777@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
