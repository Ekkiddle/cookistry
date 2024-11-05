// components/DetailedTechniques.js
import React from "react";
import Button from '@mui/material/Button';
import Link from 'next/link'; // Import Link from Next.js
import { IoIosArrowBack } from 'react-icons/io'; // Import the back arrow icon

import Image from "next/image";

const DetailedTechniques = ({ technique }) => {

  const combinedText = technique.description.map(section => section.text).join(" ");
  return (
    <div className="flex flex-col w-full min-h-screen bg-colour5 p-6 pt-20">
      {/* Flex container for button and title stacked vertically */}
      <div className="flex flex-col items-start pb-4">
        {/* Back to Technique list link */}
        <Link href="/DetailedTechniques" className="text-sm text-colour2 hover:text-colour3 flex items-center mb-2">
          <IoIosArrowBack className="mr-1" /> Back to Technique List
        </Link>
        {/* Title of the technique */}
        <h1 className="text-3xl font-bold text-colour1">{technique.title}</h1>
      </div>


      {/* the skill level  */}
      <h2 className="text-lg font-semibold text-colour1">Skill Level: <span className="text-colour2">{technique.level}</span></h2>


      {/* Combined Description Text */}
      <div className="flex flex-col gap-4 mt-4 p-4 bg-colour4 rounded-md shadow-md">
        <p className="text-colour1">{combinedText}</p>
      </div>


      {/* Main Video Display */}
      {technique.main_video && (
        <div className="mt-4">
          <iframe
            width="100%"
            height="315"
            src={technique.main_video.replace("watch?v=", "embed/")} 
            title="Main Video"
            allowFullScreen
          ></iframe>
        </div>
      )}


<div className="flex flex-row w-full gap-4 mt-4">
        {technique.image1 && (
          <Image
            src={technique.image1}
            alt="Technique step image 1"
            width={300}
            height={200}
            className="rounded-lg border border-colour2 object-cover"
          />
        )}
        {technique.image2 && (
          <Image
            src={technique.image2}
            alt="Technique step image 2"
            width={300}
            height={200}
            className="rounded-lg border border-colour2 object-cover"
          />
        )}
      </div>


      

      {/* Suggested Recipes */}
      <h2 className="text-xl font-bold text-colour1 mt-6">Recipes with this Technique:</h2>
      <ul className="list-disc pl-6 text-colour1">
        {technique.recipes.map((recipe, index) => (
          <li key={index} className="mt-1">{recipe}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetailedTechniques;
