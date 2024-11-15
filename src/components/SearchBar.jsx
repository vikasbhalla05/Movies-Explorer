import React, { useState } from 'react'

const SearchBar = (props) => {

    const { searchTerm, setsearchTerm } = props

    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

    // Handle input change locally
    const handleInputChange = (e) => {
        setLocalSearchTerm(e.target.value);
    };

    // Update the global context when input loses focus or Enter is pressed
    const handleBlurOrSubmit = () => {
        if (localSearchTerm.trim() !== searchTerm) {
            setsearchTerm(localSearchTerm.trim());
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleBlurOrSubmit();
        }

    };

    return (
        <div>
            <input
                type="text"
                value={localSearchTerm}
                onChange={handleInputChange}
                onBlur={handleBlurOrSubmit}
                onKeyDown={handleKeyDown}
                placeholder="Search for movies"
                className='w-30 border-2 border-blue'
            />
        </div>
    )
}

export default SearchBar