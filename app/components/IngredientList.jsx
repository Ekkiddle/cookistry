import { useState } from "react";

function toFraction(decimal) {
    const tolerance = 1.0E-6; // Tolerance level for approximation
    let numerator = 1;
    let denominator = 1;
    let fraction = decimal;

    while (Math.abs(fraction - Math.round(fraction)) > tolerance) {
        denominator++;
        fraction = decimal * denominator;
        numerator = Math.round(fraction);
    }

    return `${numerator}/${denominator}`;
}

function IngredientList({ ingredients = [], onOutOfView, onInView }) {

    const [multiplier, setMultiplier] = useState(1);

    const handleMultiplierChange = (newMultiplier) => {
        setMultiplier(newMultiplier);
    };

    return (
        // lg:flex lg:flex-row-reverse lg:flex-row lg:justify-between lg:items-start
        <div className=" w-full px-6 md:px-12">

            {/* (conditional in desktop view) Second Column: adjust portion */}
            <div className="inline-flex items-center justify-left gap-3">
                <div>
                    {"Adjust portions: "}
                </div>
                <div className="inline-flex gap-1">
                    {[1, 2, 3].map((value) => (
                        <button
                            key={value}
                            onClick={() => handleMultiplierChange(value)}
                            className={`text-gray-900 bg-white 
                                        border border-gray-300 
                                        focus:outline-none hover:bg-gray-200 
                                        focus:ring-4 focus:ring-orange-300 font-medium rounded-lg 
                                        text-xs px-3 py-1 me-1 mb-4
                                        sm:text-sm sm:px-4 sm:py-1.5
                                        md:text-base md:px-5 md:py-2.5
                                        ${value === multiplier ? '!bg-orange-300 text-black shadow-md' : ''}`} >
                            x{value}
                        </button>
                    ))}
                </div>
            </div>

            {/* First column Ingredients list */}
            <div>
                {ingredients.map((ingredientGroup, index) => (
                    <div key={index}>
                        {ingredientGroup.listName && (
                            <h3 className="italic mt-2 mb-1">{ingredientGroup.listName}:</h3>
                        )}
                        <ul className="ml-4 list-disc text-gray-900">
                            {ingredientGroup.list.map((ingredient, idx) => {
                                const adjustedAmount = ingredient.amount * multiplier;
                                // Display as fraction if it's not a whole number
                                const displayAmount = Number.isInteger(adjustedAmount)
                                    ? adjustedAmount
                                    : toFraction(adjustedAmount);

                                return (
                                    <li key={idx} className="text-gray-900">
                                        {displayAmount} {ingredient.amountType || ""} {ingredient.ingredient}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default IngredientList;
