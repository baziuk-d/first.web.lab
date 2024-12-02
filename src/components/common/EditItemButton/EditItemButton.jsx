import React from 'react';
import './EditItemButton.css';
import { Destination } from "../../assets/utils/Destination";

const EditItemButton = (props) => {
    return (
        <button className="edit-item" id="button-edit" onClick={() => props.onUpdateModal(props.destination)}>
            {props.name}
        </button>
    );
};

export default EditItemButton;
