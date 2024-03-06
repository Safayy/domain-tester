import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(inputValue);
        setInputValue(''); // Clear input after submitting
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search.." 
                name="domain" 
                value={inputValue}
                onChange={handleChange}
            />
            {/* <button type="submit">Search Domain</button> */}
        </form>
    );
}

export default SearchBar;