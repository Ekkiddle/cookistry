
"use client"

// components/DetailedTechniques.js
import React from "react";
import { IoIosArrowBack } from 'react-icons/io'; // Import the back arrow icon

import { useRouter } from "next/navigation";

import Link from 'next/link';
import Image from "next/image";
import techniques from "@/public/techniques/techniques";
import recipes from "@/public/recipes/recipes";


const DetailedTechniques = ({ technique }) => {

  const router = useRouter();

  

  return (
    <div className="flex flex-col w-full min-h-screen bg-colour5">
      <div className="max-w-5xl mx-auto bg-white mx-6 shadow-lg z-10 p-4">
      
      <div className="flex flex-col items-start pb-4">

        {/* Back to Techniques page  */}
          <button onClick={() => router.back()} className="text-sm text-color4 hover:text-colour3">
            <u className="flex flex-row items-center mb-0">
              <IoIosArrowBack /> {"Back to Search"}
            </u>
          </button>

        {/* Title of the technique */}
        <h1 className="text-3xl font-bold text-colour1">{technique.name}</h1>
      </div>

      <h2 className="text-lg font-semibold text-colour3">Skill Level: <span className="text-colour2">{technique.level}</span></h2>
      
      {/* The combined text to make it look like a paragraph ( maybe will find another way to do it ) */}
      {technique.description.map((section, index) =>(
        
        <div key ={index} className="flex flex-col gap-4 mt-4 p-4 bg-colour4 rounded-md shadow-md">
          <h1 className="text-colour1 font-bold" > Summary</h1>
          {section.text.map((text, textIndex) => (
            <p key={textIndex} className="text-gray-700">{text}</p>
          ))}
        </div>
      ))}
      
      {/* video */}
      {technique.main_video && (
        <div className="mt-4">
          <iframe
            width="100%"
            height="315"
            src={technique.main_video.replace("watch?v=", "embed/")} 
            title="Main Video"
          ></iframe>
        </div>
      )}

      {/* rendering Image 1 and 2  */}
      <div className="grid gap-4 mt-4 items-center ">
        {technique.description.map((desc, index) => ( 
        <div key = {index} className="flex gap-3" >  
            {desc.image1 && (
            <Image
            src={desc.image1}
            alt="Technique step image 1"
            width={300}
            height={200}
            className=" rounded-lg object-cover w-full object-cover max-h-40 md:max-h-48"
            />
            )}

            {desc.image2 && (
            <Image
            src={desc.image2}
            alt="Technique step image 2"
            width={300}
            height={200}
            className="  rounded-lg object-cover w-full  object-cover max-h-40 md:max-h-48 "
            />
            )}
          </div>
          ))}
      </div>

      {/* Suggested Recipes */}

      <h2 className="text-xl font-bold text-colour1 mt-6">Recipes with this Technique:</h2>
      <ul className="list-disc pl-6 text-colour1">
      
      {technique.recipes.map((recipe, index) => {

    // Find the matching recipe in the recipes array

    // Used ChatGpt for help , i wasn't familiar with how "slugs" work , so i made sure to ask chatgpt to help me understand and debug 
    // it helped me debug and find a way to get the recipe name from recipe.js @public 
        const matchingRecipe = recipes.find(r => r.name === recipe.name);

    // If a matching recipe is found, use its slug
        

      return (
        <li key={index} className="mt-1">
          {matchingRecipe ? (
              <Link
              className={`text-blue-500 hover:text-blue-700 underline ${!matchingRecipe ? "cursor-not-allowed text-gray-400" : ""}`}
              href={`/recipes/${matchingRecipe.slug}`}
            >
              {recipe.name}
            </Link>

          ) : (
            <span className="text-gray-500">{recipe.name}</span>
          )}
        </li>
      );
    })}
      </ul>
    </div>
    </div>
  );
};

export default DetailedTechniques;
