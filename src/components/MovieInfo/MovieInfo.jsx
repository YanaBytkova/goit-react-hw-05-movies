import React from 'react';
import css from './MovieInfo.module.css';
const MovieInfo = ({ movieDetails }) => {

    return (
        
        <div className={css.movieDetails}>
        <div>
            <img src={`http://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} className="movie-image" width='300px'/>  
        </div>
          
        <div>
            <h2>{movieDetails.title}</h2>
            <p>User Scoore: {movieDetails.vote_count} &#37;</p>
            <h3> Overview</h3>
            <p> {movieDetails.overview} </p>
            <h4> Genres </h4>
            <p className={css.genres}> {movieDetails.genres.map(genry => {
             return ( <span key={genry.id}> {genry.name}</span>)
            })} </p> 

        </div>
    
    </div>
    );
}

export default MovieInfo;