import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { StyledMovies } from './MoviesPage.styled';
import { ReviewsRequest } from 'components/api-services';


const MovieReviews = () => {
  const { movieId } = useParams();
 
  const [reviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const { data } = await ReviewsRequest(movieId);
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