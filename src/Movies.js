import React from 'react'
import './Movies.css'


const Movies = ({Title, Year, Poster}) => {
    return (
        <div className='movie-div'>
            <img src={Poster} alt={Title} />
            <h2>{Title}</h2>
            <h5>{ Year}</h5>
        </div>
  )
}

export default Movies