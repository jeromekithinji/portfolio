import React from 'react'
import "./portfolio.scss"
import ProjectList from '../../Components/projectList/projectList'

const Porfolio = () => {
  return (
    <div className="portfolio page-section">
        <p className="page__header">
            Portfolio
        </p>
        <div className="portfolio__container">
            <ProjectList />
        </div>
    </div>
  )
}

export default Porfolio