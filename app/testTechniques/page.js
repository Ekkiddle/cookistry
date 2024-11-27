// testTechnique/page.js
import React from "react";
import DetailedTechniques from "../components/DetailedTechniques"; 
import techniques from "@/public/techniques/techniques";
import NavBar from "../components/navbar";

const TestDetailedTechniques = () => {
  return (    
    <div className="flex flex-col w-full min-h-screen mt-5 bg-colour5">
      <div className="z-10"><NavBar /></div>
      <DetailedTechniques technique={techniques[0]} /> {/* Pass the first technique */}
    </div>
  );
};

export default TestDetailedTechniques;
