// testTechnique/page.js
import React from "react";
import DetailedTechniques from "@/app/components/DetailedTechniques";
import techniques from "@/public/techniques/techniques";

const Page = ({params: paramsPromise}) => {
    const params = React.use(paramsPromise);
    const { slug } = params;
    const technique = techniques.find((technique) => technique.slug === slug);
    
  return (    
    <div className="flex flex-col w-full min-h-screen my-4 bg-colour5">
      <DetailedTechniques technique={technique} /> {/* Pass the first technique */}
    </div>
  );
};

export default Page;
