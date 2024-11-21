import React, {FC, useCallback, useEffect, useState} from 'react';
import './CatalogSection.css';
import './Loader.css'; 
import SortManager from "../../enities/SortManager/SortManager";
import ItemCard from "../../enities/ItemCard/ItemCard";
import {Destination} from "../../assets/utils/Destination";
import FilterManager from "../../enities/FilterManager/FilterManager";

interface CatalogSectionProps {
    onDelete: (id: string) => void,
    onUpdateModal: (destination: Destination) => void,
    setSearchOptions: React.Dispatch<React.SetStateAction<{ search?: string, sort?: string, price?: number, rate?: number, continent?: number, id?: string }>>;
    searchOptions: { search?: string; sort?: string; price?: number; rate?: number; continent?: number, id?: string } | null,
    filteredDestinations: Array<Destination>,
}

const CatalogSection: FC<CatalogSectionProps> = (props) => {
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) {
        return <div className="loader"></div>; 
    }

    return (
        <section className="section-items">
            <div className="item-manager">
                <SortManager setSearchOptions={props.setSearchOptions}/>
                <hr/>
                <FilterManager setSearchOptions={props.setSearchOptions}/>
            </div>
            <div className="item-storage" id="item-storage">
                {props.filteredDestinations.map((value, key) => (
                    <ItemCard key={key} destination={value} onDelete={props.onDelete}
                              onUpdateModal={() => props.onUpdateModal(value)}/>
                ))}
            </div>
        </section>
    );
};

export default CatalogSection;
