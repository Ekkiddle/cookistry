import { useEffect, useState } from "react";
import { useFilter } from "./Filter";
import FilterButton from "./FilterButton";
import RecipeCard from "./RecipeCard"
import recipes from "@/public/recipes/recipes";

export default function NoResults({query_text, ignoreRecipes, includeFilter}) {
  const [usingFilters, setUsingFilters] = useState(false);
  const { filters } = useFilter();

  // find top 4 recipes in case no results were found
  const suggestions = [...recipes].sort(
    (a, b) => b.rating - a.rating
  ).slice(0,4);

  // check whether filters are used to decide which error message to show
  useEffect(() => {
    setUsingFilters(!(filters.levels.length === 0)
    || !(ignoreRecipes || filters.types.length === 0)
    || !(ignoreRecipes || filters.tags.length === 0));
  }, [filters, ignoreRecipes])

  return(
    <div className="flex flex-col gap-2 p-4">
      {/* main header */}
      <div className="flex flex-wrap justify-between">
        {query_text ? (
          <h1 className="text-xl">
            <b>No results found for </b><i>&quot;{query_text}&quot;</i>
          </h1>
        ) : (
          <h1 className="text-xl">
            <>No results found!</>
          </h1>
        )}
        {(includeFilter && usingFilters) && <div className="flex items-center ml-auto">
          <FilterButton />
        </div>}
      </div>
      {/* failed search message */}
      {(query_text && usingFilters) && <p>
        Please check your search term for typos and review your filter settings,
        or check out one of our highest-rated recipes below!
      </p>}
      {(query_text && !usingFilters) && <p>
        Please check your search term for typos,
        or check out one of our highest-rated recipes below!
      </p>}
      {(!query_text && usingFilters) && <p>
        Please review your filter settings,
        or check out one of our highest-rated recipes below!
      </p>}
      {/* list of most popular recipes (cards) */}
      <h3 className="text-lg font-bold">Most Popular Recipes</h3>
      <div className="grid grid-cols-1 xl:grid-cols-2 z-0 gap-4">
        {
          suggestions.map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))
        }
      </div>
    </div>
  )
}