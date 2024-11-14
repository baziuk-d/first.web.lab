import React from 'react';
import './ClearButton.css';

const ClearButton = (props) => {
    return (
        <button type="reset" className="clear">{props.name}</button>
    );
};

export default ClearButton;
