import React from "react";
import { useGlobalContext } from "../context/AppContext";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
    const {
        movie: { movies, isLoading, error },
        searchTerm,
        setsearchTerm,
    } = useGlobalContext();

    return (
        <section className="flex flex-col items-center px-6 py-16 md:px-10 xl:px-20">
            {/* Header */}
            <header className="mb-10 text-center">
                <h1 className="text-5xl font-bold text-grey1 dark:text-grey9">
                    Explore Movies
                </h1>
                <p className="mt-2 text-lg text-grey6 dark:text-grey5">
                    Find information about your favorite movies!
                </p>
            </header>

            {/* Search Bar */}
            <div className="w-full max-w-3xl mb-12">
                <SearchBar searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
            </div>

            {/* Search Results */}
            <section className="w-full">
                <h2 className="text-2xl font-semibold text-grey2 dark:text-grey8">
                    Search Results for{" "}
                    <span className="font-bold text-grey3 dark:text-grey7">
                        {searchTerm}
                    </span>
                </h2>

                {/* Loading State */}
                {isLoading && (
                    <p className="mt-4 text-lg text-grey6 dark:text-grey5">
                        Loading movies...
                    </p>
                )}

                {/* Error State */}
                {error && (
                    <p className="mt-4 text-lg text-red-500">
                        Error: {error.message || "Something went wrong"}
                    </p>
                )}

                {/* Movies Grid */}
                {movies?.Response === "True" ? (
                    <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {movies.Search.map((movie, index) => (
                            <MovieCard key={index} data={movie} />
                        ))}
                    </div>
                ) : (
                    <p className="mt-10 text-lg text-grey6 dark:text-grey5">
                        {movies?.Error || "No movies found."}
                    </p>
                )}
            </section>
        </section>
    );
};

export default Home;
