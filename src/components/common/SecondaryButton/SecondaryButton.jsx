import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = (props) => {
    return (
        <a className="secondaryButton" href={props.link}>{props.name}</a>
    );
};

export default SecondaryButton;
