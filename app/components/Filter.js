"use client"

import { createContext, useContext, useState } from "react";

// Create the context
export const FilterContext = createContext();

// Create the provider component
export const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        levels: [], // Holds selected levels (e.g., beginner, intermediate)
        types: [],  // Holds selected types (e.g., appetizer, entree)
        tags: [], // holds tags for filters
    });

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

// Custom hook to use the filter context
export const useFilter = () => useContext(FilterContext);