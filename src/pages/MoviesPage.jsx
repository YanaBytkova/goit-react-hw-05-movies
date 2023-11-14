import axios from 'axios';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API_URL } from 'components/config';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
axios.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZkNWMzNWQxY2Y0ZjI3MTQzMGVhNTcwYTY5NWU5YyIsInN1YiI6IjY1NGY2ZTA5ZDQ2NTM3MDBmZTM1ZGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psMl8hPRoscle1q5_VKpQUVYxDapYRduGZdJRGatNVg";
axios.defaults.headers.common["accept"] = "application/json";

// rcc - react class component
// rafce - react arrow function expression component export default

const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const location = useLocation();
  const queryValue = searchParams.get('query'); 
  // CTRL + SHIFT + L

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = e.currentTarget.elements.searchKey.value;
    setSearchParams({ query: value });
    form.reset();
  };

  useEffect(() => {
    if (!queryValue) return;
    const fetchSearchedMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await axios.get(
            `${API_URL}/search/movie?query=${queryValue}&language=en-US&page=1`
        );
        setSearchedMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchedMovies();
  }, [queryValue]);

  return (
    <div>
      <SearchForm onSubmit={onFormSubmit} />  
      {/* <form onSubmit={onFormSubmit}>
        <label>
          <input type="text" name="searchKey" required placeholder="Enter movie" />
        </label>
        <button type="submit">Search</button>
      </form> */}
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      {searchedMovies !== null && (<MoviesList movies={searchedMovies} />)}
        
    </div>
  );
};

export default MoviePage;