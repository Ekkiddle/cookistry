"use client"

import Image from "next/image";
import { useState } from "react";
import NavBar from "./components/navbar";
import RecipeList from "./components/Recipelist";

export default function Home() {
  const [value, setValue] = useState("type")

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <main className="flex w-screen min-h-screen flex-col bg-colour5">
      <NavBar />
      <div className="w-screen h-24 md:h-12"></div>
      <div className="w-full text-black">
        <div className="bg-colour4 w-full p-2">
          <strong className="text-4xl mx-2 text-colour2">Recipes</strong>
        </div>
        <div className="mx-4 mb-4 mt-1 text-sm text-gray-500">
          <label htmlFor="sort-options" className="mr-2">Sort by:</label>
          <select id="sort-options" onChange={handleChange} className="border p-1 rounded">
            <option value="type">Type</option>
            <option value="level">Level</option>
          </select>
        </div>
        <div className="w-full h-1 rounded-lg bg-colour4"></div>
        <div>
          <RecipeList sortBy={value} />        
        </div>
      </div>
    </main>
  );
}
