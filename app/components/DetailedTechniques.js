


"use client"

import React from "react";
import { IoIosArrowBack } from 'react-icons/io'; // Import the back arrow icon 

import { useRouter } from "next/navigation";

import Link from 'next/link';
import Image from "next/image";
import techniques from "@/public/techniques/techniques";
import recipes from "@/public/recipes/recipes";
import BackButton from "./BackButton";


const DetailedTechniques = ({ technique, isPopup }) => {

  const router = useRouter();

  return (

    <div className={`flex flex-col w-full ${!isPopup && "min-h-screen"} bg-colour5`}>
      <div className="min-h-screen mx-auto sm:w-4/5 bg-white my-4 shadow-lg z-10 px-8 space-y-6">

        <div className="flex flex-col items-start">

          {/* Back to Techniques page (show only if not popup) */}
          {!isPopup &&
            <button onClick={() => { router.back() }} className="text-sm text-color4 hover:text-colour3">
              <u className="flex flex-row items-center mb-6">
                <IoIosArrowBack /> {"Back"}
              </u>
            </button>}

          {/* Title of the technique */}
          <h1 className="text-3xl font-bold text-colour1">{technique.name}</h1>
        </div>

        <h2 className="text-lg font-semibold text-colour3">Skill Level: <span className="text-colour2">{technique.level}</span></h2>

        {/* The combined text to make it look like a paragraph ( maybe will find another way to do it ) */}
        {technique.description.map((section, index) => (

          <div key={index} className="flex flex-col gap-4 mt-4 p-4 bg-colour4 rounded-md shadow-md">
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
          {technique.description.map((desc, index) => (
            <div key={index} className="flex flex-wrap justify-between items-stretch gap-3">
              {desc.image1 && (
                <div className="sm:flex-1 sm:max-w-[48%] sm:h-[200px]">
                  <Image
                    src={desc.image1}
                    alt="Technique step image 1"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover sm:w-full sm:h-full"
                  />
                </div>
              )}

              {desc.image2 && (
                <div className="sm:flex-1 sm:max-w-[48%] sm:h-[200px]">
                  <Image
                    src={desc.image2}
                    alt="Technique step image 2"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover sm:w-full sm:h-full"
                  />
                </div>
              )}
            </div>
          ))}


        {/* Suggested Recipes */}
        <div>
          <h2 className="text-xl font-bold text-colour1 mt-6">Recipes with this Technique:</h2>
          <ul className="list-disc pl-6 text-colour1 mb-6">

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
    </div>
  );
};

export default DetailedTechniques;
