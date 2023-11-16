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
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { StyledMovies } from './MoviesPage.styled';
axios.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZkNWMzNWQxY2Y0ZjI3MTQzMGVhNTcwYTY5NWU5YyIsInN1YiI6IjY1NGY2ZTA5ZDQ2NTM3MDBmZTM1ZGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psMl8hPRoscle1q5_VKpQUVYxDapYRduGZdJRGatNVg";
axios.defaults.headers.common["accept"] = "application/json";

const MovieCast = lazy(() => import('pages/Cast'));
const MovieReviews = lazy(() => import('pages/Reviews'));


const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  console.log("location", location);
  const backLinkRef = useRef(location.state?.from ?? '/');

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
      {movieDetails !== null && ( <MovieInfo movieDetails={movieDetails} />)}
 
      <div className="add-information">
            <h4 > Additional information</h4>
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