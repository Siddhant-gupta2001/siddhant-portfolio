import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
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
      title: "Next.js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Kublit labs",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - may 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Next.js Developer",
      company_name: "As Freelancer",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 20223 - March 2023",
      points: [
        "I maintain a robust framework using next.js, simplifying code reviews and enhancing collaboration.es.",
        "With diligent code standards and regular reviews, we ensure code quality and maintainability, making it easier to scale and improve our projects.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "As a freelancer, I provide versatile web development services, delivering quality projects tailored to your unique needs.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Zulip",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - March 22",
      points: [
        "Developing and maintaining web applications using HTML, CSS, javascript and other related technologies.",
        "I create responsive, user-friendly, and visually appealing web solutions that meet your specific goals and requirements",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Python Developer",
      company_name: "Scrapy Foundation",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "oct 2023 - Present",
      points: [
        "In the Scrapy Foundation, I am responsible for maintaining the GUI interface using Python",
        "In GUI development, I utilize Tkinter for creating user-friendly interfaces. Tkinter is a powerful Python library for building graphical user interfaces with ease and efficiency.",
        "This involves designing, updating, and ensuring the functionality of the graphical user interface to support the organization's projects and initiatives.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "As experienced person you greatly contributed to my project's success, making it ideal for guiding newcomers.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Kublit",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success.",
      name: "Chris Brown",
      designation: "COO",
      company: "Zulip",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After  optimized our website, our traffic will be decreased 50 %.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "idiology",
      description:
        " I've launched an open dev community where professionals share their company experiences, work-life insights, recruitment tips, and the exciting opportunities they've discovered. Join us to learn, connect, and grow together. Your journey to success starts here.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Siddhant-gupta2001/project_rainStorm.git",
    },
    {
      name: "Autherization Page",
      description:
        "To create an authorization page, use nodejs, CSS, and JavaScript. Design an intuitive interface with login and registration options. Implement server-side scripting for user authentication, including secure password storage and access control for a protected resource..",
      tags: [
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Siddhant-gupta2001/siddhant-login.git",
    },
    {
      name: "Wheather App",
      description:
        "I developed a weather app using Reactjs, integrating data from various weather APIs. Users can access current conditions, forecasts, and weather alerts for their location, providing valuable information for daily planning and travel.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
          
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://glitstream-app.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  