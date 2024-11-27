"use client"

import Image from "next/image";
import { useState } from "react";
import NavBar from "./components/navbar";
import techniques from "@/public/techniques/techniques";
import recipes from "@/public/recipes/recipes";
import RecipeList from "./components/Recipelist";

export default function Home() {
  const [value, setValue] = useState("type")

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <main className="flex w-full min-h-screen flex-col bg-colour5">
      <NavBar />
      <div className="w-full h-24 md:h-12"></div>
      <div className="w-full text-black">
      <div className="flex justify-between pt-2 pb-2 px-5">
        <h1 className="text-3xl font-bold text-colour1">
          Recipes
        </h1>
        <div className="flex my-auto">
          <label htmlFor="sort" className="pr-1.5 my-auto text-colour1">
            Sort by
          </label>
          <select id="sort" onChange={handleChange} className="p-1 text-colour2 bg-colour4 rounded-md">
            <option value="type">Type</option>
            <option value="level">Level</option>
          </select>
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
