import React, { useState } from "react";
import IngredientList from "./IngredientList";

function IngredientDrawer({ ingredients }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex">
                {/* Button to open the drawer */}
                <button
                    onClick={toggleDrawer}
                    className="fixed top-1/4 left-3 z-20 bg-colour3 text-white text-sm align-text-top 
                                font-bold rounded-r-2xl h-32 w-10 flex 
                                items-center justify-center transform -translate-x-1/2"
                >
                    <div className="rotate-90">Ingredients</div>
                </button>

                {/* Drawer Content */}
                <div
                    className={`fixed top-0 left-0 z-30 w-72 h-full bg-white shadow-lg transform transition-transform duration-500 md:w-2/5 ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } overflow-y-auto`}
                >
                    {/* Close button inside the drawer */}
                    <button
                        onClick={toggleDrawer}
                        className="fixed top-4 right-4 text-gray-500 hover:text-gray-800"
                    >
                        x <u>close</u>
                    </button>

                    <div className="px-6 py-4">
                        <h2 className="text-2xl font-semibold mx-10 my-4 text-gray-700">Ingredients</h2>
                        <ul className="list-item">
                            <IngredientList ingredients={ingredients} />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IngredientDrawer;
