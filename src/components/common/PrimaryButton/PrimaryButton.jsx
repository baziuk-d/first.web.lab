import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = (props) => {
    return (
        <a className="primaryButton" href={props.link}>{props.name}</a>
    );
};

export default PrimaryButton;
