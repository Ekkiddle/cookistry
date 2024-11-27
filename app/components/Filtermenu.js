"use client";

import { useRef, useState, useEffect } from "react";
import { useFilter } from "./Filter";
import {
    Button,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Typography,
} from "@mui/material";

const FilterMenu = ({ handleClose }) => {
    const componentRef = useRef(null);
    const { filters, setFilters } = useFilter(); // Access the filter context

    // Initialize state based on the current filter context values
    const [levelFilter, setLevelFilter] = useState({
        beginner: filters.levels.includes("beginner"),
        intermediate: filters.levels.includes("intermediate"),
        advanced: filters.levels.includes("advanced"),
    });

    const [typeFilter, setTypeFilter] = useState({
        appetizer: filters.types.includes("appetizer"),
        entree: filters.types.includes("entree"),
        dessert: filters.types.includes("dessert"),
    });

    useEffect(() => {
        // Synchronize with the context's filter values when they change
        setLevelFilter({
            beginner: filters.levels.includes("beginner"),
            intermediate: filters.levels.includes("intermediate"),
            advanced: filters.levels.includes("advanced"),
        });

        setTypeFilter({
            appetizer: filters.types.includes("appetizer"),
            entree: filters.types.includes("entree"),
            dessert: filters.types.includes("dessert"),
        });
    }, [filters]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                handleClose(); // Close filter menu if clicked outside
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClose]);

    const handleLevelChange = (event) => {
        setLevelFilter({ ...levelFilter, [event.target.name]: event.target.checked });
    };

    const handleTypeChange = (event) => {
        setTypeFilter({ ...typeFilter, [event.target.name]: event.target.checked });
    };

    const filter = () => {
        const activeLevels = Object.keys(levelFilter).filter((level) => levelFilter[level]);
        const activeTypes = Object.keys(typeFilter).filter((type) => typeFilter[type]);

        // Update the filter context
        setFilters({
            levels: activeLevels,
            types: activeTypes,
        });

        handleClose(); // Close the filter menu after confirming
    };

    return (
        <div
            ref={componentRef}
            className="absolute flex flex-col p-2 bg-colour4 top-5 right-0 shadow-xl rounded-sm text-colour2 gap-2"
        >
            <Typography style={{ textDecoration: "underline" }}>Filter Settings</Typography>

            {/* Level Filter */}
            <FormControl component="fieldset">
                <FormLabel component="legend">Level</FormLabel>
                <FormGroup>
                    {["beginner", "intermediate", "advanced"].map((level) => (
                        <FormControlLabel
                            key={level}
                            control={
                                <Checkbox
                                    checked={levelFilter[level]}
                                    onChange={handleLevelChange}
                                    name={level}
                                    sx={{
                                        color: "#14213d", // unchecked color
                                        "&.Mui-checked": {
                                            color: "#14213d", // checked color
                                        },
                                        "& .MuiSvgIcon-root": {
                                            fontSize: 16, // change size of the icon
                                        },
                                    }}
                                />
                            }
                            label={level.charAt(0).toUpperCase() + level.slice(1)}
                        />
                    ))}
                </FormGroup>
            </FormControl>

            {/* Type Filter */}
            <FormControl component="fieldset" sx={{ mt: 2 }}>
                <FormLabel component="legend">Type</FormLabel>
                <FormGroup>
                    {["appetizer", "entree", "dessert"].map((type) => (
                        <FormControlLabel
                            key={type}
                            control={
                                <Checkbox
                                    checked={typeFilter[type]}
                                    onChange={handleTypeChange}
                                    name={type}
                                    sx={{
                                        color: "#14213d", // unchecked color
                                        "&.Mui-checked": {
                                            color: "#14213d", // checked color
                                        },
                                        "& .MuiSvgIcon-root": {
                                            fontSize: 16, // change size of the icon
                                        },
                                    }}
                                />
                            }
                            label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                    ))}
                </FormGroup>
            </FormControl>

            {/* Confirm and Cancel buttons */}
            <div className="flex flex-row gap-1 w-full h-5 mt-2">
                <Button variant="contained" color="success" onClick={filter}>
                    Confirm
                </Button>
                <Button variant="contained" color="primary" onClick={handleClose}>
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default FilterMenu;
