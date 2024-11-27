// Navbar component for Cookistry Website
import Link from "next/link";
import Searchbar from "./Searchbar";

const NavBar = () => {
    return(
    <header id="header" className="w-screen items-center bg-transparent w-full fixed z-20 top-0">
      <nav className="flex flex-col md:flex-row gap-1 md:gap-3 items-center justify-between stretch w-screen h-full p-5 py-2 bg-colour2">
        <Link href={"/"}>
            <h1 className="text-colour4 font-serif font-bold text-lg">Cookistry</h1>
        </Link>
        <div className="flex flex-col md:flex-row w-full gap-1 md:gap-3 max-w-[700px]">
          <Searchbar />
          <div className="flex flex-row gap-3 text-xs md:text-sm mt-auto justify-evenly w-full md:w-auto mt-3">
            <Link href={"/"}>
                <u className="text-colour4 hover:text-colour3">Recipes</u>
            </Link>
            <Link href={"/techniques"}>
                <u className="text-colour4 hover:text-colour3">Techniques</u>
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-2 w-full bg-colour3"></div>
    </header>
    );
}
 export default NavBar;