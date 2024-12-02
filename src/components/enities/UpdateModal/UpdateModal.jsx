import React, { useState, useEffect } from 'react';
import './UpdateModal.css';
import { Destination } from "../../assets/utils/Destination";

const UpdateModal = ({ onClose, onUpdate, destination }) => {
    const [title, setTitle] = useState(destination.title);
    const [description, setDescription] = useState(destination.description);
    const [price, setPrice] = useState(destination.price);
    const [image, setImage] = useState(null);
    const [continent, setContinent] = useState('');

    useEffect(() => {
        console.log('UpdateModal destination prop:', destination);
        setTitle(destination.title);
        setDescription(destination.description);
        setPrice(destination.price);
    }, [destination]);

    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedDestination = {
            ...destination,
            title,
            description,
            price,
            continent,
            image: image ? URL.createObjectURL(image) : destination.image,
            lastUpdated: new Date().toISOString()
        };
        onUpdate(updatedDestination);
        onClose();
    };

    return (
        <div>
            <div id="background-modal" className="background-modal" onClick={handleBackgroundClick}></div>
            <div id="edit-modal" className="edit-modal">
                <div className="modal-content">
                    <h1>Edit destination</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Title</span>
                            <input
                                type="text"
                                placeholder="Text..."
                                className="title-create-input"
                                maxLength={25}
                                id="title-edit-modal"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Description</span>
                            <textarea
                                className="description-create-input"
                                id="description-edit-modal"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </label>
                        <label>
                            <span>Price ($)</span>
                            <input
                                id="price-edit-modal"
                                type="number"
                                min="0"
                                placeholder="Number..."
                                className="price-create-input"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                            />
                        </label>
                        <label>
                            <span>Continent</span>
                            <select className="continent-create-input" value={continent} onChange={(e) => setContinent(e.target.value)}>
                                <option value="" hidden disabled>Select Continent...</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="Africa">Africa</option>
                                <option value="North America">North America</option>
                                <option value="South America">South America</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </label>
                        <label>
                            <input
                                type="file"
                                id="image-edit-modal"
                                accept=".jpg, .jpeg, .png"
                                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                            />
                            <button type="reset">Clear</button>
                        </label>
                        <label>
                            <button className="create-modal-button" type="submit" id="submit-edit-button">Submit</button>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;
