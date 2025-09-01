// src/data/projects.js

const projects = [
  {
    id: 1,
    title: "Spotify Mock Clone",
    description: "A Spotify-inspired music streaming app built with React and Spotify API.",
    image: "/images/spotify-clone.png",
    github: "https://github.com/yourusername/spotify-clone",
    demo: "https://spotify-clone-demo.vercel.app",
    tags: ['React', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Fullstack Blackjack in progress...',
    description:'Fullstack Blackjack on React and Flask. Functional multiplayer and real-time chat using Flask-SocketIO.',
    image: "/images/spotify-clone.png",
    github: "https://github.com/RodriguezRamiro/fullstack_blackjack",
    demo: "https://fullstack-blackjack.vercel.app/",
    tags: ['JavaScript', 'React', 'Flask', 'WebSockets', 'CSS', 'Render'],
  },
  {
    id: 3,
    title: 'API_Tester & Todo Dashboard',
    description: "Interactive API testing and Todo dashboard. Full-stack capabilities with a Flask backend, React frontend and live WebSocket",
    image:"",
    github: "https://github.com/RodriguezRamiro/apitester",
    demo: "https://apitester-fawn.vercel.app/",
    tags: ['React.js', 'TypeScript', 'Flask', 'Railway.app'],
  },
  {
    id: 4,
    title: 'E-Commerce in Progress...',
    description: 'Browse products, manage a shopping cart, and complete secure checkout with Stripe.',
    image: '/images/pic.png',
    github: 'no link yet',
    demo: 'https://ecommerce-app-seven-lilac.vercel.app/',
    tags: ['Flask', 'SQLAlchemy','PostgreSQL', 'Stripe API', 'React', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 5,
    title: 'Chatbot App',
    description: 'A simple chat box application with auto-replies and timestamps.',
    image: '/images/chatbot.png',
    github: 'https://github.com/RodriguezRamiro/chatbot',
    demo: 'https://chatbot-peach-nine-17.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 6,
    title: 'React Calculator',
    description: 'React calculator featuring scientific functions and arithmetic buttons.',
    image: '/images/chatbot.png',
    github: 'https://github.com/RodriguezRamiro/react-calculator',
    demo: 'https://react-calculator-six-black.vercel.app/',
    tags: ['HTML', 'CSS', 'React JS'],
  },
];

export default projects;
