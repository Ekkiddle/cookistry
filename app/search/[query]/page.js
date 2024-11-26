"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import recipes from "@/public/recipes/recipes";
import techniques from "@/public/techniques/techniques";

const Page = ({ params: paramsPromise }) => {
    const params = React.use(paramsPromise);
    const { query } = params;
    console.log("Search params: ", params);
    console.log("Query: ", query);
    
    const searchData = [
        ...recipes.map((recipe) => ({ ...recipe, type: "recipe" })),
        ...techniques.map((technique) => ({ ...technique, type: "technique" })),
    ];

    // Filter search results
    const results = searchData.filter((item) =>
        (item.name || item.title)
            .toLowerCase()
            .includes(query?.toLowerCase() || "")
    );

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
                Search Results for: "{query}"
            </h1>
            {results.length > 0 ? (
                <ul className="space-y-4">
                    {results.map((result, index) => (
                        <li
                            key={index}
                            className="border p-4 rounded-md shadow-md flex items-center gap-4"
                        >
                            <img
                                src={result.image}
                                alt={result.name || result.title}
                                className="w-16 h-16 object-cover rounded-md"
                            />
                            <div>
                                <p className="text-lg font-medium">{result.name || result.title}</p>
                                <p className="text-sm text-gray-500 capitalize">
                                    {result.type}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No results found.</p>
            )}
        </div>
    );
};

export default Page;
