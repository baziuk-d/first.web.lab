import React from 'react';
import './FormButton.css';

const FormButton = (props) => {
    return (
        <button className="formButton" onClick={props.onClick || (() => {})}>
            {props.name}
        </button>
    );
};

export default FormButton;
