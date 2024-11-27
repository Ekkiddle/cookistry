// recipe card component for use in the recipe list on the main page of webapp.

import { Button } from "@mui/material";
import Link from 'next/link';

// takes a single recipe as a prop to the component. This component is also responsible for navigating to
// the recipe page for that specific recipe.
const RecipeCard = ({recipe}) => {

    return(
        <div className="flex flex-col bg-colour4 p-2 gap-2">
            <div className="flex flex-col md:flex-row gap-2">
                <div className="w-full h-full min-h-40">
                    <img 
                        src={recipe.image} 
                        alt="Recipe" 
                        className="w-full h-full object-cover max-h-40 md:max-h-48" 
                    />
                </div>
                <div className="w-full flex flex-col">
                    <strong className="text-xl">{recipe.name}</strong>
                    <div className="flex flex-row gap-5 text-sm text-gray-500 items-center">
                        <h1>{recipe.type}</h1>
                        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                        <h1>{recipe.level}</h1>
                    </div>
                    <h2 className="text-md font-bold">{recipe.ingredients[0].listname}</h2>
                    <ul className="list-disc pl-5 line-clamp-4 text-sm">
                        {recipe.ingredients[0].list.map((ingredient, index) => (
                        <li key={index}>{ingredient.amount} {ingredient.amountType} of {ingredient.ingredient}</li>
                        ))}
                    </ul>
                    <Link href={`/recipes/${recipe.slug}`} passHref>
                        <div className="bg-colour3 flex flex-col mt-2 rounded-md">
                            <Button variant="contained" color="none" size="small">Go to Recipe Page</Button>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default RecipeCard