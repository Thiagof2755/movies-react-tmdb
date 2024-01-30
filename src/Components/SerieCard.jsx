import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

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

const Title = styled.h2`
    font-size: 1.2em;
    margin: 10px 0;
`;

const Rating = styled.p`
    color: #f4c10f;
    font-size: 1em;
`;

const LinkDetails = styled(Link)`
    text-decoration: none;
    color: #ccc;
    font-weight: bold;
`;

const SerieCard = ({ serie, showLink = true }) => {
    return (
        <Card>
            <MediaImage src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.name} />
            <Title>{serie.name}</Title>
            <Rating>
                <FaStar /> {serie.vote_average}
            </Rating>
            {showLink && <LinkDetails to={`/serie/${serie.id}`}>Detalhes</LinkDetails>}
        </Card>
    );
};

export default SerieCard;
