import TechniquesList from "../components/techniquesList";
import NavBar from "../components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-colour5">
      <div className="z-10"><NavBar /></div>
      <div className="w-full h-28 md:h-16"></div>
      <div className="z-0"><TechniquesList /></div>
    </div>
  );
}
