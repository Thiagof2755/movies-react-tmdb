import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Body = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                const apiKey = import.meta.env.VITE_API_KEY;
                const apiUrl = import.meta.env.VITE_API;
                const response = await fetch(`${apiUrl}popular?api_key=${apiKey}`);
                const data = await response.json();

                const randomImage = data.results[Math.floor(Math.random() * data.results.length)].backdrop_path;
                const imageUrl = `${import.meta.env.VITE_IMG_BACK}${randomImage}`;

                setBackgroundImage(imageUrl);
            } catch (error) {
                console.error('Erro ao obter imagem da API do TMDb:', error);
            }
        };

        fetchRandomImage();
    }, [location]);

    const isMoviesOrTVPage = location.pathname.includes('/movie') || location.pathname.includes('/tv');

    // Não renderize o Body se estiver na página "Movies"
    if (isMoviesOrTVPage) {
        return null;
    }

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                maskImage: 'linear-gradient(180deg, transparent 2%, black 25%, black 75%, transparent 98%',
                opacity: 0.2,
                filter: 'saturate(0%) blur(2px) grayscale(100%)',
                position: 'absolute',

                
                '@media (maxWidth: 768px)':{
                    position: 'relative',
                    maxWidth: '100%', // Ajuste para ocupar toda a largura disponível
                    height: '50vh', // Ajuste conforme necessário
                    alignItems: 'center',
                    opacity: 0,
                    filter: 'saturate(0%) blur(2px) grayscale(20%)',
                },
            }}
        ></div>
    );
};

export default Body;
