"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import NavBar from '../../components/navbar';
import IngredientList from '../../components/IngredientList';
import StepsList from '../../components/StepsList';
import RecipeSummary from '../../components/RecipeSummary';
import IngredientDrawer from "../../components/IngredientDrawer";
import recipes from "@/public/recipes/recipes";
import { useRouter } from "next/navigation";

function Page({ params: paramsPromise }) {
    const params = React.use(paramsPromise);
    const { slug } = params;
    const recipe = recipes.find((recipe) => recipe.slug === slug);

    const router = useRouter();

    // State to control drawer visibility
    const [showDrawer, setShowDrawer] = useState(false);
    const [showMedia, setShowMedia] = useState(true);

    const toggleRecipeOnly = () => setShowMedia(prev => !prev);

    // Refs for the ingredients and instructions sections
    const ingredientsRef = useRef(null);
    const instructionsRef = useRef(null);

    useEffect(() => {
        const ingredientsElement = ingredientsRef.current;
        const instructionsElement = instructionsRef.current;

        const ingredientsObserver = new IntersectionObserver(
            ([entry]) => {
                setShowDrawer(!entry.isIntersecting);
            },
            { root: null, threshold: 0 }
        );

        const instructionsObserver = new IntersectionObserver(
            ([entry]) => {
                setShowDrawer(entry.isIntersecting);
            },
            { root: null, threshold: 0.1 }
        );

        if (ingredientsElement) ingredientsObserver.observe(ingredientsElement);
        if (instructionsElement) instructionsObserver.observe(instructionsElement);

        return () => {
            if (ingredientsElement) ingredientsObserver.unobserve(ingredientsElement);
            if (instructionsElement) instructionsObserver.unobserve(instructionsElement);
        };
    }, []);

    // Early return if recipe is not found
    if (!recipe) return <p>Recipe not found</p>;

    return (
        <div className="w-full flex justify-center px-8 md:px-10">
            <NavBar />

            {/* Ingredient drawer component */}
            <div className="z-40 px-0">
                {showDrawer && <IngredientDrawer ingredients={recipe.ingredients} />}
            </div>

            {/* Creates a background that has all the parts of recipe page on it */}
            <div className="max-w-5xl mx-auto bg-white mt-28 mx-6 shadow-lg z-10 md:mt-16">

                {/* Back to Search Button */}
                <button onClick={() => router.back()} className="text-sm text-color4 hover:text-colour3">
                    <u className="flex flex-row items-center mb-0">
                        <IoIosArrowBack /> {"Back to Search"}
                    </u>
                </button>

                {/* Recipe Summary */}
                <div className="px-6 py-6 md:pl-12">
                    <RecipeSummary
                        recipeTitle={recipe.name}
                        recipeAuthor={recipe.author}
                        recipeLevel={recipe.level}
                        recipeType={recipe.type}
                        recipeImage={recipe.image}
                        showMedia={showMedia}
                        onToggleShowMedia={toggleRecipeOnly} />
                </div>

                {/* Ingredients Section */}
                <div ref={ingredientsRef}>
                    <div className="sticky top-24 md:top-12 bg-colour2 z-5 shadow-xl">
                        <h2 className="m-4 text-colour5 font-bold text-2xl">{"Ingredients"}</h2>
                    </div>
                    <IngredientList 
                        portions={recipe.portions}
                        ingredients={recipe.ingredients} />
                </div>

                {/* Instructions Section */}
                <div ref={instructionsRef}>
                    <div className="sticky top-24 z-10 md:top-12 bg-colour2 shadow-xl">
                        <h2 className="m-4 text-colour5 font-bold text-2xl">{"Instructions"}</h2>
                    </div>
                    <StepsList instructions={recipe.instructions} showMedia={showMedia} />
                </div>
            </div>
        </div>
    );
}

export default Page;
