import React from 'react';
import './Menu.css';
import CreateButton from "../../common/CreateButton/CreateButton";
import SearchButtons from "../../enities/SearchButtons/SearchButtons";

const Menu = (props) => {
    return (
        <section className="section-menu">
            <CreateButton name="Create" onCreateModal={props.onCreateModal} />
            <SearchButtons setSearchOptions={props.setSearchOptions} />
        </section>
    );
};

export default Menu;
