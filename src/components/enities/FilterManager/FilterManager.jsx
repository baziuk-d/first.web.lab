import React from 'react';
import Select from "../../common/Select/Select";
import './FilterManager.css';

const FilterManager = (props) => {

    return (
        <div>
            <form className="filter-manager">
                <label>Filters: </label>
                <Select
                    name="Price"
                    options={["500", "1000", "1500", "2000"]}
                    onChange={(e) => {
                        props.setSearchOptions(prevState => ({
                            ...prevState,
                            price: parseInt(e.target.value)
                        }));
                    }}
                />
                <Select
                    name="Continents"
                    options={["Asia", "Europe", "Africa", "North America", "South America", "Antarctica", "Australia"]}
                    onChange={(e) => {
                        props.setSearchOptions(prevState => ({
                            ...prevState,
                            country: e.target.value
                        }));
                    }}
                />
                <Select
                    name="Rate"
                    options={["1", "2", "3", "4", "5"]}
                    onChange={(e) => {
                        props.setSearchOptions(prevState => ({
                            ...prevState,
                            rating: parseInt(e.target.value)
                        }));
                    }}
                />
            </form>
        </div>
    );
};

export default FilterManager;
