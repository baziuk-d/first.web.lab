import './ItemCard.css';
import React from 'react';
import EditItemButton from "../../common/EditItemButton/EditItemButton";
import RemoveItemButton from "../../common/RemoveItemButton/RemoveItemButton";
import { Link } from "react-router-dom";

const ItemCard = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="item">
            <div>
                <Link to={`/catalog/${props.destination.id}`}>
                    <img src={props.destination.image} alt="item-img" id="item-image" />
                </Link>
                <div className="item-info">
                    <p className="id">{props.destination.id}</p>
                    <h1>{props.destination.title}</h1>
                    <p>{props.destination.description}</p>
                    <p><span>{props.destination.price}</span>$</p>
                    <p className="item-updated-at">Last updated:<span>{props.destination.lastUpdated.slice(0, 10)}</span></p>
                </div>
            </div>
            <div className="item-buttons">
                <form onSubmit={handleSubmit}>
                    <label>
                        <EditItemButton name="Edit" onUpdateModal={() => props.onUpdateModal(props.destination)} destination={props.destination} />
                        <RemoveItemButton name="Delete" id={props.destination.id} onDelete={props.onDelete} />
                    </label>
                </form>
            </div>
        </div>
    );
};

export default ItemCard;
