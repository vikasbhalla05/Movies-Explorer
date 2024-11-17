import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";

const Movie = () => {
    const { id } = useParams();
    const {
        singleMovie: { singleMovie, movieLoading, movieError },
        setMovieId,
    } = useGlobalContext();

    useEffect(() => {
        setMovieId(id);
    }, [id, setMovieId]);

    if (movieLoading) {
        return (
            <section className="flex justify-center items-center py-20">
                <p className="text-lg text-grey2">Loading movie details...</p>
            </section>
        );
    }

    if (movieError) {
        return (
            <section className="flex justify-center items-center py-20">
                <p className="text-lg text-red-500">
                    Error fetching movie details: {movieError.message}
                </p>
            </section>
        );
    }

    return (
        <section className="grid items-center justify-center px-6 py-24 md:px-10 xl:px-20">
            {singleMovie && (
                <div className="grid max-w-4xl gap-16">
                    <MovieHeader
                        title={singleMovie.Title}
                        year={singleMovie.Year}
                        genre={singleMovie.Genre}
                    />
                    <MoviePoster poster={singleMovie.Poster} title={singleMovie.Title} />
                    <MovieDetails
                        director={singleMovie.Director}
                        actors={singleMovie.Actors}
                        plot={singleMovie.Plot}
                    />
                </div>
            )}
        </section>
    );
};

function MovieHeader({ title, year, genre }) {
    return (
        <section className="text-center">
            <h1 className="text-5xl font-bold text-grey1 dark:text-grey9">{title}</h1>
            <p className="mt-4 text-lg text-grey6 dark:text-grey4">
                <span className="font-semibold">Year:</span> {year} |{" "}
                <span className="font-semibold">Genre:</span> {genre}
            </p>
        </section>
    );
}

function MoviePoster({ poster, title }) {
    return (
        <section className="flex items-center justify-center">
            <div className="w-fit overflow-hidden rounded-xl shadow-lg">
                <img src={poster} alt={title} className="w-full" />
            </div>
        </section>
    );
}

function MovieDetails({ director, actors, plot }) {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold text-grey2 dark:text-grey8">
                About the Movie
            </h2>
            <p className="text-grey6 dark:text-grey4">{plot}</p>
            <div className="flex flex-col gap-3">
                <p>
                    <span className="font-semibold text-grey3 dark:text-grey7">
                        Director:
                    </span>{" "}
                    {director}
                </p>
                <p>
                    <span className="font-semibold text-grey3 dark:text-grey7">
                        Cast:
                    </span>{" "}
                    {actors}
                </p>
            </div>
        </section>
    );
}

export default Movie;
