import { Destination } from "../assets/utils/Destination";
import { destinationsData } from "../assets/utils/Destination";
import React, { createContext, useContext, useState } from "react";

const flattenedDestinationsData = destinationsData.flat();

const DestinationContext = createContext(undefined);

export const useDestination = () => {
    const context = useContext(DestinationContext);
    if (!context) {
        throw new Error('Context Error');
    }
    return context;
};

export const DestinationProvider = ({ children }) => {
    const [destinations, setDestination] = useState(flattenedDestinationsData);
    const [filters, setFilters] = useState({ price: 0, rating: 0, country: '' });

    return (
        <DestinationContext.Provider value={{ destinations, setDestination, filters, setFilters }}>
            {children}
        </DestinationContext.Provider>
    );
};
