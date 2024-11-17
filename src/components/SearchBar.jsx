import React, { useState } from "react";

const SearchBar = ({ searchTerm, setsearchTerm }) => {
    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

    // Handle input changes locally
    const handleInputChange = (e) => {
        setLocalSearchTerm(e.target.value);
    };

    // Update the global context when input loses focus or Enter is pressed
    const handleBlurOrSubmit = () => {
        const trimmedTerm = localSearchTerm.trim();
        if (trimmedTerm !== searchTerm) {
            setsearchTerm(trimmedTerm);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleBlurOrSubmit();
        }
    };

    return (
        <div className="flex justify-center my-4">
            <input
                type="text"
                value={localSearchTerm}
                onChange={handleInputChange}
                onBlur={handleBlurOrSubmit}
                onKeyDown={handleKeyDown}
                placeholder="Search for movies..."
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );
};

export default SearchBar;
