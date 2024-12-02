import React from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
    const handleChange = (event) => {
        props.setSearchOptions(prev => ({ ...prev, term: event.target.value }));
    };
    return (
        <input type="text" placeholder="🔍 Type something..." className="input_search" onChange={handleChange} />
    );
};

export default SearchInput;
