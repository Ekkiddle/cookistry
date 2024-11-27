"use client";

import React, { useState } from "react";
import { useFilter } from "@/app/components/Filter";
import RecipeCard from "@/app/components/RecipeCard";
import TechniquesCard from "@/app/components/techniquesCard";
import recipes from "@/public/recipes/recipes";
import techniques from "@/public/techniques/techniques";

// Combine recipes and techniques
const searchData = [
    ...recipes,
    ...techniques.map((technique) => ({ ...technique, type: "technique" })),
];

const SearchResults = ({ params: paramsPromise }) => {
    const params = React.use(paramsPromise);
    const { query } = params;

    const { filters } = useFilter(); // Access filters
    const [sortBy, setSortBy] = useState("type"); // Default sorting by title

    const sortOrder = {
        level: ["beginner", "intermediate", "advanced"],
        type: ["appetizer", "entree", "dessert", "technique"],
    };

    // Apply filters
    const filteredData = searchData.filter(
        (item) =>
            query ? (item.name || item.title).toLowerCase().includes(query.toLowerCase()) : true
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
            {/* Sort By Options */}
            <div className="mb-4 p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Showing results for: "{query}"</h1>
                <select
                    className="border rounded-md px-3 py-1"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="title">Title</option>
                    <option value="level">Level</option>
                    <option value="type">Type</option>
                </select>
            </div>

            {/* Render Grouped Data */}
            <div>
                {Object.keys(groupedData).sort().map((groupKey) => (
                    <div key={groupKey} className="w-full">
                        {/* Group Header */}
                        <h2 className="sticky top-24 md:top-12 z-10 p-2 pl-6 text-2xl font-bold bg-colour2 text-colour4">
                            {groupKey.charAt(0).toUpperCase() + groupKey.slice(1)}
                        </h2>
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
        </div>
    );
};

export default SearchResults;
