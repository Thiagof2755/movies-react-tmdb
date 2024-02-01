import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardDetails from '../Components/CardDetails';
import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.backgroundImage});
  opacity: 0.2;
  filter: saturate(0%);
  filter: blur(2px);
  filter: grayscale(100%); 
  mask-image: linear-gradient(180deg, transparent 2%, black 25%, black 75%, transparent 98%); 
  height: 100%;
  width: 100%;
  
`;

const Page = ({ backgroundImage, children }) => (
  <div style={{ position: 'relative' }}>
    <Background backgroundImage={backgroundImage} />
    <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
  </div>
);


const Movie = () => {
  const { id, type } = useParams();
  const [movie, setMovie] = useState(null);
  const [tv, setTv] = useState(null);

  const imgURL = import.meta.env.VITE_IMG_BACK;
  const movieURL = import.meta.env.VITE_API;
  const tvURL = import.meta.env.VITE_API_SERIE;
  const apiKey = import.meta.env.VITE_API_KEY;

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
    console.log(data);
  };

  const getTv = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTv(data);
    console.log(data);
  };

  useEffect(() => {
    if (type === "movie") {
      const movieUrl = `${movieURL}${id}?api_key=${apiKey}&language=pt-BR`;
      console.log(movieUrl);
      getMovie(movieUrl);
    } else {
      const tvUrl = `${tvURL}${id}?api_key=${apiKey}&language=pt-BR`;
      getTv(tvUrl);
      console.log(tvUrl);
    }
  }, [id, type]);

  const backgroundImage = `${imgURL}${type === "movie" ? movie?.backdrop_path : tv?.backdrop_path}`;

  return (
    <Page backgroundImage={backgroundImage}>
      {(movie && type === "movie") && (
        <CardDetails key={movie.id} media={movie} type="movie" />
      )}
      {(tv && type === "tv") && (
        <CardDetails key={tv.id} media={tv} type="tv" />
      )}
    </Page>
  );
};

export default Movie;