import React, { createContext, useContext, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
const apiKey = process.env.REACT_APP_ONDB_API_KEY

const AppContext = createContext();
const queryClient = new QueryClient();

// Function to fetch movie data
const fetchMovies = async (term) => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${term}`);
    return response.data;
};

const fetchMovieById = async (id) => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
    return response.data;
};

const AppContextProvider = ({ children }) => {
    const [searchTerm, setsearchTerm] = useState("love")
    const [movieId, setMovieId] = useState("")

    const { data: movies, isLoading, error } = useQuery(['movies', searchTerm], () => fetchMovies(searchTerm), {
        keepPreviousData: true,
    });

    const { data: singleMovie, isLoading: movieLoading, error: movieError } = useQuery(
        ['movie', movieId],
        () => fetchMovieById(movieId),
        { enabled: !!movieId } // Only fetch when movieId is set
    );

    return (
        <AppContext.Provider value={{
            name: "vikas", movie: { movies, isLoading, error }, searchTerm, setsearchTerm, singleMovie: { singleMovie, movieLoading, movieError }, movieId,
            setMovieId,
        }}>
            {children}
        </AppContext.Provider>
    );
};

const AppProviderWrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        <AppContextProvider>{children}</AppContextProvider>
    </QueryClientProvider>
);

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProviderWrapper, AppContext, useGlobalContext };
