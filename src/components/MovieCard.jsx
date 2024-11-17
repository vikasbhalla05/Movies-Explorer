import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ data }) => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate(`/movie/${data.imdbID}`);
    };

    return (
        <div
            className="flex flex-col items-center justify-between p-5 border rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-800"
            onClick={redirect}
        >
            {/* Movie Poster */}
            <div className="w-full h-56 overflow-hidden mb-4">
                <img
                    src={data.Poster}
                    alt={data.Title}
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </div>

            {/* Movie Title */}
            <h2 className="text-center text-lg font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
                {data.Title}
            </h2>
        </div>
    );
};

export default MovieCard;
