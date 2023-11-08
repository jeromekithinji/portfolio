import logo from './logo.svg';
import './App.css';
import PortfolioCard from './Components/PortfolioCard/PortfolioCard';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Sections/hero/hero';
import About from './Sections/about/about';
import Porfolio from './Sections/portfolio/porfolio';
import Experience from './Sections/experience/experience';


function App() {
  return (
    <div className="App">
      <div className="App__nav">
        <Navbar />
      </div>
      <div className="App__content">
        <div className="App__content-sections">
            <section className="App__content-section">
                <Hero />
            </section>
            <section className="App__content-section">
                <About />
            </section>
            <section className="App__content-section">
                <Porfolio />
            </section>
            <section className="App__content-section">
                <Experience />
            </section>
        </div>
      </div>
    </div>
  );
}

export default App;
