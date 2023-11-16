import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { StyledMovies } from './MoviesPage.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import { HomePageRequest } from 'components/api-services';
axios.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZkNWMzNWQxY2Y0ZjI3MTQzMGVhNTcwYTY5NWU5YyIsInN1YiI6IjY1NGY2ZTA5ZDQ2NTM3MDBmZTM1ZGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psMl8hPRoscle1q5_VKpQUVYxDapYRduGZdJRGatNVg";
axios.defaults.headers.common["accept"] = "application/json";

const HomePage = () => {

  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const { data } = await HomePageRequest();
        setMovies(data.results);
       
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);


    return (
      <StyledMovies>
        <h1>Trending today:</h1>

        {error !== null && (
          <p className="error-bage">
            Oops, some error occured... Error message: {error}
          </p>
        )}
        {isLoading && <Loader />}
        {movies !== null && (<MoviesList movies={movies} />)}  
       
      </StyledMovies>
    );
  
}

export default HomePage;