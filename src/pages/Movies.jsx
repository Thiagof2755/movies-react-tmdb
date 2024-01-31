import React, { useEffect, useState } from 'react';
import MediaCard from '../Components/MediaCard';
import styled from 'styled-components';
import {containerStyles,moviesContainerStyles,titleStyles} from '../Components/MediaCardStyled'; 

const Container = styled.div`${containerStyles}`;
const MoviesContainer = styled.div`${moviesContainerStyles}`;
const Title = styled.h2`${titleStyles}`;

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]); // Renomeado de moviestoprated para topRatedMovies

  const getTopRated = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTopRatedMovies(data.results);
    } catch (error) {
      console.error('Error fetching top-rated movies:', error);
    }
  };

  useEffect(() => {
    const topRatedUrl = `${movieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    getTopRated(topRatedUrl); // Renomeado de topratedUrl para topRatedUrl
  }, []);

  useEffect(() => {
    const topRatedUrl = `${movieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    const interval = setInterval(() => {
      getTopRated(topRatedUrl);
    }, 60000);
    return () => clearInterval(interval); // Adicionado a função de limpeza
  }, []);

  return (
    <Container>
      <Title>Filmes Bem Avaliados</Title>
      <MoviesContainer>
        {topRatedMovies.length > 0 &&
          topRatedMovies.map((media) => <MediaCard key={media.id} media={media} type="movie" />)}
      </MoviesContainer>
    </Container>
  );
};

export default Movies;
