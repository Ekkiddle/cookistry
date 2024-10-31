// RecipeList.js
import React from 'react';
import recipes from '@/public/recipes/recipes'; // Adjust the path as necessary
import RecipeCard from './RecipeCard';

const RecipeList = ({ sortBy }) => {
    const sortOrder = {
        type: ['appetizer', 'entree', 'dessert'],
        level: ['beginner', 'intermediate', 'advanced'],
      };
    
      const sortedRecipes = [...recipes].sort((a, b) => {
        const order = sortOrder[sortBy];
        return order.indexOf(a[sortBy]) - order.indexOf(b[sortBy]);
      });

  // Function to group recipes by the specified property (type or level)
  const groupRecipes = (recipes, sortBy) => {
    return recipes.reduce((acc, recipe) => {
      const key = recipe[sortBy]; // Use the specified property to group
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(recipe);
      return acc;
    }, {});
  };

  const groupedRecipes = groupRecipes(sortedRecipes, sortBy);

  return (
    <div>
      {Object.keys(groupedRecipes).map((key) => (
        <div className="flex flex-col mb-8">
            <div className="sticky top-24 md:top-12 bg-colour2 z-10 shadow-xl">
                <h2 className="m-4 text-colour5 font-bold text-2xl">{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
            </div>
          {groupedRecipes[key].map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
