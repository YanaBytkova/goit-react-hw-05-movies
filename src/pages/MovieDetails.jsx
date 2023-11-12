import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from 'components/config';
import Loader from 'components/Loader/Loader';
import { StyledMovies } from './MoviesPage.styled';
axios.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZkNWMzNWQxY2Y0ZjI3MTQzMGVhNTcwYTY5NWU5YyIsInN1YiI6IjY1NGY2ZTA5ZDQ2NTM3MDBmZTM1ZGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psMl8hPRoscle1q5_VKpQUVYxDapYRduGZdJRGatNVg";
axios.defaults.headers.common["accept"] = "application/json";

const MovieCast = lazy(() => import('pages/Cast'));
const MovieReviews = lazy(() => import('pages/Reviews'));

// import PostsComments from './PostsComments';

// /posts/0deqwe
// /posts/dwa2123dwa241
const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  // postId -> '0deqwe';
  // postId -> 'dwa2123dwa241';
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${API_URL}/movie/${movieId}`
        );
        setMovieDetails(data);
       
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <StyledMovies>
      <Link to={backLinkRef.current}>Go back</Link>
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      {movieDetails !== null && (
            // <h1>{movieDetails.title}</h1>
            <div className="movieDetails">
                <div>
                    <img src={`${API_URL}/movie/${movieId}` + movieDetails.poster_path} alt={movieDetails.title} className="movie-image"/>  
                </div>
                  
                <div>
                    <h2>{movieDetails.title}</h2>
                    <p>User Scoore: {movieDetails.vote_count} &#37;</p>
                    <h3> Overview</h3>
                    <p> {movieDetails.overview} </p>
                    <h4> Genres </h4>
                    <p> {movieDetails.genres[0].name} </p> 

                </div>
            
            </div>
      )}
      <div>
            <h4> Additional information</h4>
            <NavLink className="add-information-link" to="MovieCast">
                Cast
            </NavLink>
            <NavLink className="add-information-link" to="MovieReviews">
                Reviews
             </NavLink>         
      </div>
      <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="MovieCast" element={<MovieCast />} />
                <Route path="MovieReviews" element={<MovieReviews />} />
            </Routes>
      </Suspense>
    </StyledMovies>
  );
};

export default MovieDetails;