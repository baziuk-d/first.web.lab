import React, { useContext, useEffect, useState } from 'react';
import './CatalogSection.css';
import SortManager from "../../enities/SortManager/SortManager";
import CountManager from "../../enities/CountManager/CountManager";
import ItemCard from "../../enities/ItemCard/ItemCard";
import FilterManager from "../../enities/FilterManager/FilterManager";
import { useDestination } from "../../context/DestinationContext";

const filterDestinationsBySearchOptions = (initialDestinations, searchOptions) => {
    const { term, sort, price, rating, country } = searchOptions;

    const filteredDestinations = initialDestinations.filter(destination =>
        destination.title.toLowerCase().trim().includes(term.toLowerCase().trim()) &&
        (price ? destination.price <= price : true) &&
        (rating ? destination.rate >= rating : true) &&
        (country ? destination.continent.toLowerCase().trim() === country.toLowerCase().trim() : true)
    );

    return filteredDestinations.sort((a, b) => {
        switch (sort) {
            case 'Price (0-99+)':
                return a.price - b.price;
            case 'Price (99+-0)':
                return b.price - a.price;
            case 'Name (A-Z)':
                return a.title.localeCompare(b.title);
            case 'Name (Z-A)':
                return b.title.localeCompare(a.title);
            default:
                return 0;
        }
    });
};

const CatalogSection = (props) => {
    const { destinations } = useDestination();
    const [filteredDestinations, setFilteredDestinations] = useState(destinations);

    useEffect(() => {
        setFilteredDestinations(filterDestinationsBySearchOptions(destinations, props.searchOptions));
    }, [destinations, props.searchOptions]);

    return (
        <section className="section-items">
            <div className="item-manager">
                <SortManager setSearchOptions={props.setSearchOptions} />
                <hr />
                <FilterManager setSearchOptions={props.setSearchOptions} />
            </div>
            <div className="item-storage" id="item-storage">
                {filteredDestinations.map((value, key) => (
                    <ItemCard key={key} destination={value} onDelete={props.onDelete} onUpdateModal={() => props.onUpdateModal(value)} />
                ))}
            </div>
        </section>
    );
};

export default CatalogSection;
