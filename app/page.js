"use client"

import { useState } from "react";
import FilterMenu from "./components/Filtermenu";
import FilterButton from "./components/FilterButton";
import RecipeList from "./components/Recipelist";

export default function Home() {
  const [value, setValue] = useState("type")

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <main className="flex w-full min-h-screen flex-col bg-colour5">
      <div className="w-full text-black">
      <div className="flex flex-wrap justify-between py-4 px-5">
        <h1 className="text-2xl font-bold text-colour2">
          Recipes
        </h1>
        <div className="flex items-center ml-auto sm:ml-0">
          <label htmlFor="sort" className="pr-1.5 my-auto text-colour1">
            Sort by
          </label>
          <select id="sort" 
            value={value}
            onChange={(event) => {setValue(event.target.value)}} 
            className="p-1 text-colour2 bg-colour4 rounded-md"
          >
            <option value="level">Level</option>
            <option value="name">Title</option>
            <option value="type">Type</option>
          </select>
          <FilterButton />
        </div>
      </div>
      <div className="w-full h-1 rounded-lg bg-colour4"></div>
        <div>
          <RecipeList sortBy={value} />        
        </div>
      </div>
    </main>
  );
}
