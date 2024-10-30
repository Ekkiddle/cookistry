"use client"

// Search bar component for Navbar
import { useRef, useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { Button, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Typography} from "@mui/material";

const Searchbar = () => {
    const componentRef = useRef(null);

    useEffect(() => {
        // Function to check if the click is outside
        function handleClickOutside(event) {
          if (componentRef.current && !componentRef.current.contains(event.target)) {
            setOpen(false);
          }
        }
    
        // Bind the event listener to the document
        document.addEventListener('mousedown', handleClickOutside);
    
        // Clean up the event listener on component unmount
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [levelFilter, setLevelFilter] = useState({
        beginner: true,
        intermediate: true,
        advanced: true,
      });
      const [typeFilter, setTypeFilter] = useState({
        appetizer: true,
        entree: true,
        dessert: true,
      });
    
      // Update filters when checkboxes change
      const handleLevelChange = (event) => {
        setLevelFilter({ ...levelFilter, [event.target.name]: event.target.checked });
      };
    
      const handleTypeChange = (event) => {
        setTypeFilter({ ...typeFilter, [event.target.name]: event.target.checked });
      };

    const [inputValue, setValue] = useState("")
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

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

    const filter = () => {
        const activeLevels = Object.keys(levelFilter).filter((level) => levelFilter[level]);
        const activeTypes = Object.keys(typeFilter).filter((type) => typeFilter[type]);
    
        console.log('Active Levels:', activeLevels);
        console.log('Active Types:', activeTypes);
        handleClose();
    };


    return(
        <div className="border-[2px] border-solid border-slate-500 flex flex-row items-center gap-3 rounded-[15px] w-full h-6">
            <IoIosSearch className="text-lg md:text-xl font-bold m-1"/>

            <input type="text"
                id="inputId"
                placeholder="Search here"
                value={inputValue || ""} onChange={handleChange}
                onKeyDown={handleKeyPress}
                className="bg-[transparent] outline-none border-none w-full text-xs md:text-sm" />
            <div className="relative h-full">
                <button className="bg-slate-500 h-full rounded-r-[15px] w-10 flex items-center justify-center hover:bg-slate-700 text-white hover:text-slate-500"
                    onClick={handleOpen}>
                    <CiFilter />
                    
                </button>
                {open ? (
                    <div ref={componentRef} className="absolute flex flex-col p-2 bg-colour4 top-5 right-0 shadow-xl rounded-sm text-colour2 gap-2">
                        <Typography style={{ textDecoration: 'underline' }}>
                            Filter Settings
                        </Typography>
                        {/* Level Filter */}
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Level</FormLabel>
                            <FormGroup >
                            {['beginner', 'intermediate', 'advanced'].map((level) => (
                                <FormControlLabel
                                key={level}
                                control={
                                    <Checkbox
                                    checked={levelFilter[level]}
                                    onChange={handleLevelChange}
                                    name={level}
                                    sx={{
                                        color: "#14213d", // unchecked color
                                        '&.Mui-checked': {
                                          color: "#14213d", // checked color
                                        },
                                        '& .MuiSvgIcon-root': {
                                          fontSize: 16, // change size of the icon
                                        }
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
                            {['appetizer', 'entree', 'dessert'].map((type) => (
                                <FormControlLabel
                                key={type}
                                control={
                                    <Checkbox
                                    checked={typeFilter[type]}
                                    onChange={handleTypeChange}
                                    name={type}
                                    sx={{
                                        color: "#14213d", // unchecked color
                                        '&.Mui-checked': {
                                          color: "#14213d", // checked color
                                        },
                                        '& .MuiSvgIcon-root': {
                                          fontSize: 16, // change size of the icon
                                        }
                                    }}
                                    />
                                }
                                label={type.charAt(0).toUpperCase() + type.slice(1)}
                                />
                            ))}
                            </FormGroup>
                        </FormControl>
                        <div className="flex flex-row gap-1 w-full h-5 mt-2">
                            <Button variant="contained" color="success" onClick={filter}>Confirm</Button>
                            <Button variant="contained" color="primary" onClick={handleClose}>Cancel</Button>
                        </div>
                    </div>) :(<div></div>)
                }
            </div>
        </div>
    );
}

export default Searchbar;