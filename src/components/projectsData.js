import AlgoScope from '../assets/AlgoScope.png';
import MaizeMarket from '../assets/MaizeMarket.png';
import TextToAI from '../assets/TextToAI.png';
import Diffnosis from '../assets/Diffnosis.png';
import DiscordBots from '../assets/DiscordBots.png';

const projects = [
  {
    id: 'algoscope',
    name: 'AlgoScope',
    image: AlgoScope,
    description: 'AlgoScope is an interactive web app that helps users visualize how popular pathfinding and graph algorithms work. Users can create custom grids, generate mazes, adjust weights, and watch the step-by-step progression of algorithms like Dijkstra’s, A*, and BFS. It’s designed to make learning algorithms more hands-on and intuitive by showing real-time animations and performance statistics.',
    techStack: ['JavaScript', 'React', 'HTML/CSS'],
    githubLink: 'https://github.com/aayushsh06/AlgoScope',
    demoLink: 'https://aayushsh06.github.io/AlgoScope/',
    dates: 'February 2025 – April 2025',
  },
  {
    id: 'maize-market',
    name: 'Maize Market',
    image: MaizeMarket,
    description: 'Maize Market is a full-stack online marketplace where University of Michigan students can trade products. It features secure user authentication, product listings, a shopping cart, and a real-time chat system for communicating product exchange. Built to handle real-time communication and updates, it helps users browse and purchase products easily within a student-focused community.',
    techStack: ['Java', 'SpringBoot', 'JavaScript', 'React', 'HTML/CSS'],
    githubLink: 'https://github.com/aayushsh06/Maize-Market',
    demoLink: '',
    dates: 'November 2024 – Present',
  },
  {
    id: 'text-to-ai',
    name: 'Text-to-AI',
    image: TextToAI,
    description: 'Text-to-AI is an app that turns written prompts into short videos by generating scripts, voiceovers, and subtitles automatically. It combines AI models for language processing and voice synthesis, producing media content that is fully synchronized and captioned. The app helps automate content creation for users who want to turn ideas into videos quickly and accurately.',
    techStack: ['Python', 'Flask', 'JavaScript', 'HTML/CSS'],
    githubLink: 'https://github.com/aayushsh06/Text-to-AI',
    demoLink: '',
    dates: 'November 2024 – December 2024',
  },
  {
    id: 'diffnosis',
    name: 'Diffnosis',
    image: Diffnosis,
    description: 'Diffnosis is a mobile health app that assists users in performing basic differential diagnoses using medical input data. It uses machine learning models to analyze symptoms, assess travel-related health risks, and even evaluate skin images for possible conditions. The app connects to real-time health updates from global health agencies to provide current risk assessments and recommendations.',
    techStack: ['Swift', 'Python', 'Pandas'],
    githubLink: 'https://github.com/aayushsh06/Diffnosis',
    demoLink: '',
    dates: 'September 2024',
  },
  {
    id: 'discord-server-bot',
    name: 'Discord Server Bot',
    image: DiscordBots,
    description: 'This project includes several custom-built Discord bots designed to automate tasks, manage server activities, and engage users. Bots include an AI chatbot using GPT-4, a calendar scheduler, moderation tools, and notification systems. These bots improve the experience in Discord servers by handling repetitive tasks and providing useful features like reminders, auto-responses, and event tracking.',
    techStack: ['Swift', 'Python', 'Pandas'],
    githubLink: 'https://github.com/aayushsh06/Discord-Bots',
    demoLink: 'https://github.com/aayushsh06/Text-to-AI',
    dates: 'May 2024 – August 2024',
  },
];

export default projects;
