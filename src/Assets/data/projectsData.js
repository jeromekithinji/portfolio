// import one from '../assets/svg/projects/one.svg'
import calculatorImage from "../images/projects/Calculator.png";
import ticketTrackerImage from "../images/projects/ticket_tracker.png";
import beerImage from "../images/projects/Beer-Api.png";
import kanyePokemonImage from "../images/projects/kanye_pokemon.png";
import guessingImage from "../images/projects/GuessingGame.png";
import morseImage from "../images/projects/MorseCode.png";
import fundi from "../images/projects/Fundi254.png";
import telkomImage from "../images/projects/Telkom.png";
import theftBait from "../images/projects/TheftBait.png";
import slimz from "../images/projects/Slimz-detailing.png";
import safeMap from "../images/projects/SafeMap.png"


export const projectsData = [
  {
    id: 1,
    projectName: 'Safe Map',
    projectDesc: 'SafeMap is an interactive web app that helps users find safer walking routes by avoiding high-crime areas. Built with React, Node.js, Google Maps API, and integrated with Google Gemini AI, it visualizes real crime data and recommends low-risk paths while also letting users chat with an AI for safety insights and route suggestions. My teammate and I developed it in just 24 hours during the JacHacks hackathon where we came 3rd.',
    tags: ['React', 'Python', 'Google Maps API', 'Gemini'],
    code: 'https://github.com/jeromekithinji/safe-map', // Add your GitHub link here if it's open-source
    demo: 'https://devpost.com/software/safemap-89hx7y',
    image: safeMap // You can add a screenshot or banner image URL here
  },
  {
    id: 2,
    projectName: 'Slimz Detailing',
    projectDesc: 'A responsive website for a premium car detailing service in the UK. Designed in Figma and built using React.js, the site showcases services, pricing, gallery, and contact options for potential customers.',
    tags: ['React', 'Figma'],
    code: '', // Add your GitHub link here if it's open-source
    demo: 'https://slimzdetailing.co.uk/',
    image: slimz // You can add a screenshot or banner image URL here
  },
  {
    id: 3,
    projectName: "Theft Bait",
    projectDesc: "Theft Bait is a smart, secure, and stylish anti-theft backpack designed for commuters, travelers, and adventurers seeking peace of mind. Developed during the UpStart 2025 entrepreneurship competition, our team had 24 hours to create a product, build a business model, and pitch it to investors. My role in the project was designing the company website using Figma, ensuring a visually compelling and brand-aligned layout. Additionally, I worked on a digital presence strategy to establish brand identity and engagement across online platforms, helping position the product for market success.",
    tags: ["Figma"],
    code: "https://devpost.com/software/theft-bait",
    demo: "https://www.figma.com/proto/nFCgq0ouz8198OHjb7SsEv/Upstart-2025?node-id=45-367&p=f&t=KtDucdcGmU4Xh2R1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=45%3A367",
    image: theftBait,
  },
  {
    id: 4,
    projectName: "Teklom HRM System",
    projectDesc:
      "At Telkom Kenya, I re-designed and re-developed the Human Resource Management System. Using ReactJS and Node.js for development and using Figma for designing the interface. I conducted performance testing using Apache JMeter to optimize efficiency under high-traffic loads and ensured cross-platform reliability through browser compatibility testing with Selenium WebDriver.",
    tags: ["Figma", "ReactJS", "Node.js"],
    code: "",
    demo: "https://www.figma.com/proto/oW8f7VkwTWcRkIaXat2JmX/Telkom?type=design&node-id=6-1531&t=SKKipaekttmg1uvM-1&scaling=min-zoom&page-id=1%3A353&starting-point-node-id=6%3A1531&show-proto-sidebar=1&mode=design",
    image: telkomImage,
  },
  {
    id: 5,
    projectName: "Fundi254",
    projectDesc:
      "Collaborated with 3 developers on the development of the Fundi254 website and web application. Fundi254 revolutionizes the service industry in Kenya by connecting specialists like handymen and beauticians with customers, like to how Uber connects taxi drivers with passengers. This platform streamlines the process of finding and booking local service professionals, offering a seamless, user-friendly interface for both providers and clients to interact, schedule services, and manage transactions efficiently.",
    tags: ["Vuejs", "Laravel"],
    code: "",
    demo: "https://www.254fundi.com/",
    image: fundi,
  },
  {
    id: 6,
    projectName: "Calculator",
    projectDesc:
      "A calculator implemented using HTML, CSS and JavaScript. It utilises display grid to arrange buttons in the appropriate positions and display flex for responsiveness on both PC and Mobile.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/jeromekithinji/calculator",
    demo: "https://jeromekithinji.github.io/calculator/",
    image: calculatorImage,
  },
  {
    id: 7,
    projectName: "Word Guessing Game",
    projectDesc:
      "Weather forecast systems and applications predict weather conditions based on multiple parameters.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/jeromekithinji/game",
    demo: "https://jeromekithinji.github.io/game/",
    image: guessingImage,
  },
  {
    id: 8,
    projectName: "Morse-Code Translator",
    projectDesc:
      "A JavaScript program that takes some English text as input and returns the morse code equivalent. It was coded using a TDD approach with Jest.",
    tags: ["HTML", "CSS", "JavaScript", "Jest"],
    code: "https://github.com/jeromekithinji/morse-code-translator",
    demo: "https://jeromekithinji.github.io/morse-code-translator/",
    image: morseImage,
  },
  {
    id: 9,
    projectName: "Punk API",
    projectDesc:
      "This project fetches data from an API created by Brewdog containing various pieces of information pertaining to some of their beers. It displays information about each individual beer in a card and users can search or filter by certain attributes to find more specifically what they are looking for.",
    tags: ["ReactJS", "HTML", "CSS"],
    code: "https://github.com/jeromekithinji/punk-api",
    demo: "https://jeromekithinji.github.io/punk-api/",
    image: beerImage,
  },
  {
    id: 10,
    projectName: "Ticket Tracker",
    projectDesc:
      "A web app that allows you to track the number of project tickets different employees within a company have completed. You can change the number for each employee. This was a paired programming task done with two colleagues on the _nology bootcamp.",
    tags: ["ReactJS", "HTML", "CSS"],
    code: "https://github.com/jeromekithinji/ticket-tracker",
    demo: "https://jeromekithinji.github.io/ticket-tracker/",
    image: ticketTrackerImage,
  },
  {
    id: 11,
    projectName: "Pokemon and Kanye Quotes API",
    projectDesc:
      "A web app that fetches data from a 2 APIs. Fetching and displayingg tweets by Kanye West and searching for different Pokemons to display their information. Data is randomly fetched and updated through user input in the search bar.",
    tags: ["ReactJS", "HTML", "CSS"],
    code: "https://github.com/jeromekithinji/api-interaction",
    demo: "https://jeromekithinji.github.io/api-interaction/",
    image: kanyePokemonImage,
  },
];

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
