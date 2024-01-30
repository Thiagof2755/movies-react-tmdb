import React, { useEffect, useState } from 'react';
import MovieCard from '../Components/MovieCard'; // Add missing import statement
import styled from 'styled-components';
const Container = styled.div`
  display: column;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box
  align-items: center;
  padding-bottom: 0;

  @media (max-width: 768px) {
      margin: 0 auto;
      max-width: 390px;
      width: 100%; 
      box-sizing: border-box
      justify-content: center;
  }
`;

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }
`;

const Title = styled.h2`
@media (max-width: 768px) {
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: left;
  margin-left: 2rem;

  font-size: 1rem;
  
}
`;

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movies = () => {
  const [moviestoprated, setmoviestoprated] = useState([]);

  const gettopRated = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setmoviestoprated(data.results);
    } catch (error) {
      console.error('Error fetching top rated movies:', error); // changed from popular to top rated
    }
  };

  useEffect(() => {
    const topratedUrl = `${movieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    gettopRated(topratedUrl);
  }, []);

  useEffect(() => {
    const topratedUrl = `${movieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    const interval = setInterval(() => {
      gettopRated(topratedUrl);
    }, 60000);
    return () => clearInterval(interval); // added cleanup function
  }, []);

  return (
    <Container>
      <Title>Filmes Bem Avaliados</Title>
      <MoviesContainer>
        {moviestoprated.length > 0 && // changed from popularMovies to moviestoprated
          moviestoprated.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </MoviesContainer>
    </Container>
  );
};

export default Movies;