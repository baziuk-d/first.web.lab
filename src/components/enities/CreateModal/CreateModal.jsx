import React, { useState } from 'react';
import './CreateModal.css';
import { Destination } from "../../assets/utils/Destination";

const CreateModal = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);
    const [continent, setContinent] = useState('');

    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            props.onClose();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newDestination = {
            id: "",
            image: image ? URL.createObjectURL(image) : '',
            title,
            description,
            price,
            continent,
            rate: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
            lastUpdated: new Date().toISOString()
        };
        props.onCreate(newDestination);
        props.onClose();
    };

    return (
        <div>
            <div id="background-modal" className="background-modal" onClick={handleBackgroundClick}></div>
            <div id="create-modal" className="create-modal">
                <div className="modal-content">
                    <h1>Create destination</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Title</span>
                            <input
                                type="text"
                                placeholder="Text..."
                                className="title-create-input"
                                maxLength={25}
                                id="title-modal"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Description</span>
                            <textarea
                                className="description-create-input"
                                id="description-modal"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </label>
                        <label>
                            <span>Price ($)</span>
                            <input
                                id="price-modal"
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
                                id="image-modal"
                                accept=".jpg, .jpeg, .png"
                                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                            />
                            <button type="reset">Clear</button>
                        </label>
                        <label>
                            <button className="create-modal-button" type="submit" id="submit-create-button">Submit</button>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateModal;
