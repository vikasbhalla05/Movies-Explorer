import React from 'react';
import { useGlobalContext } from '../context/AppContext';
import MovieCard from '../components/MovieCard';

const Home = () => {
    const { name, movie: { movies, isLoading, error } } = useGlobalContext();

    return (
        <div>
            <h1>Home</h1>

            {/* Loading and Error States */}
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {/* Movies Data */}
            {movies?.Response === "True" ? (
                <div className='grid grid-cols-5 gap-5'>
                    {movies.Search.map((movie, index) => (
                        <MovieCard key={index} data={movie} />
                    ))}
                </div>
            ) : (
                <h1>{movies?.Error || 'No movies found'}</h1>
            )}
        </div>
    );
};

export default Home;
