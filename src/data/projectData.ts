import { GithubLogoIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react'
import type { Project } from '../types/project'
import { contactDestinations } from './socialLinks'

export const projects: Project[] = [
  {
    slug: 'project-one',
    imageUrl: '/projects/project1.jpg',
    title: 'Embedded AI-Based Smart Kitchen Inventory Tracking System Using Raspberry Pi, Battery-Powered ESP32-CAM, Reed Switch Door Detection, LED, INT8 Quantised CLIP and OpenCV',
    period: 'Sept 2026 - Present',
    tools: ["Python", "PyTorch", "OpenCLIP", "ONNX Runtime", "OpenCV", "C++ (Arduino)", "ESP32-CAM", "Raspberry Pi", "Flask", "SQLite", "Telegram Bot API"],
    description: 'A final year research project where I\'m building a low-cost embedded kitchen stock tracker. An ESP32-CAM inside the cupboard wakes when the door is closed, photographs the shelf and sends it to a Raspberry Pi, which identifies each jar with an open-set CLIP model, estimates fill level with OpenCV and sends low-stock alerts via Telegram. The research looks at how far CLIP can be compressed (ONNX, INT8) to run on low-power hardware while still telling apart near-identical items like sugar, salt and flour.',
    links: [
      { label: 'Project Proposal', href: './yes'},
      {
        label: 'Contact me for demo',
        href: `mailto:${contactDestinations.emailAddress}?subject=Final Year Project code`,
        IconComponent: EnvelopeSimpleIcon,
      },
    ],
  },
  {
    slug: 'project-two',
    imageUrl: '/projects/project3.png',
    title: 'Analytics Engine',
    period: 'Dec 2025 - Present',
    tools: ["Java", "Spring Boot", "AWS EC2", "JUnit 5", "MockMvc",  "JPA", "H2", "Gradle", "Docker", "React", "TypeScript"],
    description: 'A data-profiling REST API built with Spring Boot, designed as a building block that could sit inside a larger data pipeline. Upload a CSV or Parquet file and it infers column types, counts nulls and unique values, and calculates min, max, mean, median, standard deviation and percentiles from p25 to p99. Each analysis is stored so it can be retrieved, downloaded as JSON or deleted through the API, and repeat uploads are detected with SHA-256 content hashing and served straight from cache. The API is documented with Swagger/OpenAPI, monitored with Spring Actuator, covered by unit and integration tests, and deployed on AWS EC2 with a React and TypeScript web UI on top. This allow users to use the API directly on the website and and through terminal.',links: [
      { label: 'Github', href: 'https://github.com/abdursujon/analytics-engine.git', IconComponent: GithubLogoIcon },
      { label: 'Launch', href: 'https://abdursujon.github.io/analytics-engine-ui/' },
    ],
  },
  {
    slug: 'project-three',
    imageUrl: '/projects/project4.png',
    title: 'PetWatch: Community Lost-Pet Tracker',
    period: 'Dec 2025 - Present',
    tools: ["PHP", "MariaDB", "JavaScript (ES6)", "AJAX", "Leaflet", "OpenStreetMap", "Nominatim API", "Bootstrap 5", "MVC"],
    description: 'A demo community lost-pet tracker in plain PHP using an MVC architecture, with no frameworks or build step. Owners post their lost pets with photos and details, and other users report sightings by clicking the map or using their device\'s GPS. Every sighting is plotted on an interactive Leaflet map with marker clustering, and coordinates are turned into street addresses through a disk-cached Nominatim geocoder to stay within rate limits. It also includes debounced live search with ranked suggestions, infinite scroll, filtering and sorting, and session-based authentication with login rate limiting, role-based navigation and token-checked AJAX endpoints.',
    links: [
      { label: 'Github', href: 'https://github.com/abdursujon/petwatch.git', IconComponent: GithubLogoIcon },
      { label: 'Launch Demo', href: 'https://sickly-impostors.poseidon.salford.ac.uk/clientserver/index.php' },
      {
        label: 'Want this live for community? Get in touch',
        href: `mailto:${contactDestinations.emailAddress}?subject=Interested in making petwatch demo project live for my community`,
        IconComponent: EnvelopeSimpleIcon,
      },
    ],
  },
  {
    slug: 'project-four',
    imageUrl: '/projects/project5.png',
    title: 'Zorp The Solar Alien',
    period: 'Mar 2026 - Present',
    tools: ["Java", "JavaFX", "Maven", "GitHub Actions", "MVC", "Factory Pattern", "Singleton Pattern"],
    description: 'A 2D educational game built in Java and JavaFX to teach primary school children about the Solar System. Players control Zorp, a stranded alien fighting to gather information about solar system and visit Sun to Neptune across 9 levels of 10 waves each, battling enemies and a unique boss on every planet while collecting fact cards to unlock the next world. The code is structured with MVC, Factory and Singleton patterns, runs on a fixed 60 updates-per-second game loop, and saves progress automatically. A GitHub Actions pipeline packages it with a bundled Java runtime for Windows, macOS and Linux on every tagged release.',
    links: [
      { label: 'Github', href: 'https://github.com/abdursujon/zorp-the-solar-alien.git', IconComponent: GithubLogoIcon },
      { label: 'Get The Game', href: 'https://github.com/abdursujon/zorp-the-solar-alien/releases/latest' },
    ],
  },
  {
    slug: 'project-five',
    imageUrl: '/projects/project2.png',
    title: 'Find A Placement (for BCS Manchester), University of Salford HackCamp',
    period: 'Dec 2026 - Jan 2026',
    tools:["JavaScript", "PHP", "SQLite", "MVC", "SCRUM"],
    description: 'Placement platform built for BCS Manchester to boost undergraduate placement uptake by matching students with employers offering year-long industrial placements. Serves students, employers, career staff, and admins. Responsive PHP app with SQLite backend, Bootstrap UI, and JavaScript, with matching logic aligned to SFIA v8.',
    links: [
      {
        label: 'Contact me for code',
        href: `mailto:${contactDestinations.emailAddress}?subject=Find a placement project code (BCS Manchester)`,
        IconComponent: EnvelopeSimpleIcon,
      },
    ],
  },
  {
    slug: 'project-six',
    imageUrl: '/projects/project6.png',
    title: 'Problem Solving Patterns',
    period: 'Aug 2026 - Present',
    tools: ["Python","LeetCode"],
    description: 'A growing collection of the problem-solving patterns behind most coding interview questions, written in Python. Each pattern comes with an explanation of when to use it, its pros and cons and the problems it typically solves, alongside a working implementation and solved LeetCode problems. The aim is to recognise which approach a question needs just by reading it and improve problem solving skill.',
    links: [
      { label: 'Github', href: 'https://github.com/abdursujon/problem-solving-patterns.git', IconComponent: GithubLogoIcon },
    ],
  },
  {
    slug: 'project-seven',
    imageUrl: '/projects/project7.png',
    title: 'Template for This Website',
    period: 'Sept 2026 - Present',
    tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Netlify", "GitHub GraphQL API", "Phosphor Icons", "oxlint"],
    description: 'The template behind this portfolio, built from scratch with React 19, TypeScript and Tailwind CSS. Every section reads from a typed data file, so adding a project, job or artwork means editing one array rather than the markup. A Netlify Function queries the GitHub GraphQL API to render a live two-year contribution calendar, and the site supports light and dark mode with a system-preference fallback. It also includes drawing and digital-art galleries, terms and privacy dialogs, a reusable UI component kit and a mobile-first responsive layout, deployed on Netlify with continuous deployment.',
    links: [
      { label: 'GET TEMPLATE', href: 'https://github.com/abdursujon/sujon.com.git', IconComponent: GithubLogoIcon },
      { label: 'Launch', href: 'https://sujons.com' },
    ],
  },
]