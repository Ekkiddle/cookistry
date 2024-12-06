"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import FilterMenu from "./Filtermenu";
import recipes from "@/public/recipes/recipes";
import techniques from "@/public/techniques/techniques";
import { useRouter } from "next/navigation";
import FilterButton from "./FilterButton";

const Searchbar = () => {
    const router = useRouter();

    const [inputValue, setInputValue] = useState(""); // Current input value
    const [suggestions, setSuggestions] = useState([]); // Dynamic suggestions
    const [openSuggestions, setOpenSuggestions] = useState(false); // Show/hide suggestions
    const [openFilter, setOpenFilter] = useState(false);

    // Combined data for search
    const searchData = [
        ...recipes.map((recipe) => ({ ...recipe, type: "recipe" })),
        ...techniques.map((technique) => ({ ...technique, type: "technique" })),
    ];

    // Handle input change and fetch suggestions
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        if (value.trim() !== "") {
            const filtered = searchData.filter((item) =>
                (item.name || item.title)
                    .toLowerCase()
                    .includes(value.toLowerCase())
            );
            setSuggestions(filtered);
            setOpenSuggestions(true);
        } else {
            setSuggestions([]);
            setOpenSuggestions(false);
        }
    };

    // Handle suggestion click
    const handleSuggestionClick = (suggestion) => {
        setInputValue("");
        setSuggestions([]);
        setOpenSuggestions(false);

        // Determine the URL based on the suggestion type
        const url = suggestion.slug
            ? suggestion.type == "technique"
                ? `/techniques/${suggestion.slug}` // Navigate to technique if 'name' does not exist
                : `/recipes/${suggestion.slug}` // Navigate to recipe if 'name' exists
            : "/"; // Default fallback, you can customize this if needed

        router.push(url);
    };

    // Handle Enter key for search
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            if(inputValue.trim() == ""){
                router.push(`/`);
            }
            else{
                router.push(`/search/${encodeURIComponent(inputValue.trim())}`);
                setInputValue(""); // Optionally clear the search input
                setOpenSuggestions(false); // Hide suggestions
            }
        }
    };
    

    const handleOpenFilter = () => setOpenFilter(true);
    const handleCloseFilter = () => setOpenFilter(false);

    // Handle input focus and blur
    const handleFocus = () => {
        if (suggestions.length > 0) setOpenSuggestions(true);
    };

    const handleBlur = () => {
        // Delay hiding suggestions to allow suggestion click to register
        setTimeout(() => setOpenSuggestions(false), 150);
    };

    return (
        <div className="relative w-full text-black">
            {/* Search Bar */}
            <div className="border-[2px] border-solid border-slate-500 flex flex-row items-center gap-3 rounded-[25px] w-full h-6 md:h-8 text-white">
                <IoIosSearch className="text-lg md:text-xl font-bold ml-2" />
                <input
                    type="text"
                    id="inputId"
                    placeholder="Search for recipes or techniques"
                    value={inputValue || ""}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="bg-[transparent] outline-none border-none w-full text-xs md:text-sm"
                />
                {/* <div className="relative h-full">
                    <button
                        className="bg-slate-500 h-full rounded-r-[15px] w-10 flex items-center justify-center hover:bg-slate-700 text-white hover:text-slate-500"
                        onClick={handleOpenFilter}
                    >
                        <CiFilter />
                    </button>
                    {openFilter && <FilterMenu handleClose={handleCloseFilter} />}
                </div> */}
                <FilterButton inSearchbar={true} />
            </div>

            {/* Suggestions Dropdown */}
            {openSuggestions && suggestions.length > 0 && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-40 overflow-auto">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            <img
                                src={suggestion.image}
                                alt={suggestion.name || suggestion.title}
                                className="w-10 h-10 object-cover rounded-md"
                            />
                            <div>
                                <p className="font-medium">{suggestion.name || suggestion.title}</p>
                                <p className="text-xs text-gray-500 capitalize">{suggestion.type}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Searchbar;
