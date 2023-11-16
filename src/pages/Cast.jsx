
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { StyledMovies } from './MoviesPage.styled';
import { CastRequest } from 'components/api-services';


const MovieCast = () => {
  const { movieId } = useParams();
 
  const [casts, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const { data } = await CastRequest(movieId);
        setMovieCast(data.cast);
       
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <StyledMovies>
        {error !== null && <p className="error-bage">{error}</p>}
        {isLoading && <Loader />}
        {casts !== null && (
        <ul className="movieList">
            {casts.map(cast => {
            return (
                <li key={cast.id}>
                    <img src={`http://image.tmdb.org/t/p/w200${cast.profile_path}`} alt={cast.name} className="movie-image"/>
                    <h3 className="itemTitle">{cast.name}</h3>
                    <p> Character: {cast.character}</p>
            
                </li>);
            })}
        </ul>)};
    </StyledMovies>
    
  );
    
};

export default MovieCast;