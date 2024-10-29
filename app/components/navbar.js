// Navbar component for Cookistry Website
import Link from "next/link";
import Searchbar from "./Searchbar";

const NavBar = () => {
    return(
    <header id="header" className="w-screen items-center bg-transparent w-full fixed">
      <nav className="flex flex-col md:flex-row gap-1 md:gap-3 items-center justify-between stretch w-screen h-full p-5 py-2 bg-colour2">
        <Link href={"/"}>
            <h1 className="text-colour4">Cookistry</h1>
        </Link>
        <Searchbar />
        <div className="flex flex-row gap-3 text-xs md:text-sm mt-auto">
          <Link href={"/"}>
              <h1 className="text-colour4 hover:text-colour3">Recipes</h1>
          </Link>
          <Link href={"/techniques"}>
              <h1 className="text-colour4 hover:text-colour3">Resources</h1>
          </Link>
        </div>
      </nav>
      <div className="h-2 w-full bg-colour3"></div>
    </header>
    );
}
 export default NavBar;