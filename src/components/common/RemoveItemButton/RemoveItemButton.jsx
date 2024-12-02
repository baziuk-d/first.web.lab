import React from 'react';
import './RemoveItemButton.css';

const RemoveItemButton = (props) => {
    const deleteItem = () => {
        props.onDelete(props.id);
    };
    return (
        <button className="remove-item" onClick={deleteItem}>{props.name}</button>
    );
};

export default RemoveItemButton;
