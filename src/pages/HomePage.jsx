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
        // console.log(`${API_URL}/trending/all/day?language=en-US&key=${API_KEY}`);
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

//   fetchPostComments = async () => {
//     try {
//       this.setState({
//         isLoading: true,
//       });
//       const { data } = await axios.get(
//         `https://jsonplaceholder.typicode.com/comments?postId=${this.state.selectedPostId}`
//       );

//       this.setState({
//         comments: data,
//       });
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       this.setState({
//         isLoading: false,
//       });
//     }
//   };

//   onSelecPostId = postId => {
//     this.setState({
//       selectedPostId: postId,
//     });
//   };

  componentDidMount() {
    this.fetchMovies();
  }

//   componentDidUpdate(_, prevState) {
//     if (prevState.selectedPostId !== this.state.selectedPostId) {
//       this.fetchPostComments();
//     }
//   }

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
          {/* <ul className="commentsList">
            {this.state.selectedPostId !== null && (
              <li className="commentsListItem">
                Selected post id: {this.state.selectedPostId}
              </li>
            )}
            {this.state.comments !== null &&
              this.state.comments.map(comment => {
                return (
                  <li key={comment.id} className="commentsListItem">
                    <h2 className="commentTitle">Name: {comment.name}</h2>
                    <h3 className="commentEmail">Email: {comment.email}</h3>
                    <p className="commentBody">
                      <b>Body:</b> {comment.body}
                    </p>
                  </li>
                );
              })}
          </ul> */}
        </div>
      </StyledMovies>
    );
  }
}

export default HomePage;