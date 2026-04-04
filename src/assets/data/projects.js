const BASE_GITHUB_URL = "https://singhakash02.github.io/";
const BASE_GITHUB_CODE = "https://github.com/SinghAkash02/"
export const projects = [
  {
    id: 1,
    title: "Food Website",
    description: "Multi page food website",
    category: "Web Apps",
    image: `${import.meta.env.BASE_URL}images/projects/Food.PNG`,
    technologies: ["HTML", "CSS", "Javascript"],
    metrics: "Lightweight & Responsive Template",
    demoUrl: `${BASE_GITHUB_URL}Food/`,
    gitUrl: `${BASE_GITHUB_CODE}Food`
  },
  {
    id: 2,
    title: "Character Counter",
    description: "Reusable UI Components",
    category: "UI Components",
    image: `${import.meta.env.BASE_URL}images/projects/CharacterCounter.PNG`,
    technologies: ["React", "Tailwind"],
    metrics: "Reusable components",
    demoUrl: `${BASE_GITHUB_URL}CharacterCounterLive/`,
    gitUrl: `${BASE_GITHUB_CODE}CharacterCounterLive`
  },
  {
    id: 3,
    title: "Travel Landing Page",
    description: "Modern Web App",
    category: "Web Apps",
    image: `${import.meta.env.BASE_URL}images/projects/TripLadingPage.PNG`,
    technologies: ["HTML", "CSS", "Javascript"],
    metrics: "Mobile-First Responsive Design",
    demoUrl: `${BASE_GITHUB_URL}Trip-Landing-Page/`,
    gitUrl: `${BASE_GITHUB_CODE}Trip-Landing-Page`,
  },
  {
    id: 4,
    title: "Pepsi Landing Page",
    description: "Single Page",
    category: "UI Components",
    image: `${import.meta.env.BASE_URL}images/projects/PepsiLandingPage.PNG`,
    technologies: ["React", "CSS"],
    metrics: "Efficient & Scalable UI Template",
    demoUrl: `${BASE_GITHUB_URL}Pepsi-Landing-Page/`,
    gitUrl: `${BASE_GITHUB_CODE}Pepsi-Landing-Page`,
  },
  {
    id: 5,
    title: "Login and Sign Up Form",
    description: "Animated Form",
    category: "UI Components",
    image: `${import.meta.env.BASE_URL}images/projects/LoingForm.PNG`,
    technologies: ["HTML", "CSS"],
    metrics: "High-Performance Responsive UI",
    demoUrl: `${BASE_GITHUB_URL}LoginSignUp/`,
    gitUrl: `${BASE_GITHUB_CODE}LoginSignUp`,
  },
  {
    id: 6,
    title: "College Website",
    description: "Multi page website",
    category: "Web Apps",
    image: `${import.meta.env.BASE_URL}images/projects/CollegeTemplate.PNG`,
    technologies: ["HTML", "CSS"],
    metrics: "5 pages responsive",
    demoUrl: `${BASE_GITHUB_URL}CollegeTemplate/`,
    gitUrl: `${BASE_GITHUB_CODE}CollegeTemplate`
  },
];
export const categories = ['All', 'Web Apps', 'UI Components'];
// 'Full Stack'