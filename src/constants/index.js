import {
  mobile,
  backend1,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  GraphQL,
  MySql,
  nodejs,
  git,
  figma,
  docker,
  editor,
  graphicdesign,
  frontend,
  carepulse,
  unknownIcon,
  backend,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  LiveDoc,
  WeBuild,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "API Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video Editor",
    icon: creator,
  },
];

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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "GraphQL",
    icon: GraphQL,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MySql",
    icon: MySql,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Front-end developer",
    iconBg: "#fff",
    icon:frontend,
    date: "March 2020 - April 2021",
    points: [
      "Learning about software engineering and coding for thte first time.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Poster and logo using adobe Photoshop",
    iconBg: "#fff",
    icon:graphicdesign,
    date: "Jan 2021 - june 2021",
    points: [
      "Developing and maintaining poster using Photoshop to make a realistic image",
      "Created content over social media such as: my works and short tutorial of Photoshop",
      "Implementing standard poster that have all of them have standard quality",
      "Participating in Photoshop challenges, making myself to participate and push beyond my limits",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "PHP",
    icon: backend1,
    iconBg: "#fff",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using PHP(unfortuantely, I hadn't interest. so I quit using php)",
      "Started learning node.js as a backend language ,in which I can give best performance to my clients",
      "Server side rendering which I could do backend job, I used Next.js framework",
      "Participating in code reviews and being active in Github.",
    ],
  },
  {
    title: "Video Editor",
    company_name: "Premiere pro",
    icon: editor,
    iconBg: "#fff",
    date: "Jan 2023 - Present",
    points: [
      "Found another intrest in video editing major",
      "Which leaded me to go further in video editing industry",
      "Having a job in a teaching community, editing video courses",
      "Successfully acomplishing me to have knowledge into two different major of computer.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a poster as beautiful as our product, but Javad proved me wrong.",
    name: "Serjeh",
    designation: "headmaster",
    company: "Savior international school",
    image: unknownIcon,
  },
  {
    testimonial:
      "I've never met a video editor who truly cares about their clients' success like Javad does.",
    name: "Rahimi",
    designation: "co-woker",
    company: "Imam hussain foundation",
    image: unknownIcon,
  },
  {
    testimonial:
      "Making any type of change that clients needs, who truly interfere with client perfectly like Javad",
    name: "Unknown",
    designation: "CTO",
    company: "Unknown",
    image: unknownIcon,
  },
];

const projects = [
  {
    name: "Live Doc",
    description:
      "Web-based live platform, in which similar to google doc. This is an online editor which you can co-operate with other people, aswell as commenting and modifying text.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "LiveBlock",
        color: "pink-text-gradient",
      },
    ],
    image: LiveDoc,
    source_code_link: "https://github.com/wolfwalkerpd/collaborative-editor",
  },
  {
    name: "Job IT",
    description:
      "Basic web application that use basic but efficient code using aceternity/ui, This was one of my beginner project, That have continued to the person who currently I am.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Aceternity/ui",
        color: "pink-text-gradient",
      },
    ],
    image: WeBuild,
    source_code_link: "https://github.com/wolfwalkerpd/WeBUILDWEBB",
  },
  {
    name: "CarePulse",
    description:
      "An appointment system, in which I created an online clinic system, including user panel, admin panel and login page, Being friendly as well making the job of appointment easier.",
    tags: [
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: carePulse,
    source_code_link: "https://github.com/wolfwalkerpd/Hospital-appointment",
  },
];

export { services, technologies, experiences, testimonials, projects };
