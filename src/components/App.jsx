import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));


export const App = () => {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Layout>
  );
};
