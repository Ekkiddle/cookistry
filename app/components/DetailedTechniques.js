
import React from "react";
import Button from '@mui/material/Button';

import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io'; // back icon from react 

import Image from "next/image";

const DetailedTechniques = ({ technique }) => {


  {/* MAKE SURE TO FIX THIS */}
  const combinedText = technique.description.map(section => section.text).join(" ");

  return (
    <div className="flex flex-col w-full min-h-screen bg-colour5">
      <div className="max-w-5xl mx-auto bg-white mx-6 shadow-lg z-10 p-4">
      
      <div className="flex flex-col items-start pb-4">
        
        <Link href="/DetailedTechniques" className="text-sm text-colour2 font-bold hover:text-colour3 flex items-center mb-1">
          <IoIosArrowBack className="mr-2" /> Back to Technique List
        </Link>

        <h1 className="text-3xl font-bold text-colour1">{technique.title}</h1>
      </div>


      <h2 className="text-lg font-semibold text-colour3">Skill Level: <span className="text-colour2">{technique.level}</span></h2>


      {/* MAKE SURE TO FIX THIS -------------*/}
      {/* The combined text to make it look like a paragraph ( maybe will find another way to do it ) */}
      <div className="flex flex-col gap-4 mt-4 p-4 bg-colour4 rounded-md shadow-md">
        <h1 className="text-colour1 font-bold" > Summary</h1>
        <p className="text-colour1">{combinedText}</p>
      </div>


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
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        {technique.description && (
          <Image
            src={technique.image1}
            alt="Technique step image 1"
            width={300}
            height={200}
            className="rounded-lg border border-colour2 object-cover w-full sm:w-1/2" // Full width on mobile, half width on larger screens
          />
        )}
        {technique.image2 && (
          <Image
            src={technique.description.image2}
            alt="Technique step image 2"
            width={300}
            height={200}
            className="rounded-lg border border-colour2 object-cover w-full sm:w-1/2" // Full width on mobile, half width on larger screens
          />
        )}
      </div>

      {/* Suggested Recipes */}
      <h2 className="text-xl font-bold text-colour1 mt-6">Recipes with this Technique:</h2>
      <ul className="list-disc pl-6 text-colour1">
      {technique.recipes.map((recipe, index) => (
      <li key={index} className="mt-1">
        <Link className="text-blue-500 hover:text-blue-700 underline" href={`/recipes/${recipe.slug}`}>{recipe.name}
        </Link>
      </li>
      ))}
      </ul>
    </div>
    </div>
  );
};

export default DetailedTechniques;
