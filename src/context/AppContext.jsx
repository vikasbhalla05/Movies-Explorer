import React, { createContext, useContext } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
const apiKey = process.env.REACT_APP_ONDB_API_KEY

const AppContext = createContext();
const queryClient = new QueryClient();

// Function to fetch movie data
const fetchMovies = async () => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=love`);
    return response.data;
};

const AppContextProvider = ({ children }) => {
    const { data: movies, isLoading, error } = useQuery(['movies'], fetchMovies);

    return (
        <AppContext.Provider value={{ name: "vikas", movie: { movies, isLoading, error } }}>
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
