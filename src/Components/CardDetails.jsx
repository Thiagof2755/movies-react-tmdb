import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 0;

  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 390px;
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const MediaImage = styled.img`
  width: 400px;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
`;

const MediaTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MediaRating = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  color: #f1c40f;
`;

const MediaLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const MediaSinopse = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Elenco = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  overflow-x: auto;
  box-sizing: border-box;

  h2 {
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    gap: 20px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      img {
        width: 100px;
        height: 150px;
        object-fit: cover;
        border-radius: 5px;
      }

      p {
        font-size: 14px;
        text-align: center;
      }
    }
  }
`;

const imageUrl = import.meta.env.VITE_IMG;
const movieURL = import.meta.env.VITE_API;
const tvURL = import.meta.env.VITE_API_SERIE;
const apiKey = import.meta.env.VITE_API_KEY;

const CardDetails = ({ media, type, showLink = false }) => {
  const [movie, setMovie] = useState(null);
  const [tv, setTv] = useState(null);

  const getDetailsMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
    console.log(data);
  };

  const getDetailsTv = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTv(data);
    console.log(data);
  };

  useEffect(() => {
    if (type === 'movie') {
      const movieUrl = `${movieURL}${media.id}/credits?api_key=${apiKey}&language=pt-BR`;
      getDetailsMovies(movieUrl);
    } else {
      const tvUrl = `${tvURL}${media.id}/credits?api_key=${apiKey}&language=pt-BR`;
      getDetailsTv(tvUrl);
    }
  }, []);

  return (
    <Container>
      <Card>
        <div>
          <MediaImage src={imageUrl + media.poster_path} alt={media.title || media.name} />
        </div>
        <div>
          <MediaTitle>{media.title || media.name}</MediaTitle>
          <MediaSinopse>{media.overview}</MediaSinopse>
          <MediaRating>
            <FaStar /> {media.vote_average}
          </MediaRating>
          {showLink && <MediaLink to={`/${type}/${media.id}`}>Detalhes</MediaLink>}
        </div>
      </Card>
      <Elenco>
        <h2>Elenco</h2>
        <ul>
          {(movie?.cast || tv?.cast)?.slice(0, 15).map((cast) => (
            <li key={cast.id}>
              <img src={imageUrl + cast.profile_path} alt={cast.name} />
              <p>{cast.name}</p>
            </li>
          ))}
        </ul>
      </Elenco>
    </Container>
  );
};

export default CardDetails;
