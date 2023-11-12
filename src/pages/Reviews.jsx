import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {API_URL} from 'components/config';
import Loader from 'components/Loader/Loader';
import { StyledMovies } from './MoviesPage.styled';
axios.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZkNWMzNWQxY2Y0ZjI3MTQzMGVhNTcwYTY5NWU5YyIsInN1YiI6IjY1NGY2ZTA5ZDQ2NTM3MDBmZTM1ZGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psMl8hPRoscle1q5_VKpQUVYxDapYRduGZdJRGatNVg";
axios.defaults.headers.common["accept"] = "application/json";

const MovieReviews = () => {
  const { movieId } = useParams();
 
  const [reviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${API_URL}/movie/${movieId}/reviews?language=en-US&page=1`
        );
        setMovieReviews(data.results);
       
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <StyledMovies>
        {error !== null && <p className="error-bage">{error}</p>}
        {isLoading && <Loader />}
        {reviews !== null && (
        <ul className="movieList">
            {reviews.map(review => {
            return (
                <li key={review.id}>
                    
                    <h3 className="itemTitle">Author: {review.author}</h3>
                    <p> {review.content} </p>
            
                </li>);
            })}
        </ul>)};
    </StyledMovies>
    
  );
    
};


export default MovieReviews;