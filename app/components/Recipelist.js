// RecipeList.js
import React from 'react';
import recipes from '@/public/recipes/recipes'; // Adjust the path as necessary
import RecipeCard from './RecipeCard';
import { useFilter } from './Filter';
import CategoryInfoButton from './CategoryInfoButton';

const RecipeList = ({ sortBy }) => {
  const sortOrder = {
    type: ['appetizer', 'entree', 'dessert'],
    level: ['beginner', 'intermediate', 'advanced'],
  };

  const { filters } = useFilter(); // Access filters from context

  // Apply the filters to the recipes
  const filteredRecipes = recipes.filter(
    (recipe) =>
        (filters.levels.length === 0 || filters.levels.includes(recipe.level)) 
        && (filters.types.length === 0 || filters.types.includes(recipe.type)) 
        && (filters.tags.length === 0 || filters.tags.every(tag => recipe.tags.includes(tag)))
    );

  // Sort the filtered recipes
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
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

  // Group the sorted and filtered recipes
  const groupedRecipes = groupRecipes(sortedRecipes, sortBy);


  return (
    <div>
      {Object.keys(groupedRecipes).map((key) => (
        <div className="flex flex-col mb-8">
            <div className="sticky flex flex-row justify-between align-center top-24 md:top-12 bg-colour2 z-10 shadow-xl p-2 pl-6">
                <h2 className="text-colour5 font-bold text-2xl">{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                {<CategoryInfoButton cat_name={sortBy} cat_option={key} />}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 z-0 gap-4 p-4">
              {groupedRecipes[key].map((recipe) => (
                <RecipeCard recipe={recipe} />
              ))}
            </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
