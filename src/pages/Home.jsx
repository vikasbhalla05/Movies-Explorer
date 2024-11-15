import React from 'react';
import { useGlobalContext } from '../context/AppContext';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const { name, movie: { movies, isLoading, error }, searchTerm, setsearchTerm } = useGlobalContext();

    return (
        <div className='flex flex-col items-center'>
            <h1>Home</h1>

            <SearchBar searchTerm={searchTerm} setsearchTerm={setsearchTerm} />

            <h1>Search Result for {searchTerm}</h1>

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
