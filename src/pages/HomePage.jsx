import axios from 'axios';
import React from 'react';

import { StyledMovies } from './MoviesPage.styled';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import { API_URL } from 'components/config';
axios.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZkNWMzNWQxY2Y0ZjI3MTQzMGVhNTcwYTY5NWU5YyIsInN1YiI6IjY1NGY2ZTA5ZDQ2NTM3MDBmZTM1ZGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psMl8hPRoscle1q5_VKpQUVYxDapYRduGZdJRGatNVg";
axios.defaults.headers.common["accept"] = "application/json";

export class HomePage extends React.Component {
  state = {
    movies: null,
    cast: null,
    reviews: null,
    selectedMovieName: null,
    isLoading: false,
    error: null,
  };

  fetchMovies = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        `${API_URL}/trending/movie/day?language=en-US`
      );

      this.setState({
        movies: data.results,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };


  componentDidMount() {
    this.fetchMovies();
  }



  render() {
    return (
      <StyledMovies>
        <h1>Trending today:</h1>

        {this.state.error !== null && (
          <p className="error-bage">
            Oops, some error occured... Error message: {this.state.error}
          </p>
        )}
        {this.state.isLoading && <Loader />}
        <div className="listWrapper">
          <ul className="movieList">
            {this.state.movies !== null &&
              this.state.movies.map(movie => {
                return (
                  <li
                    key={movie.id}
                    // onClick={() => this.onSelecPostId(post.id)}
                    className="movieListItem"
                  >
                    <Link to={`/movies/${movie.id}`}>
                      <h2 className="itemTitle">{movie.title}</h2>
                    </Link>
                  </li>
                );
              })}
          </ul>
  
        </div>
      </StyledMovies>
    );
  }
}

export default HomePage;