import { useState } from "react";
import pluralize from "pluralize";

function IngredientList({ ingredients = [], portions = 1 }) {

    const [multiplier, setMultiplier] = useState(1);

    const handleMultiplierChange = (newMultiplier) => {
        setMultiplier(newMultiplier);
    };

    return (
        <div className=" w-full px-6 md:px-12">
            {/* (conditional in desktop view) Second Column: adjust portion */}
            <div>
                {"Current portion size: "}{portions * multiplier}
            </div>
            <div className="flex items-center justify-start gap-3 my-3">
                {"Adjust portions: "}
                <div className="flex gap-1 items-center">
                    {[1, 2, 3].map((value) => (
                        <button
                            key={value}
                            onClick={() => handleMultiplierChange(value)}
                            className={`text-gray-900 bg-white 
                                        border border-gray-300 
                                        focus:outline-none hover:bg-gray-200 
                                        focus:ring-4 focus:ring-orange-300 font-medium rounded-lg 
                                        text-base px-4 py-2 text-center leading-tight
                                        ${value === multiplier ? '!bg-orange-300 text-black shadow-md' : ''}`}>
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
                                const pluralizedUnit = adjustedAmount > 1 && ingredient.amountType
                                    ? pluralize(ingredient.amountType)
                                    : ingredient.amountType;
                                // Display as fraction if it's not a whole number
                                const displayAmount = Number.isInteger(adjustedAmount)
                                    ? adjustedAmount
                                    : toFraction(adjustedAmount);

                                return (
                                    <li key={idx} className="text-gray-900">
                                        {displayAmount} {pluralizedUnit || ""} {ingredient.ingredient}
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

// Function to convert the recipe amounts to fractions toFraction AI generated
function toFraction(decimal) {
    const tolerance = 1.0E-6;
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

export default IngredientList;
