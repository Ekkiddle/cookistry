"use client";

import React, { useState, useRef, useEffect } from "react";
import IngredientList from '../../components/IngredientList';
import StepsList from '../../components/StepsList';
import RecipeSummary from '../../components/RecipeSummary';
import IngredientDrawer from "../../components/IngredientDrawer";
import FeedbackForm from "@/app/components/FeedbackForm";
import recipes from "@/public/recipes/recipes";
import { useRouter } from "next/navigation";
import { CheckmarkContextProvider } from "@/app/components/CheckmarkContext";
import BackButton from "@/app/components/BackButton";

function Page({ params: paramsPromise }) {
    const params = React.use(paramsPromise);
    const { slug } = params;
    const recipe = recipes.find((recipe) => recipe.slug === slug);

    // const router = useRouter();

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

        // State to track visibility of each section
        let isIngredientsVisible = true;
        let isInstructionsVisible = false;

        // Intersection Observer callback
        const handleIntersection = () => {
            // Set `setShowDrawer` based on both visibility states
            setShowDrawer(!isIngredientsVisible && isInstructionsVisible);
        };

        const ingredientsObserver = new IntersectionObserver(
            ([entry]) => {
                isIngredientsVisible = entry.isIntersecting; // Update state for ingredients
                handleIntersection();
            },
            { root: null, threshold: 0 }
        );

        const instructionsObserver = new IntersectionObserver(
            ([entry]) => {
                isInstructionsVisible = entry.isIntersecting; // Update state for instructions
                handleIntersection();
            },
            { root: null, threshold: 0.1 }
        );

        // Observe elements
        if (ingredientsElement) ingredientsObserver.observe(ingredientsElement);
        if (instructionsElement) instructionsObserver.observe(instructionsElement);

        // Cleanup on unmount
        return () => {
            if (ingredientsElement) ingredientsObserver.unobserve(ingredientsElement);
            if (instructionsElement) instructionsObserver.unobserve(instructionsElement);
        };
    }, []);


    // Early return if recipe is not found
    if (!recipe) return <p>Recipe not found</p>;

    return (
      <CheckmarkContextProvider>
        <div className="w-full flex justify-center px-6 space-y-4 mt-4 lg:px-8">

            {/* Ingredient drawer component */}
            <div className="z-40 px-0">
                {showDrawer && <IngredientDrawer ingredients={recipe.ingredients} />}
            </div>

            {/* Creates a background that has all the parts of recipe page on it */}
            <div className="mx-auto sm:w-4/5 bg-white mt-2 mx-8 shadow-lg z-10">
                <div className="px-4 sm:px-10">
                    <BackButton confirmCheckboxes={true}/>
                </div>
                {/* Recipe Summary */}
                <div className="px-6 py-6 md:pl-12">
                    <RecipeSummary
                        recipeTitle={recipe.name}
                        recipeAuthor={recipe.author}
                        recipeLevel={recipe.level}
                        recipeRating={recipe.rating}
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

                {/* Feedback Form Section */}
                <div>
                    <div className="sticky top-24 z-[4] md:top-12 bg-colour2 shadow-xl">
                        <h2 className="m-4 text-colour5 font-bold text-2xl">{"Feedback"}</h2>
                    </div>
                    <FeedbackForm />
                </div>
            </div>
        </div>
      </CheckmarkContextProvider>
    );
}

export default Page;
