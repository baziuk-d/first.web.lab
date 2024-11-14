import React from 'react';
import './CountButton.css';

const CountButton = (props) => {
    return (
        <button id="button-count" type="submit" className="item-count-button">{props.name}</button>
    );
};

export default CountButton;
