import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ContainerStyled, CardStyled, MediaImageStyled, MediaTitleStyled, MediaRatingStyled, MediaLinkStyled , MediaSinopseStyled , ElencoStyled} from '../Styled/CardDetails';
import styled from 'styled-components';


const Container = styled.div`${ContainerStyled}`;
const Card = styled.div`${CardStyled}`;
const MediaImage = styled.img`${MediaImageStyled}`;
const MediaTitle = styled.h2`${MediaTitleStyled}`;
const MediaRating = styled.p`${MediaRatingStyled}`;
const MediaLink = styled(Link)`${MediaLinkStyled}`;
const MediaSinopse = styled.p`${MediaSinopseStyled}`;
const Elenco = styled.div`${ElencoStyled}`;

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
              <h1>{cast.name}</h1>
              <p>{cast.character}</p>
            </li>
          ))}
        </ul>
      </Elenco>
    </Container>
  );
};

export default CardDetails;
