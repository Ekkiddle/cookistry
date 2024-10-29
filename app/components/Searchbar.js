"use client"

// Search bar component for Navbar
import { useState, ChangeEvent } from "react";
import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
    const [inputValue, setValue] = useState("")

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSearch = () => {
        console.log(inputValue.toLowerCase());
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return(
        <div className="border-[2px] border-solid border-slate-500 flex flex-row items-center p-1 gap-3 rounded-[15px] w-full">
            <IoIosSearch className="text-lg md:text-xl font-bold"/>

            <input type="text"
                id="inputId"
                placeholder="Search here"
                value={inputValue || ""} onChange={handleChange}
                onKeyDown={handleKeyPress}
                className="bg-[transparent] outline-none border-none w-full text-xs md:text-sm" />

        </div>
    );
}

export default Searchbar;