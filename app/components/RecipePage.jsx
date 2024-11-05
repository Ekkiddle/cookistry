"use client";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import NavBar from './navbar';
import IngredientList from './IngredientList';
import StepsList from './StepsList';
import RecipeSummary from './RecipeSummary';
import IngredientDrawer from "./IngredientDrawer";

function RecipePage() {

    const recipeTitle = "Meatloaf";
    const recipeAuthor = "";
    const recipeLevel = "Beginner";
    const recipeType = "Entree";
    const recipeImage = "/recipes/meatLoaf.jpg";

    const meatloafIngredients = [{ name: "medium carrot", amount: 1 },
    { name: "rib celery", amount: 1 },
    { name: "medium onion", amount: (1 / 2) },
    { name: "medium red bell pepper", amount: (1 / 2) },
    { name: "white mushrooms", amount: 4 },
    { name: "cloves garlic", amount: 3 },
    { name: "ground chuck", amount: (2.5), amountType: "pounds" },
    { name: "Worcestershire sauce", amount: 1, amountType: "tablespoon" },
    { name: "large egg, beaten", amount: 1 },
    { name: "dried Italian herbs", amount: 1, amountType: "teaspoon" },
    { name: "salt", amount: 2, amountType: "teaspoons" },
    { name: "ground black pepper", amount: 1, amountType: "teaspoon" },
    { name: "cayenne pepper", amount: (1 / 2), amountType: "teaspoon" },
    { name: "plain bread crumbs", amount: 1, amountType: "cup" }];

    const meatloafGlazeIngredients = [{ name: "brown sugar", amount: 2, amountType: "tablespoons" },
    { name: "ketchup", amount: 2, amountType: "tablespoons" },
    { name: "Dijon mustard", amount: 2, amountType: "tablespoons" },
    { name: "Sriracha sauce (optional)", amount: 1, amountType: "teaspoon" }]

    const meatloafSteps = [{ number: 1, instruction: "Gather all ingredients.", image: "/recipes/ingredients.jpg" },
    { number: 2, instruction: "Preheat the oven to 325 degrees F (165 degrees C). Line a baking dish with lightly greased foil.", image: "/recipes/oven.jpg" },
    { number: 3, instruction: "Place carrot, celery, onion, bell pepper, mushrooms, and garlic in a food processor; pulse until very finely chopped, almost to a purée. Transfer to a large mixing bowl.", image: "/recipes/foodProcessor.jpeg" },
    { number: 4, instruction: "Add ground chuck to the vegetables, along with Worcestershire sauce, egg, Italian herbs, salt, black pepper, and cayenne. Mix gently with a wooden spoon until ingredients are just combined. Sprinkle in bread crumbs and gently mix with your fingertips until just combined; don't overmix.", image: "/recipes/mixMeatloaf.jpg" },
    { number: 5, instruction: "Shape the mixture into a loaf, about 4 inches high by 6 inches across. Place in the prepared baking pan.", image: "/recipes/meatloafInPan.jpg" },
    { number: 6, instruction: "Bake in the preheated oven just until the meatloaf is hot, about 15 minutes.", image: "" },
    { number: 7, instruction: "Remove meatloaf from the oven. Spoon glaze on the top of the meatloaf with the back of a spoon, then pull a tiny bit glaze down the sides.", image: "/recipes/glaze.jpg" },
    { number: 8, instruction: "Return to the oven, and bake until no longer pink inside, 45 to 75 more minutes. An instant-read thermometer inserted into the thickest part of the loaf should read at least 160 degrees F (70 degrees C), so start checking at 45 minutes and continue baking until meatloaf reaches that temperature. Cooking time will depend on shape and thickness of the meatloaf.", image: "" },
    { number: 9, instruction: "Serve hot and enjoy!", image: "/recipes/meatLoaf.jpg" }]

    return (
        <div>
            <NavBar />
            <div className="z-40 px-0">
                <IngredientDrawer
                    ingredients={meatloafIngredients}
                    secondaryIngredients={meatloafGlazeIngredients} />
            </div>
            <div className="text-gray-800 max-w-7xl mx-auto px-6 mt-28 z-20 md:mt-16">
                <div className="max-w-4xl mx-auto bg-white mt-8 shadow-lg z-10">
                    <Link href={"/"} className="text-sm text-color4 hover:text-colour3">
                        <u className="flex flex-row items-center mb-0">
                            <IoIosArrowBack />Back to Search
                        </u>
                    </Link>
                    <div className="flex flex-row px-6 py-6">
                        <div className="flex flex-col">
                            <RecipeSummary
                                recipeTitle={recipeTitle}
                                recipeAuthor={recipeAuthor}
                                recipeLevel={recipeLevel}
                                recipeType={recipeType}
                                recipeImage={recipeImage} />
                        </div>
                    </div>
                    <IngredientList
                        ingredients={meatloafIngredients}
                        secondaryIngredients={meatloafGlazeIngredients}
                        category="Ingredients"
                        subcategory1="Meatloaf Ingredients"
                        subcategory2="Glaze Ingredients" />
                    <StepsList
                        steps={meatloafSteps}
                        category="Instructions" />
                </div>
            </div>
        </div>
    );
}


export default RecipePage