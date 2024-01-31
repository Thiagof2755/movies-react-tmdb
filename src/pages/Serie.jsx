import React, { useEffect, useState } from 'react';
import MediaCard from '../Components/MediaCard';
import styled from 'styled-components';
import { containerStyles, moviesContainerStyles, titleStyles } from '../Components/MediaCardStyled'; 

const Container = styled.div`${containerStyles}`;
const MoviesContainer = styled.div`${moviesContainerStyles}`;
const Title = styled.h2`${titleStyles}`;
const serieURL = import.meta.env.VITE_API_SERIE;
const apiKey = import.meta.env.VITE_API_KEY;

const Serie = () => {
  const [popularSeries, setPopularSeries] = useState([]);

  const getPopular = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPopularSeries(data.results);
    } catch (error) {
      console.error('Error fetching popular series:', error);
    }
  };

  useEffect(() => {
    const popularUrl = `${serieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    getPopular(popularUrl);
  }, []);

  useEffect(() => {
    const popularUrl = `${serieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    const interval = setInterval(() => {
      getPopular(popularUrl);
    }, 60000); // Atualiza a cada 1 minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Title>Series Bem Avaliadas</Title>
      <MoviesContainer>
        {popularSeries.map((media) => <MediaCard key={media.id} media={media} type="movie" />)}
      </MoviesContainer>
    </Container>
  );
};

export default Serie;
