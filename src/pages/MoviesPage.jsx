
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { FindMovieRequest } from 'components/api-services';


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
        const { data } = await FindMovieRequest(queryValue);
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
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      {searchedMovies !== null && (<MoviesList movies={searchedMovies} />)}
        
    </div>
  );
};

export default MoviePage;