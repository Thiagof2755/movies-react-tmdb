import React, { useEffect, useState } from 'react';
import  MovieCard  from '../Components/MovieCard'; // Add missing import statement
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
  }
`;

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
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

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopular = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPopularMovies(data.results);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  useEffect(() => {
    const popularUrl = `${movieURL}popular?api_key=${apiKey}&language=pt-BR`;
    getPopular(popularUrl);
  }, []);

  useEffect(() => {
    const popularUrl = `${movieURL}popular?api_key=${apiKey}&language=pt-BR`;
    const interval = setInterval(() => {
      getPopular(popularUrl);
    }, 60000); // Atualiza a cada 1 minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Title>Filmes Populares</Title>
      <MoviesContainer>
        {popularMovies.length > 0 &&
          popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </MoviesContainer>
    </Container>
  );
};

export default Home;
