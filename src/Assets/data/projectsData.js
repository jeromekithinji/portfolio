// import one from '../assets/svg/projects/one.svg'
import calculatorImage from "../images/projects/Calculator.png";
import ticketTrackerImage from "../images/projects/ticket_tracker.png";
import beerImage from "../images/projects/Beer-Api.png";
import kanyePokemonImage from "../images/projects/kanye_pokemon.png";
import guessingImage from "../images/projects/GuessingGame.png";
import morseImage from "../images/projects/MorseCode.png";
import fundi from "../images/projects/Fundi254.png";
import telkomImage from "../images/projects/Telkom.png";

export const projectsData = [
    {
        id: 1,
        projectName: 'Teklom HRM System',
        projectDesc: 'At Telkom Kenya, I re-designed and re-developed the Human Resource Management System. Using ReactJS and Node.js for development and using Figma for designing the interface. I conducted performance testing using Apache JMeter to optimize efficiency under high-traffic loads and ensured cross-platform reliability through browser compatibility testing with Selenium WebDriver.',
        tags: ['Figma', 'ReactJS', 'Node.js'],
        code: '',
        demo: 'https://www.figma.com/proto/oW8f7VkwTWcRkIaXat2JmX/Telkom?type=design&node-id=6-1531&t=SKKipaekttmg1uvM-1&scaling=min-zoom&page-id=1%3A353&starting-point-node-id=6%3A1531&show-proto-sidebar=1&mode=design',
        image: telkomImage,
    }, 
    {
        id: 2,
        projectName: 'Fundi254',
        projectDesc: 'Collaborated with 3 developers on the development of the Fundi254 website and web application. Fundi254 revolutionizes the service industry in Kenya by connecting specialists like handymen and beauticians with customers, like to how Uber connects taxi drivers with passengers. This platform streamlines the process of finding and booking local service professionals, offering a seamless, user-friendly interface for both providers and clients to interact, schedule services, and manage transactions efficiently.',
        tags: ['Vuejs', 'Laravel'],
        code: '',
        demo: 'https://www.254fundi.com/',
        image: fundi,
    },
    {
        id: 3,
        projectName: 'Calculator',
        projectDesc: 'A calculator implemented using HTML, CSS and JavaScript. It utilises display grid to arrange buttons in the appropriate positions and display flex for responsiveness on both PC and Mobile.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        code: 'https://github.com/jeromekithinji/calculator',
        demo: 'https://jeromekithinji.github.io/calculator/',
        image: calculatorImage,
    },
    {
        id: 4,
        projectName: 'Word Guessing Game',
        projectDesc: 'Weather forecast systems and applications predict weather conditions based on multiple parameters.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        code: 'https://github.com/jeromekithinji/game',
        demo: 'https://jeromekithinji.github.io/game/',
        image: guessingImage,
    },
    {
        id: 5,
        projectName: 'Morse-Code Translator',
        projectDesc: 'A JavaScript program that takes some English text as input and returns the morse code equivalent. It was coded using a TDD approach with Jest.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Jest'],
        code: 'https://github.com/jeromekithinji/morse-code-translator',
        demo: 'https://jeromekithinji.github.io/morse-code-translator/',
        image: morseImage,
    },
    {
        id: 6,
        projectName: 'Punk API',
        projectDesc: 'This project fetches data from an API created by Brewdog containing various pieces of information pertaining to some of their beers. It displays information about each individual beer in a card and users can search or filter by certain attributes to find more specifically what they are looking for.',
        tags: ['ReactJS', 'HTML', 'CSS'],
        code: 'https://github.com/jeromekithinji/punk-api',
        demo: 'https://jeromekithinji.github.io/punk-api/',
        image: beerImage,
    },
    {
        id: 7,
        projectName: 'Ticket Tracker',
        projectDesc: 'A web app that allows you to track the number of project tickets different employees within a company have completed. You can change the number for each employee. This was a paired programming task done with two colleagues on the _nology bootcamp.',
        tags: ['ReactJS', 'HTML', 'CSS'],
        code: 'https://github.com/jeromekithinji/ticket-tracker',
        demo: 'https://jeromekithinji.github.io/ticket-tracker/',
        image: ticketTrackerImage,
    },
    {
        id: 8,
        projectName: 'Pokemon and Kanye Quotes API',
        projectDesc: 'A web app that fetches data from a 2 APIs. Fetching and displayingg tweets by Kanye West and searching for different Pokemons to display their information. Data is randomly fetched and updated through user input in the search bar.',
        tags: ['ReactJS', 'HTML', 'CSS'],
        code: 'https://github.com/jeromekithinji/api-interaction',
        demo: 'https://jeromekithinji.github.io/api-interaction/',
        image: kanyePokemonImage,
    },
]

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