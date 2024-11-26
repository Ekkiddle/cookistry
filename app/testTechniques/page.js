// testTechnique/page.js
import React from "react";
import DetailedTechniques from "../components/DetailedTechniques"; 
import Detailed from "@/public/techniques/Detailed"; // Import the data
import NavBar from "../components/navbar";



const TestDetailedTechniques = () => {
  return (    
    <div className="flex flex-col w-full min-h-screen mt-5 bg-colour5">
      <DetailedTechniques technique={Detailed[0]} /> {/* Pass the first technique */}
    </div>
  );
};

export default TestDetailedTechniques;
