import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Card = styled.div`
  background-color: #242424;
  width: 200px;
  border-radius: 10px;
  margin: 15px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(1, 1, 1, 1);
  transition: all 0.3s ease;


  @media (max-width: 600px) {
    width: 130px;
    height: auto;
    margin: 0 auto;
  }

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  @media (max-width: 600px) {
    margin: 0;
    padding: 0;
  }
`;

const MediaTitle = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
  @media (max-width: 600px) {
    margin: 0;
    padding: 0;
  }
`;

const MediaRating = styled.p`
  color: #f4c10f;
  font-size: 1em;
  @media (max-width: 600px) {
    margin: 0;
    padding: 0;
  }
`;

const MediaLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  font-weight: bold;
  
  @media (max-width: 600px) {
    margin: 0;
    padding: 0;
  }
`;

const imageUrl = import.meta.env.VITE_IMG;

const MediaCard = ({ media, type, showLink = true }) => {

  
  return (
    <Card>
      <MediaImage src={imageUrl + media.poster_path} alt={media.title || media.name} />
      <MediaTitle>{media.title || media.name}</MediaTitle>
      <MediaRating>
        <FaStar /> {media.vote_average}
      </MediaRating>
        {showLink && <MediaLink to={`/${type}/${media.id}`}>Detalhes</MediaLink>}

    </Card>
  );
};

export default MediaCard;
