import React from 'react';
import './SearchButton.css';

const SearchButton = (props) => {
    return (
        <button type="submit" className="search" id="button_search">{props.name}</button>
    );
};

export default SearchButton;
