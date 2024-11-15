import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/AppContext';

const Movie = () => {
    const { id } = useParams();
    const { singleMovie: { singleMovie, movieLoading, movieError }, setMovieId } = useGlobalContext();

    // Set the movieId in the context when the component mounts or when id changes
    useEffect(() => {
        setMovieId(id);
    }, [id, setMovieId]);

    return (
        <div>
            {movieLoading && <p>Loading movie details...</p>}
            {movieError && <p>Error fetching movie details: {movieError.message}</p>}
            {singleMovie && (
                <div>
                    <h1>{singleMovie.Title}</h1>
                    <p><strong>Year:</strong> {singleMovie.Year}</p>
                    <p><strong>Genre:</strong> {singleMovie.Genre}</p>
                    <p><strong>Plot:</strong> {singleMovie.Plot}</p>
                    <p><strong>Director:</strong> {singleMovie.Director}</p>
                    <p><strong>Actors:</strong> {singleMovie.Actors}</p>
                    <img src={singleMovie.Poster} alt={singleMovie.Title} />
                </div>
            )}
        </div>
    );
};

export default Movie;
