
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {API_URL} from 'components/config';
import Loader from 'components/Loader/Loader';
import { StyledMovies } from './MoviesPage.styled';
axios.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZkNWMzNWQxY2Y0ZjI3MTQzMGVhNTcwYTY5NWU5YyIsInN1YiI6IjY1NGY2ZTA5ZDQ2NTM3MDBmZTM1ZGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psMl8hPRoscle1q5_VKpQUVYxDapYRduGZdJRGatNVg";
axios.defaults.headers.common["accept"] = "application/json";

const MovieCast = () => {
  const { movieId } = useParams();
 
  const [casts, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${API_URL}/movie/${movieId}/credits?language=en-US`
        );
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
                    <img src={`${API_URL}/movie/${movieId}/credits` + cast.profile_path} alt={cast.name} className="movie-image"/>
                    <h3 className="itemTitle">{cast.name}</h3>
                    <p> Character: {cast.character}</p>
            
                </li>);
            })}
        </ul>)};
    </StyledMovies>
    
  );
    
};

export default MovieCast;