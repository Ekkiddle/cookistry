"use client"

import { useState } from "react";
import FilterMenu from "./components/Filtermenu";

import RecipeList from "./components/Recipelist";

export default function Home() {
  const [value, setValue] = useState("type")

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);

  return (
    <main className="flex w-full min-h-screen flex-col bg-colour5">
      <div className="w-full text-black">
      <div className="flex flex-col md:flex-row justify-between pt-2 pb-2 px-5 gap-2">
        <h1 className="text-3xl font-bold text-colour1">
          Recipes
        </h1>
        <div className="flex flex-col md:flex-row my-auto gap-3 md:gap-5">
          <div className="relative">
            <button
              className="p-2 w-full rounded-md bg-slate-500 h-8 flex items-center justify-center hover:bg-slate-700 text-white hover:text-slate-500"
              onClick={handleOpenFilter}
              >
              Filter Recipes
            </button>
            {openFilter && <FilterMenu handleClose={handleCloseFilter} />}
          </div>
          <div className="flex flex-row">
            <label htmlFor="sort" className="pr-1.5 my-auto text-colour1 w-full">
              Sort by
            </label>
            <select id="sort" onChange={handleChange} className="p-1 text-colour2 bg-colour4 rounded-md w-full">
              <option value="type">Type</option>
              <option value="level">Level</option>
            </select>
          </div>
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
