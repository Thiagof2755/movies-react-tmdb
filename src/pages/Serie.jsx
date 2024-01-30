import React, {  useEffect, useState } from 'react'
import styled from 'styled-components';
import SerieCard from '../Components/SerieCard';

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



const movieURL = import.meta.env.VITE_API_SERIE;
const apiKey = import.meta.env.VITE_API_KEY;

console.log(movieURL, apiKey);

const Serie = () => {

  const[popularserie, setpopularSerie] = useState([]);


  const getPopular = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setpopularSerie(data.results);
    } catch (error) {
      console.error('Error fetching popular serie:', error);
    }
  };

  useEffect(() => {
    const popularUrl = `${movieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    getPopular(popularUrl);
  
  },[]);
  useEffect(() => {
    const popularUrl = `${movieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    const interval = setInterval(() => {
      getPopular(popularUrl);
    }, 60000); // Atualiza a cada 1 minuto

    return () => clearInterval(interval);
  }, []); 

  return (
    <Container>
      <Title>Series Bem Avaliadas</Title>
      <MoviesContainer>
        {popularserie.map((serie) => (
          <SerieCard key={serie.id} serie={serie} />
        ))}
      </MoviesContainer>
    </Container>
  )
}

export default Serie