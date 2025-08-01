import {
  mobile,
  backend,
  creator,
  web,
  typescriptpic,
  docker,
  paai,
  paaiLearning,
  restronova,
  gpsTracking,
  aifiverse,
  sikify,
  cpppic,
  node,
  mongo,
  django,
  machinelearning,
  deeplearning,
  postgres,
  azure,
  jenkins,
  nginx,
  pythonpic,
  reactjs,
  kmii,
  kolkataWorkshop,
  erasmusCompetition,
  leader,
  gsea,
  sotm,
  seeds,
  axiata,
  aifiversel,
  txstcslogo,
  finfox,
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
    title: "Programming Languages:",
    description: "Proficient: DSA & OOPs, Python & C++, Intermediate: TypeScript",
    icon: web,
  },
  {
    title: "Database Management:",
    description: "Proficient: SQL Databases(Postgresql), Intermediate: NoSQL Databases(MongoDB)",
    icon: mobile,
  },
  {
    title: "Backend Development:",
    description: "Proficient: Django, Intermediate: Express/Node",
    icon: backend,
  },
  {
    title: "AI Development:",
    description: "Intermediate: RAG, Machine Learning, Deep Learning",
    icon: creator,
  },
  {
    title: "Deployment:",
    description: "Proficient: Linux, Azure, GitHub, VMs, Jenkins, & Nginx",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Pythonpic",
    icon: pythonpic,
  },
  {
    name: "Cpppic",
    icon: cpppic,
  },
  {
    name: "TypeScriptpic",
    icon: typescriptpic,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Machine Learning",
    icon: machinelearning,
  },
  {
    name: "Deep Learning",
    icon: deeplearning,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "NGINX",
    icon: nginx,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Research Assistant",
    company_name: "Texas State University - Computer Science Department",
    icon: txstcslogo,
    iconBg: "#383E56",
    date: "October 2024 - December 2024",
    points: [
      "Worked on AI specially LLM based research activities.",
      "Developed and tested an end-to-end Code LLAMA fine-tuning pipeline utilizing LoRA techniques.",
    ],
  },
  {
    title: "Co-founder & CEO",
    company_name: "Aifiverse Tech Services, Kathmandu, Nepal",
    icon: aifiverse,
    iconBg: "#383E56",
    date: "Jan 2021 - May 2024",
    points: [
      "Leadership in Tech: Founded and led a team of 20+ developers at a tech outsourcing, company focused on software development and product design, ensuring timely, high-quality project delivery.",
      "Project Development: Created an in-house project, Omnecal, a comprehensive solution, for fleet management and vehicle tracking.",
    ],
  },
  {
    title: "Founder & CEO",
    company_name: "Sikify Technologies, Kathmandu, Nepal",
    icon: sikify,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - April 2024",
    points: [
      "Team Leadership in Education Tech: Led a team of 5 developers to create educational operation infrastructure technology for government schools in Nepal.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FinFox App",
    description:
      "Solo-developed an AI-powered personal finance web app in 2 months using Next.js, Django, and PostgreSQL, with Plaid for financial data integration, Built intelligent agents for transaction categorization, recurring payment tracking, fraud detection, and alert management, Engineered a responsive LLM assistant using FAISS-based vector search and a custom data filtration algorithm for accurate, contextual financial insights, Integrated multi-account fund summaries and interactive dashboards tailored for students and young earners.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "purple-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "orange-text-gradient",
      },
    ],
    image: finfox,
    source_code_link: "https://finfoxapp.com",
  },
  {
    name: "pa.ai",
    description:
      "A RAG-Based AI application utilizing LLAMA-3, Django, and Next.js. This platform allows users to upload their own data for personalized Q&A, tailored specifically to their needs.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "LLAMA-3",
        color: "orange-text-gradient",
      },
    ],
    image: paai,
    source_code_link: "https://github.com/iamnirmank/Paai-Backend.git",
  },
  {
    name: "Restronova RMS",
    description:
      "A restaurant inventory and sales management system built to streamline restaurant operations by efficiently managing both inventory and sales data.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "purple-text-gradient",
      },
    ],
    image: restronova,
    source_code_link: "https://github.com/iamnirmank/Restronova-Backend.git",
  },
  {
    name: "GPS Tracking IoT",
    description:
      "Realtime vehicle tracking firmware developed in C++ for ESP32-S3, integrating MQTT communication with an Express-based server to track vehicles via GPS and OBD data.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "PlatformIO",
        color: "green-text-gradient",
      },
      {
        name: "MQTT",
        color: "pink-text-gradient",
      },
      {
        name: "ESP32-S3",
        color: "orange-text-gradient",
      },
    ],
    image: gpsTracking,
    source_code_link: "https://github.com/iamnirmank/GPSTrackingIoT-Firmware.git",
  },
];

