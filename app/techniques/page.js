"use client"

import techniques from "@/public/techniques/techniques";
import TechniquesList from "../components/techniquesList";
import { useState } from "react";
import FilterButton from "../components/FilterButton";

export default function Page() {
  const [sortMode, setSortMode] = useState("level");

  const handleChange = (e) => {
    setSortMode(e.target.value);
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-colour5">
      <div className="flex flex-wrap justify-between p-4 ">
        <h1 className="text-2xl font-bold text-colour2">
          Techniques
        </h1>
        <div className="flex items-center ml-auto sm:ml-0">
          <label htmlFor="sort" className="pr-1.5 my-auto text-colour1">
            Sort by
          </label>
          <select id="sort" onChange={handleChange} className="p-1 text-colour2 bg-colour4 rounded-md">
            <option value="level">Level</option>
            <option value="name">Title</option>
          </select>
          <FilterButton ignoreRecipes={true} />
        </div>
      </div>
      <div className="z-0">
        <TechniquesList techniques={techniques} sortBy={sortMode} />
      </div>
    </div>
  );
}
