"use client";

import CategoryInfoButton from "@/app/components/CategoryInfoButton"
import React, { useState } from "react";
import { useFilter } from "@/app/components/Filter";
import FilterButton from "@/app/components/FilterButton";
import RecipeCard from "@/app/components/RecipeCard";
import TechniquesCard from "@/app/components/techniquesCard";
import recipes from "@/public/recipes/recipes";
import techniques from "@/public/techniques/techniques";
import NoResults from "@/app/components/NoResults";

// Combine recipes and techniques
const searchData = [
    ...recipes,
    ...techniques.map((technique) => ({ ...technique, type: "technique" })),
];

const SearchResults = ({ params: paramsPromise }) => {
    const params = React.use(paramsPromise);
    const { query } = params;

    const { filters } = useFilter(); // Access filters
    const [sortBy, setSortBy] = useState("type");

    const sortOrder = {
        level: ["beginner", "intermediate", "advanced"],
        type: ["appetizer", "entree", "dessert", "technique"],
    };

    // Apply query and filters
    const filteredData = searchData.filter(
        (item) => {
          // decode query (recover characters like spaces)
          let query_dec = decodeURI(query);
          return (
            (filters.levels.length === 0 || filters.levels.includes(item.level))
            && (filters.types.length === 0 || filters.types.includes(item.type))
            && (filters.tags.length === 0 || filters.tags.every(tag => item.tags?.includes(tag)))
            && (query_dec ? (item.name || item.title).toLowerCase().includes(query_dec.toLowerCase()) : true)
          )
        }
    );

    // Sort the filtered data
    const sortedData = [...filteredData].sort((a, b) => {
        if (sortBy === "title") {
            return (a.title || a.name).localeCompare(b.title || b.name);
        } else {
            const order = sortOrder[sortBy];
            const aKey = a[sortBy]?.toLowerCase() || "";
            const bKey = b[sortBy]?.toLowerCase() || "";
            return order.indexOf(aKey) - order.indexOf(bKey);
        }
    });

    // Group by the selected key or first letter of title for "title" sort
    const groupData = (data, key) => {
        return data.reduce((acc, item) => {
            let groupKey;
            if (key === "title") {
                groupKey = (item.title || item.name).charAt(0).toUpperCase(); // Group by first letter
            } else {
                groupKey = item[key] || "Other";
            }
            if (!acc[groupKey]) acc[groupKey] = [];
            acc[groupKey].push(item);
            return acc;
        }, {});
    };

    const groupedData = groupData(sortedData, sortBy);

    return (
        <div className="">
            {/* Render Grouped Data */}
            {Object.keys(groupedData).length > 0? (
              // grouped data exists (resulst were found), show the list
              <div>
                  {/* Sort By Options */}
                  <div className="flex flex-wrap justify-between p-4">
                    <h1 className="text-xl">
                      <b>Showing results for </b><i>&quot;{decodeURI(query)}&quot;</i>
                    </h1>
                    <div className="flex items-center ml-auto">
                      <label htmlFor="sort" className="pr-1.5 my-auto text-colour1">
                        Sort by
                      </label>
                      <select id="sort"
                        className="p-1 text-colour2 bg-colour4 rounded-md"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <option value="level">Level</option>
                        <option value="title">Title</option>
                        <option value="type">Type</option>
                      </select>
                      <FilterButton />
                    </div>
                  </div>
                  {Object.keys(groupedData).map((groupKey) => (
                      <div key={groupKey} className="w-full">
                          {/* Group Header */}
                          <div className="sticky top-24 md:top-12 z-10 w-full flex flex-row justify-between p-2 pl-6 pr-4 bg-colour2">
                            <h2 className="text-xl font-bold text-colour4">
                              {groupKey.charAt(0).toUpperCase() + groupKey.slice(1)}
                            </h2>
                            {/* only include the info button if sortBy has specified categories */}
                            {sortOrder[sortBy] && <CategoryInfoButton cat_name={sortBy} cat_option={groupKey} />}
                          </div>
                          {/* Group Content */}
                          <div className="grid grid-cols-1 xl:grid-cols-2 z-0 gap-4 p-4">
                              {groupedData[groupKey].map((item, index) =>
                                  item.type === "technique" ? (
                                      <TechniquesCard key={index} technique={item} />
                                  ) : (
                                      <RecipeCard key={index} recipe={item} />
                                  )
                              )}
                          </div>
                      </div>
                  ))}
              </div>
            ) : (
              // grouped data empty (no results found)
              <NoResults query_text={decodeURI(query)} includeFilter={true} />
            )}
        </div>
    );
};

export default SearchResults;
