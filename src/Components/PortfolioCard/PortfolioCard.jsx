import React from 'react'
import './PortfolioCard.scss';
import GuessingImage from '../../Assets/images/GuessingGame.png'

const PortfolioCard = () => {
  return (
        <div className="portfolio__card">
            <input type="checkbox" id="card2" className="details" aria-hidden="true" />
            <div className="card__content">
                <div className="card__front" style={GuessingImage}>
                    <div className="card__inner">
                        <h2>Word Guessing Game</h2>
                        <div className="tech_Stack">
                            <i className="fab fa-css3"></i>                            
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-js-square"></i>                           
                        </div>
                        <label htmlFor="card2" className="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div className="card__back">
                    <div className="card__inner">
                        <div className="project_Link">
                            <div className="icon">
                                <a href="https://github.com/jeromekithinji/game" target="_blank" title="Open the project on Github."><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div className="project_Link">
                            <div className="icon">
                                <a href="https://jeromekithinji.github.io/game/" target="_blank" title="Open the game on a new window."><i className="fas fa-rocket"></i></a>
                            </div>
                        </div>
                        <div className="project_Description">
                            <p>A calculator implemented using HTML, CSS and JavaScript. It utilises display grid to arrange buttons in the appropriate positions and display flex for responsiveness on both PC and Mobile.</p><br/>
                            <p>Click the icons above for Github page or to see it in action.</p>
                        </div>
                        <label htmlFor="card2" className="button return" aria-hidden="true">
                            <i className="fas fa-arrow-left"></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PortfolioCard