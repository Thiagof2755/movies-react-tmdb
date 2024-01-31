import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import styled, { keyframes } from "styled-components";
import { containerStyles, moviesContainerStyles, titleStyles } from '../Components/MediaCardStyled'; 

const Container = styled.div`${containerStyles}`;
const MoviesContainer = styled.div`${moviesContainerStyles}`;
const Title = styled.h2`${titleStyles}`;

// Defina uma animação de rotação para o spinner
const spinAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spinAnimation} 1s linear infinite;
  margin: 20px auto;
`;

const searchBaseURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [mediaResults, setMediaResults] = useState([]);
  const [loading, setLoading] = useState(true); // Adicione um estado para controlar o carregamento
  const query = searchParams.get("q");

  const getSearchedMedia = async () => {
    const searchWithQueryURL = `${searchBaseURL}?api_key=${apiKey}&query=${query}&language=pt-BR`;
    try {
      const res = await fetch(searchWithQueryURL);
      const data = await res.json();
      const sortedResults = data.results.sort((a, b) => b.popularity - a.popularity);
      setMediaResults(sortedResults);
      setLoading(false); // Marque o carregamento como concluído
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setLoading(false); // Marque o carregamento como concluído, mesmo em caso de erro
    }
  };

  useEffect(() => {
    if (query) {
      setLoading(true); // Inicia o carregamento ao iniciar a busca
      getSearchedMedia();
    }
  }, [query]);

  return (
    <Container>
      <Title>
        Resultados para: <span className="query-text">{query}</span>
      </Title>
      {loading ? (
        <Loader />
      ) : (
        <MoviesContainer>
          {mediaResults && mediaResults.length > 0 ? (
            mediaResults.map((media) => (
              <MediaCard key={media.id} media={media} type="movie" />
            ))
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}
        </MoviesContainer>
      )}
    </Container>
  );
};

export default Search;
