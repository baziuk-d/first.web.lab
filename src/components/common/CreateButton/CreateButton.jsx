import React from 'react';
import './CreateButton.css';

const CreateButton = ({ name, onCreateModal }) => {
    const handleClick = () => {
        onCreateModal();
    };

    return (
        <div className="create">
            <button onClick={handleClick}>{name}</button>
        </div>
    );
};

export default CreateButton;
