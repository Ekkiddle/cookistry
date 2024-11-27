"use client"

import NavBar from "../components/navbar";
import SearchList from "../components/SearchList";
import { useState } from "react";

export default function Page() {
  const [sortMode, setSortMode] = useState("name");

  const handleChange = (e) => {
    setSortMode(e.target.value);
  }

  const DEMO_RESULTS = [
    {
      type: 'technique',
      item: {
        image: "/techniques/fold-in.jpg",
        imageAlt: "A person mixing dough using a wooden spatula in a stainless bowl. Photo by Ron Lach from Pexels.com.",
        name: "Fold in",
        level: "intermediate",
        summary: "A technique for carefully combining two substances of different thickness and weight into one (relatively) smooth mixture."
      }
    },
    {
      type: 'technique',
      item: {
        image: "/techniques/fold-burrito.jpg",
        imageAlt: "A top-down shot of a single burrito on a white countertop. Photo by Polina Tankilevitch from Pexels.com",
        name: "Fold a burrito",
        level: "beginner",
        summary: "Folding a burrito correctly can help ensure its delicious contents stay inside better."
      }
    },
    {
      type: 'recipe',
      item: {
        name: "Folded Pork Cutlets",
        slug: "",
        author: "",
        type: "entree",
        level: "advanced",
        image: "/recipes/folded-pork.jpg",
        ingredients: [
          {
            listname: "Ingredients",
            list: [
              { ingredient: "broccoli florets", amount: 2, amountType: "cups" },
              { ingredient: "shredded cheddar cheese", amount: 1, amountType: "cup" },
              { ingredient: "olive oil", amount: 2, amountType: "tbsp" },
              { ingredient: "salt", amount: 0.5, amountType: "tsp" },
              { ingredient: "black pepper", amount: 0.5, amountType: "tsp" },
            ],
          },
        ]
      }
    }
  ]

  return (
    <div className="flex flex-col w-full min-h-screen bg-colour5">
      <div className="z-10"><NavBar /></div>
      <div className="flex flex-col md:flex-row md:justify-between pt-28 md:pt-16 pb-4 px-5">
        <h1 className="text-2xl font-bold text-colour2">
          Results for "fold"
        </h1>
        <div className="flex my-auto">
          <label htmlFor="sort" className="pr-1.5 my-auto text-colour1">
            Sort by
          </label>
          <select id="sort" onChange={handleChange} className="p-1 text-colour2 bg-colour4 rounded-md">
          <option value="name">Title</option>
          <option value="level">Level</option>
          </select>
        </div>
      </div>
      <div className="z-0">
        <SearchList result_list={DEMO_RESULTS} sortBy={sortMode} />
      </div>
    </div>
  );
}
