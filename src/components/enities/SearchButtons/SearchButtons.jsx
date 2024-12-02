import React from 'react';
import SearchButton from "../../common/SearchButton/SearchButton";
import ClearButton from "../../common/ClearButton/ClearButton";
import SearchInput from "../../common/SearchInput/SearchInput";
import './SearchButtons.css';

const SearchButtons = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="search-menu" id="search-menu">
            <form onSubmit={handleSubmit}>
                <label className="input-buttons-menu">
                    <SearchInput setSearchOptions={props.setSearchOptions} />
                    {/*<label className="search-buttons-menu">*/}
                    {/*    <SearchButton name={"Search"}/>*/}
                    {/*    <ClearButton name={"Clear"}/>*/}
                    {/*</label>*/}
                </label>
            </form>
        </div>
    );
};

export default SearchButtons;
