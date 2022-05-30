import React from 'react'
import './portfolio.css'
import CCMoviesIMG from '../../assets/CCMovies.PNG'

const data = [
  {
    id: 1,
    image: CCMoviesIMG,
    title: 'CreatureCodes Movies',
    github: 'https://github.com/Creature-03/CreatureCodesMovies',
    demo: 'https://creature-codes-movies.netlify.app'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolioContainer">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className='portfolioItem' key={id}>
                <div className="portfolioItemImg">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                <div className="porfolioItemCTA">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio