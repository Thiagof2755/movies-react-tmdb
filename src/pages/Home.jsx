import React, { useEffect, useState } from 'react';
import MediaCard from '../components/MediaCard';
import styled from 'styled-components';
import { containerStyles, moviesContainerStyles, titleStyles } from '../Components/MediaCardStyled'; 

const Container = styled.div`${containerStyles}`;
const MoviesContainer = styled.div`${moviesContainerStyles}`;
const Title = styled.h2`${titleStyles}`;

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
          popularMovies.map((media) => <MediaCard key={media.id} media={media} type="movie" />)}
      </MoviesContainer>
    </Container>
  );
};

export default Home;
