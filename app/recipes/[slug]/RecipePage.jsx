"use client";
import Link from "next/link";
import React from "react";
import { useState, useRef, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import NavBar from '../../components/navbar';
import IngredientList from '../../components/IngredientList';
import StepsList from '../../components/StepsList';
import RecipeSummary from '../../components/RecipeSummary';
import IngredientDrawer from "../../components/IngredientDrawer";
import recipes from "@/public/recipes/recipes";

function RecipePage({ params = { slug: "meatloaf" } }) {

    const { slug } = params;
    const recipe = recipes.find((recipe) => recipe.slug === slug);

    // // State to control drawer visibility
    // const [showDrawer, setShowDrawer] = useState(false);

    // const handleOutOfView = () => setShowDrawer(true);
    // const handleInView = () => setShowDrawer(false);

    // Early return if recipe is not found
    if (!recipe) return <p>Recipe not found</p>;

    return (
        <div>
            <NavBar />
            <div className="z-40 px-0">
                <IngredientDrawer ingredients={recipe.ingredients} />
            </div>
            <div className="text-gray-800 max-w-7xl mx-auto px-6 mt-28 z-20 md:mt-16">
                <div className="max-w-4xl mx-auto bg-white mt-8 shadow-lg z-10">
                    <Link href={"/"} className="text-sm text-color4 hover:text-colour3">
                        <u className="flex flex-row items-center mb-0">
                            <IoIosArrowBack />Back to Search
                        </u>
                    </Link>
                    <div className="flex flex-row px-6 py-6 md:px-12">
                        <div className="flex flex-col">
                            <RecipeSummary
                                recipeTitle={recipe.name}
                                recipeAuthor={recipe.author}
                                recipeLevel={recipe.level}
                                recipeType={recipe.type}
                                recipeImage={recipe.image} />
                        </div>
                    </div>
                    <div className="sticky top-24 md:top-12 bg-colour2 z-5 shadow-xl">
                        <h2 className="m-4 text-colour5 font-bold text-2xl">Ingredients</h2>
                    </div>
                    <IngredientList ingredients={recipe.ingredients} />
                    <div className="sticky top-24 md:top-12 bg-colour2 shadow-xl">
                        <h2 className="m-4 text-colour5 font-bold text-2xl">{"Instructions"}</h2>
                    </div>
                    <StepsList instructions={recipe.instructions} />
                </div>
            </div>
        </div>
    );
}


export default RecipePage