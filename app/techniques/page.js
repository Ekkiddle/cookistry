"use client"

import NavBar from "../components/navbar";
import TechniquesList from "../components/techniquesList";
import { useState } from "react";

export default function Page() {
  const [sortMode, setSortMode] = useState("level");

  const handleChange = (e) => {
    setSortMode(e.target.value);
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-colour5">
      <div className="flex justify-between pt-4 pb-4 px-5">
        <h1 className="text-2xl font-bold text-colour2">
          Techniques
        </h1>
        <div className="flex my-auto">
          <label htmlFor="sort" className="pr-1.5 my-auto text-colour1">
            Sort by
          </label>
          <select id="sort" onChange={handleChange} className="p-1 text-colour2 bg-colour4 rounded-md">
            <option value="level">Level</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
      <div className="z-0">
        <TechniquesList sortBy={sortMode} />
      </div>
    </div>
  );
}
