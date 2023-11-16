import axios from 'axios';
import { API_URL } from 'components/config';
axios.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZkNWMzNWQxY2Y0ZjI3MTQzMGVhNTcwYTY5NWU5YyIsInN1YiI6IjY1NGY2ZTA5ZDQ2NTM3MDBmZTM1ZGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psMl8hPRoscle1q5_VKpQUVYxDapYRduGZdJRGatNVg";
axios.defaults.headers.common["accept"] = "application/json";

export const HomePageRequest = () => {
    return axios.get(
        `${API_URL}/trending/movie/day?language=en-US`
      );
 
}
export const FindMovieRequest = (queryValue) => {
    return axios.get(
        `${API_URL}/search/movie?query=${queryValue}&language=en-US&page=1`
      );
 
}

export const CastRequest = (movieId) => {
    return axios.get(
        `${API_URL}/movie/${movieId}/credits?language=en-US`
      );
 
}

export const ReviewsRequest = (movieId) => {
    return axios.get(
        `${API_URL}/movie/${movieId}/reviews?language=en-US&page=1`
      );
 
}


