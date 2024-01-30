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
        width: 140px;  /* Ajuste o tamanho desejado para telas de telefone */
        margin: 10px 5px;
    }

    &:hover {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
        transform: scale(1.05);
    }
`;

const MovieImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;

const MovieTitle = styled.h2`
    font-size: 1.2em;
    margin: 10px 0;
`;

const MovieRating = styled.p`
    color: #f4c10f;
    font-size: 1em;
`;

const MovieLink = styled(Link)`
    text-decoration: none;
    color: #ccc;
    font-weight: bold;
`;

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <Card>
            <MovieImage src={imageUrl + movie.poster_path} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieRating>
                <FaStar /> {movie.vote_average}
            </MovieRating>
            {showLink && <MovieLink to={`/movie/${movie.id}`}>Detalhes</MovieLink>}
        </Card>
    );
};

export default MovieCard;
