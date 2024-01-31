import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 15px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    width: 140px;
    margin: 10px auto;
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
`;

const MediaTitle = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
`;

const MediaRating = styled.p`
  color: #f4c10f;
  font-size: 1em;
`;

const MediaLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  font-weight: bold;
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
