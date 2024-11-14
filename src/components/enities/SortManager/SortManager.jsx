import React from 'react';
import Select from "../../common/Select/Select";
import './SortManager.css';

const SortManager = (props) => {
    const sort = ["Price (0-99+)", "Price (99+-0)", "Name (A-Z)", "Name (Z-A)"];
    
    return (
        <div className="sort-div">
            <h1>Manage Destinations</h1>
            <form>
                <label htmlFor="sort"> Sort by: </label>
                <Select name="Choose one..." options={sort} onChange={(e) => { 
                    props.setSearchOptions(prevState => ({
                        ...prevState,
                        sort: e.target.value,
                    }));
                }} />
            </form>
        </div>
    );
};

export default SortManager;
