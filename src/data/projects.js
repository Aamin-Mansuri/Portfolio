export const projectCategories = ["All", "MERN", "React", "JavaScript"];

export const projects = [
  {
    id: "mern-auth",
    title: "MERN Authentication App",
    category: "MERN",
    featured: true,
    tagline: "Full-Stack Security & Dashboard System",
    description: "A complete full-stack authentication system built using the MERN stack with JWT authentication, Google OAuth integration, secure password hashing, protected client-side routes, and an interactive React user dashboard.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "OAuth", "Tailwind CSS"],
    github: "https://github.com/Aamin-Mansuri/Mern-Authentication-App.git",
    liveDemo: null,
    highlights: [
      "JSON Web Token (JWT) stateless auth workflow",
      "Google OAuth 2.0 single sign-on integration",
      "Protected React Router sub-routes and session state",
      "Clean RESTful backend design with modular controllers"
    ],
    stats: { stack: "MERN", type: "Full Stack" }
  },
  {
    id: "e-commerce",
    title: "E-Commerce Web Application",
    category: "React",
    featured: true,
    tagline: "Responsive Shopping Storefront & Cart Engine",
    description: "A feature-rich React e-commerce application featuring full user login/signup authentication, dynamic product catalog browsing, detailed filtering, and a stateful Add to Cart cart system managed with Context API.",
    tech: ["React.js", "JavaScript", "Context API", "Tailwind CSS", "REST API"],
    github: "https://github.com/Aamin-Mansuri/E-Commerce-Web-Project.git",
    liveDemo: null,
    highlights: [
      "Global cart and wishlist state via React Context API",
      "Responsive product grids with dynamic filter tags",
      "Interactive checkout flow and quantity handlers",
      "Seamless mobile navigation and optimistic UI feedback"
    ],
    stats: { stack: "React", type: "Frontend" }
  },
  {
    id: "voice-assistant",
    title: "Voice Assistant Web App",
    category: "JavaScript",
    featured: true,
    tagline: "Interactive Speech Recognition Engine",
    description: "A browser-based intelligent voice assistant leveraging native JavaScript Speech Recognition and Speech Synthesis APIs to process user voice commands, deliver audio feedback, and automate web tasks.",
    tech: ["JavaScript (ES6+)", "Web Speech API", "HTML5", "Tailwind CSS"],
    github: "https://github.com/Aamin-Mansuri/voice-as-js-project-6.git",
    liveDemo: null,
    highlights: [
      "Real-time voice-to-text input recognition",
      "Text-to-speech audio responses with dynamic voice selection",
      "Voice command mapping for instant web search and navigation",
      "Interactive status indicator and wave animations"
    ],
    stats: { stack: "JavaScript", type: "Web API" }
  },
  {
    id: "weather-app",
    title: "Live Weather Web App",
    category: "JavaScript",
    featured: false,
    tagline: "Real-Time Weather Forecasting Utility",
    description: "A sleek weather forecast application integrating external REST APIs to fetch real-time weather metrics, humidity levels, wind speeds, and temperature data for global cities.",
    tech: ["JavaScript", "REST API", "Async/Await", "CSS3", "HTML5"],
    github: "https://github.com/Aamin-Mansuri/wather-app-js-project-5.git",
    liveDemo: null,
    highlights: [
      "Dynamic weather API query integration",
      "Location search auto-complete and error handling",
      "Adaptive visual themes based on weather status"
    ],
    stats: { stack: "JavaScript", type: "API App" }
  },
  {
    id: "movie-search",
    title: "Movie Search API Application",
    category: "JavaScript",
    featured: false,
    tagline: "Database Search & Information Portal",
    description: "A fast, responsive movie discovery platform fetching data from Open Movie Database APIs. Features instant search debounce, ratings, detailed movie cards, and genre filtering.",
    tech: ["JavaScript", "Fetch API", "HTML5", "CSS3"],
    github: "https://github.com/Aamin-Mansuri/Movie-Search-Api-Project.git",
    liveDemo: null,
    highlights: [
      "Real-time search debouncing and API query optimization",
      "Detailed modal views with ratings, cast, and plot details",
      "Responsive poster grid with image load handling"
    ],
    stats: { stack: "JavaScript", type: "API Portal" }
  },
  {
    id: "bee-game",
    title: "React Bee Game",
    category: "React",
    featured: false,
    tagline: "Interactive Stateful Web Game",
    description: "An engaging browser game built in React demonstrating complex state management, event loops, collision detection logic, and custom game status handlers.",
    tech: ["React.js", "JavaScript", "Custom Hooks", "CSS Animations"],
    github: "https://github.com/Aamin-Mansuri/React-Bee-Game.git",
    liveDemo: null,
    highlights: [
      "Modular game loop architecture in React components",
      "Dynamic score tracking and health management",
      "Custom CSS animations and sound trigger events"
    ],
    stats: { stack: "React", type: "Interactive" }
  },
  {
    id: "digital-clock",
    title: "Modern Digital Clock",
    category: "JavaScript",
    featured: false,
    tagline: "Real-Time Clock & Alarm Utility",
    description: "A clean digital clock utility showcasing JavaScript DOM manipulation, date-time formatting, dynamic theme shifting, and high-precision time intervals.",
    tech: ["JavaScript", "DOM Manipulation", "CSS3", "HTML5"],
    github: "https://github.com/Aamin-Mansuri/clock-js-project.git",
    liveDemo: null,
    highlights: [
      "High-precision time intervals with zero drift",
      "Multi-timezone and 12/24 hour format toggles",
      "Sleek minimalist UI with subtle neon accents"
    ],
    stats: { stack: "JavaScript", type: "Utility" }
  }
];
