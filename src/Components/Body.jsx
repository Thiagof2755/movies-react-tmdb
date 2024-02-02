import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import backgroundImage1 from '../assets/Back/1.jpeg';
import backgroundImage2 from '../assets/Back/2.jpeg';
import backgroundImage3 from '../assets/Back/3.jpeg';
import backgroundImage4 from '../assets/Back/4.jpeg';
import backgroundImage5 from '../assets/Back/5.jpeg';
import backgroundImage6 from '../assets/Back/6.jpeg';
import backgroundImage7 from '../assets/Back/7.jpeg';
import backgroundImage8 from '../assets/Back/8.jpeg';
import backgroundImage9 from '../assets/Back/9.jpeg';

const backgroundImages = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5,
    backgroundImage6,
    backgroundImage7,
    backgroundImage8,
    backgroundImage9,
];

const getRandomImage = () => {
    const randomImageNumber = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomImageNumber];
}; 

const Body = () => {

    const navigate = useNavigate();
    const location = useLocation();

    // Verifique se a rota atual é "Movies"
    const isMoviesOrTVPage = location.pathname.includes('/movie') || location.pathname.includes('/tv');

    // Não renderize o Body se estiver na página "Movies"
    if (isMoviesOrTVPage) {
        return null;
    }

    return (
        <div
            style={{
                backgroundImage: `url(${getRandomImage()})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                maskImage: 'linear-gradient(180deg, transparent 0.1%, black 25%, black 75%, transparent 99%)',
                opacity: 0.2,
                filter: 'saturate(0%) blur(2px) grayscale(100%)',
                position: 'absolute',  // Adicione esta linha

                // Início da regra @media para telas móveis
                '@media (max-width: 768px)': {
                    position: 'absolute',
                    maxWidth: '390px',
                    height: '100vh',
                    alignItems: 'center',
                },
                // Fim da regra @media para telas móveis
            }}
        ></div>
    );
};

export default Body;
