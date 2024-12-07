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

const FilterMenu = ({ ignoreRecipes, handleClose }) => {
    const componentRef = useRef(null);
    const { filters, setFilters } = useFilter(); // Access the filter context

    // Initialize state based on the current filter context values
    const [levelFilter, setLevelFilter] = useState({
        allLevels: filters.levels.length === 0, // "All Levels" checked if no levels are selected
        beginner: filters.levels.includes("beginner"),
        intermediate: filters.levels.includes("intermediate"),
        advanced: filters.levels.includes("advanced"),
    });

    const [typeFilter, setTypeFilter] = useState({
        allTypes: filters.types.length === 0, // "All Types" checked if no types are selected
        appetizer: filters.types.includes("appetizer"),
        entree: filters.types.includes("entree"),
        dessert: filters.types.includes("dessert"),
    });

    const [tagFilter, setTagFilter] = useState({
        allRecipes: filters.tags.length === 0, // "All Recipes" checked if no tags are selected
        vegan: filters.tags.includes("vegan"),
        glutenFree: filters.tags.includes("glutenFree"),
        lactoseFree: filters.tags.includes("lactoseFree"),
        spice: filters.tags.includes("spice"),
    });

    useEffect(() => {
        // Synchronize with the context's filter values when they change
        setLevelFilter({
            allLevels: filters.levels.length === 0,
            beginner: filters.levels.includes("beginner"),
            intermediate: filters.levels.includes("intermediate"),
            advanced: filters.levels.includes("advanced"),
        });

        setTypeFilter({
            allTypes: filters.types.length === 0,
            appetizer: filters.types.includes("appetizer"),
            entree: filters.types.includes("entree"),
            dessert: filters.types.includes("dessert"),
        });

        setTagFilter({
            allRecipes: filters.tags.length === 0,
            vegan: filters.tags.includes("vegan"),
            glutenFree: filters.tags.includes("glutenFree"),
            lactoseFree: filters.tags.includes("lactoseFree"),
            spice: filters.tags.includes("spice"),
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
        const { name, checked } = event.target;
        if (name === "allLevels" && checked) {
            // If "All Levels" is checked, uncheck all other levels
            setLevelFilter({
                allLevels: true,
                beginner: false,
                intermediate: false,
                advanced: false,
            });
        } else if (name === "allLevels" && !checked) {
            setLevelFilter({ ...levelFilter, allLevels: false });
        } else {
            // If any level is checked, uncheck "All Levels"
            setLevelFilter({
                ...levelFilter,
                allLevels: false,
                [name]: checked,
            });
        }
    };

    const handleTypeChange = (event) => {
        const { name, checked } = event.target;
        if (name === "allTypes" && checked) {
            // If "All Types" is checked, uncheck all other types
            setTypeFilter({
                allTypes: true,
                appetizer: false,
                entree: false,
                dessert: false,
            });
        } else if (name === "allTypes" && !checked) {
            setTypeFilter({ ...typeFilter, allTypes: false });
        } else {
            // If any type is checked, uncheck "All Types"
            setTypeFilter({
                ...typeFilter,
                allTypes: false,
                [name]: checked,
            });
        }
    };

    const handleTagChange = (event) => {
        const { name, checked } = event.target;

        if (name === "allRecipes" && checked) {
            // If "All Recipes" is checked, uncheck all other tags
            setTagFilter({
                allRecipes: true,
                vegan: false,
                glutenFree: false,
                lactoseFree: false,
                spice: false,
            });
        } else if (name === "allRecipes" && !checked) {
            // If "All Recipes" is unchecked, allow tag selection
            setTagFilter({
                ...tagFilter,
                allRecipes: false,
            });
        } else {
            // If any tag is checked, uncheck "All Recipes"
            setTagFilter({
                ...tagFilter,
                allRecipes: false,
                [name]: checked,
            });
        }
    };

    const filter = () => {
        const activeLevels = Object.keys(levelFilter).filter((level) => levelFilter[level] && level !== "allLevels");
        const activeTypes = Object.keys(typeFilter).filter((type) => typeFilter[type] && type !== "allTypes");
        const activeTags = Object.keys(tagFilter)
            .filter((tag) => tag !== "allRecipes" && tagFilter[tag]);

        // Update the filter context
        setFilters({
            levels: activeLevels,
            types: activeTypes,
            tags: activeTags,
        });

        handleClose(); // Close the filter menu after confirming
    };

    const clearFilters = () => {
      setFilters({
          levels: [],
          types: [],
          tags: [],
      });
    }

    return (
        <div
            ref={componentRef}
            className="absolute max-h-[70vh] min-w-60 flex flex-col py-2 bg-colour4 top-5 right-0 shadow-xl shadow-colour2/25 rounded-sm text-colour2 gap-2 overflow-y-auto z-20"
        >
            <Typography className="underline px-4">Filter Settings</Typography>
            <div className="
              flex flex-col md:flex-row gap-2 md:gap-5 overflow-auto px-4 py-2 shadow-inner"
            >
                {/* Level Filter */}
                <FormControl component="fieldset">
                    <FormLabel component="legend">Level</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={levelFilter.allLevels}
                                    onChange={handleLevelChange}
                                    name="allLevels"
                                    sx={{
                                        color: levelFilter.allLevels ? "#14213d" : "#B0B0B0", // grey for unchecked
                                        "&.Mui-checked": {
                                            color: "#14213d", // checked color
                                        },
                                        "& .MuiSvgIcon-root": {
                                            fontSize: 14, // change size of the icon
                                        },
                                    }}
                                />
                            }
                            label={
                                <Typography style={{ color: levelFilter.allLevels ? "#14213d" : "#B0B0B0", fontSize: "14px" }}>
                                    All Levels
                                </Typography>
                            }
                        />
                        {["beginner", "intermediate", "advanced"].map((level) => (
                            <FormControlLabel
                                key={level}
                                control={
                                    <Checkbox
                                        checked={levelFilter[level]}
                                        onChange={handleLevelChange}
                                        name={level}
                                        sx={{
                                            color: levelFilter[level] ? "#14213d" : "#B0B0B0", // grey for unchecked
                                            "&.Mui-checked": {
                                                color: "#14213d", // checked color
                                            },
                                            "& .MuiSvgIcon-root": {
                                                fontSize: 14, // change size of the icon
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Typography style={{ color: levelFilter[level] ? "#14213d" : "#B0B0B0", fontSize: "14px" }}>
                                        {level.charAt(0).toUpperCase() + level.slice(1)}
                                    </Typography>
                                }
                            />
                        ))}
                    </FormGroup>
                </FormControl>

                {/* Type Filter */}
                {!ignoreRecipes && <FormControl component="fieldset" sx={{ mt: 0 }}>
                    <FormLabel component="legend">Type</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={typeFilter.allTypes}
                                    onChange={handleTypeChange}
                                    name="allTypes"
                                    sx={{
                                        color: typeFilter.allTypes ? "#14213d" : "#B0B0B0", // grey for unchecked
                                        "&.Mui-checked": {
                                            color: "#14213d", // checked color
                                        },
                                        "& .MuiSvgIcon-root": {
                                            fontSize: 14, // change size of the icon
                                        },
                                    }}
                                />
                            }
                            label={
                                <Typography style={{ color: typeFilter.allTypes ? "#14213d" : "#B0B0B0", fontSize: "14px" }}>
                                    All Types
                                </Typography>
                            }
                        />
                        {["appetizer", "entree", "dessert"].map((type) => (
                            <FormControlLabel
                                key={type}
                                control={
                                    <Checkbox
                                        checked={typeFilter[type]}
                                        onChange={handleTypeChange}
                                        name={type}
                                        sx={{
                                            color: typeFilter[type] ? "#14213d" : "#B0B0B0", // grey for unchecked
                                            "&.Mui-checked": {
                                                color: "#14213d", // checked color
                                            },
                                            "& .MuiSvgIcon-root": {
                                                fontSize: 14, // change size of the icon
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Typography style={{ color: typeFilter[type] ? "#14213d" : "#B0B0B0", fontSize: "14px" }}>
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                    </Typography>
                                }
                            />
                        ))}
                    </FormGroup>
                </FormControl>}

                {/* Tag Filter */}
                {!ignoreRecipes && <FormControl component="fieldset" sx={{ mt: 0 }}>
                    <FormLabel component="legend" sx={{ whiteSpace: "nowrap" }}>Dietary Restrictions</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={tagFilter.allRecipes}
                                    onChange={handleTagChange}
                                    name="allRecipes"
                                    sx={{
                                        color: tagFilter.allRecipes ? "#14213d" : "#B0B0B0", // grey for unchecked
                                        "&.Mui-checked": {
                                            color: "#14213d", // checked color
                                        },
                                        "& .MuiSvgIcon-root": {
                                            fontSize: 14, // change size of the icon
                                        },
                                    }}
                                />
                            }
                            label={
                                <Typography style={{ color: tagFilter.allRecipes ? "#14213d" : "#B0B0B0", fontSize: "14px" }}>
                                    All Diets
                                </Typography>
                            }
                        />
                        {["vegan", "glutenFree", "lactoseFree", "spice"].map((tag) => (
                            <FormControlLabel
                                key={tag}
                                control={
                                    <Checkbox
                                        checked={tagFilter[tag]}
                                        onChange={handleTagChange}
                                        name={tag}
                                        sx={{
                                            color: tagFilter[tag] ? "#14213d" : "#B0B0B0", // grey for unchecked
                                            "&.Mui-checked": {
                                                color: "#14213d", // checked color
                                            },
                                            "& .MuiSvgIcon-root": {
                                                fontSize: 14, // change size of the icon
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Typography style={{ color: tagFilter[tag] ? "#14213d" : "#B0B0B0", fontSize: "14px" }}>
                                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                                    </Typography>
                                }
                            />
                        ))}
                    </FormGroup>
                </FormControl>}
            </div>
            {/* Confirm and Cancel buttons */}
            <div className="flex flex-col items-stretch px-4 gap-2">
                {/* Reset Filters button */}
                <button onClick={clearFilters}
                  className="
                    w-full
                    text-sm text-colour2
                    border-2 border-current
                    bg-colour5/50 rounded-md
                    hover:text-colour2 hover:bg-colour5
                    hover:shadow-md hover:shadow-colour2/75"
                >
                    Clear All Filters
                </button>
                <div className="flex flex-row gap-2 w-full">
                    <button onClick={filter} 
                      className="
                        w-full px-2 py-1
                        text-colour4
                        bg-colour2 rounded-md
                        hover:text-colour5 hover:shadow-md hover:shadow-colour2/75"
                    >
                        Confirm
                    </button>
                    <button onClick={handleClose}
                      className="
                        w-full px-2 py-1
                        text-colour5
                        bg-colour3 rounded-md
                        hover:shadow-md hover:shadow-colour2/75"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterMenu;