const activities = [
  {
    title: "Kathmandu Metro Idea and Innovation (KMII) 2080 Ended Here",
    description: `Thank you so much Kathmandu Metro and Er. Balen Shah for the initiative. 
                  If you ask me one thing I got from KMII, I will tell you that I got a network of very genuine and like-minded people. 
                  It was such a wonderful experience overall, being shortlisted as the top 15 after competing with 800+ teams. 
                  And guess what, we all went for a movie at the break of the final day, which shows how much we shared and enjoyed, 
                  building a strong bond together to create something big with determination and passion.`,
    image: kmii,
    linkedin_link: "https://www.linkedin.com/posts/nirman-khadka-2003s04_kmii2080-startups-connections-activity-7209830503217078275-cMA0?utm_source=share&utm_medium=member_desktop",
    facebook_link: "https://www.facebook.com/share/p/AF45HQdXmEkTGqzy/",
  },
  {
    title: "Regional Start-up Network Workshop - December 2023",
    description: `In December 2023, I attended a week-long workshop in Kolkata organized by the Regional Start-up Network in partnership with the US Consulate Kolkata. 
                  The workshop brought together participants from Indo-Pacific countries, including Bangladesh, Bhutan, India, and Nepal. Engaging with leaders in India's startup ecosystem was a unique and enriching learning experience. 
                  Meeting inspiring individuals during the program left a lasting impression on me. 
                  It was my first visit to India, a country I had always wanted to explore, and I am grateful for the opportunity. 
                  Overall, it was a memorable and impactful experience that I will cherish.`,
    image: kolkataWorkshop,
    linkedin_link: "https://www.linkedin.com/posts/nirman-khadka-2003s04_kmii2080-startups-connections-activity-7209830503217078275-cMA0?utm_source=share&utm_medium=member_desktop",
    facebook_link: "https://www.facebook.com/share/p/tJspUt3gnx1kaexG/",
  },
  {
    title: "Business Case Challenge Competition - Erasmus+ Encore Project",
    description: `Excited and honoured to receive the Certificate of Appreciation from ENCORE, Tribhuvan University, and the Erasmus+ Programme of the European Union!
                  I'm grateful for the opportunity to contribute as an Entrepreneur, mentoring and guiding participants in the business case challenge competition held under the Erasmus+ Encore project on May 5th, 2023. It was an incredible experience working with such talented individuals and witnessing their growth.
                  A big thank you to the organizers and all the participants for making this event a success. Together, we're fostering entrepreneurship and innovation.`,
    image: erasmusCompetition,
    linkedin_link: "https://www.linkedin.com/posts/nirman-khadka-2003s04_entrepreneurship-mentorship-businesschallenge-activity-7082366167251632128-1Odj?utm_source=share&utm_medium=member_desktop",
    facebook_link: "https://www.facebook.com/iamnirmank",
  },
  {
    title: "NYEF LEADER Entrepreneurship Development Program 2023",
    description: `Reflecting on my 2-week journey with NYEF LEADER Entrepreneurship Development Program 2023, I can confidently say that it was an unparalleled learning experience. The program equipped us with the knowledge and skills necessary to create, run, and scale a successful startup. Throughout the program, we delved into the intricacies of strategy building and implementation, including frameworks such as PESTEL, Porter's Five Forces, and more.`,
    image: leader,
    linkedin_link: "https://www.linkedin.com/posts/nirman-khadka-2003s04_reflecting-on-my-2-week-journey-with-nyef-activity-7057736169878392832-N6J2?utm_source=share&utm_medium=member_desktop",
    facebook_link: "https://www.facebook.com/iamnirmank",
  },
  {
    title: "Global Student Entrepreneurship Awards 2023",
    description: `It was an honor to participate in the GSEA Nepal 2023 competition and to be selected as one of the top 20 semi-finalists. The GSEA mentorship Bootcamp was a truly transformative experience, where I gained invaluable insights into startup finance, business model development, and pitch deck preparation. I am really happy to be named the 2nd runner-up in the Global Student Entrepreneurship Awards 2023.`,
    image: gsea,
    linkedin_link: "https://www.linkedin.com/posts/nirman-khadka-2003s04_gsea2023-globalstudententrepreneurshipawards-activity-7022605812334288897-WY3M?utm_source=share&utm_medium=member_desktop",
    facebook_link: "https://www.facebook.com/share/p/frh11sBmG8btJmTr/",
  },
  {
    title: "State of the Map Asia Conference 2022",
    description: `We had a great time at the State of the Map Asia 2022 conference in Legazpi City, Philippines. We explored the potential of OpenStreetMap technology and its application to real-world problems, building stronger connections and fostering new possibilities through the Omnecal platform.`,
    image: sotm,
    linkedin_link: "https://www.linkedin.com/posts/nirman-khadka-2003s04_pnm2022-sotma2022-omhap-activity-7003542618567581697-JeKf?utm_source=share&utm_medium=member_desktop",
    facebook_link: "https://www.facebook.com/share/p/wq8EJURRgvyYVnuc/",
  },
  {
    title: "Huawei Seeds for the Future 2022",
    description: `I applied to Huawei Seeds for the Future to gain knowledge about cutting-edge technology and entrepreneurship. Being selected among the top 7 students from Nepal was a humbling experience, and I later went on to Singapore for the accelerator camp. This journey provided invaluable learning, cultural exchange, and strong connections.`,
    image: seeds,
    linkedin_link: "https://www.linkedin.com/posts/nirman-khadka-2003s04_seedsforapac-thailandsftf2022-amazingthailand-activity-6973283663052496896-vB0w?utm_source=share&utm_medium=member_desktop",
    facebook_link: "https://www.facebook.com/share/p/zYgzynjkDLB4Dx8z/",
  },
  {
    title: "Axiata Hack 2022",
    description: `We competed with over 450+ national and international teams in the Axiata Hack 2022 and were thrilled to secure the 2nd runner-up position. It was an excellent learning opportunity, and I’m grateful to JomHack Axiata and SoftBank for organizing this hackathon, which helped us develop innovative solutions for real-world problems.`,
    image: axiata,
    linkedin_link: "https://www.linkedin.com/posts/nirman-khadka-2003s04_axiatahack-jomhack-grandfinale-activity-6961876806035537920-qDHg?utm_source=share&utm_medium=member_desktop",
    facebook_link: "https://www.facebook.com/share/p/eTJNSbifyDTWPuYs/",
  },
  {
    title: "First Startup Company Official Inauguration",
    description: `Aifiverse Tech Services Pvt. Ltd was officially launched through the #TechiesMeetUp2022 program. Our mission is to integrate technology as a tool for business solutions, focusing on client satisfaction, quality, and innovation for a sustainable and better future. Aifiverse provides a range of services, including software development, web applications, AI, and blockchain solutions.`,
    image: aifiversel,
    linkedin_link: "https://www.linkedin.com/posts/nirman-khadka-2003s04_aifiverse-tech-services-pvt-ltd-activity-6998884549619306496-yvgy?utm_source=share&utm_medium=member_desktop",
    facebook_link: "https://www.facebook.com/share/p/EsUjyrx9gjp1akPZ/",
  },
];


export { services, technologies, experiences, testimonials, projects, activities };
