function RecipeSummary({ recipeTitle, recipeAuthor, recipeLevel, recipeType, recipeImage, imgDescription }) {

        return (
            <div>
                <h3 className="text-color1 font-bold text-4xl">{recipeTitle}</h3>
                <h2 className="text-color1">Author: {recipeAuthor}</h2>
                <h2 className="text-color1">Level: {recipeLevel}</h2>
                <div className="flex flex-row justify-between">
                    <div>
                        <h2 className="text-color1 mb-4">Type: {recipeType}</h2>
                    </div>
                    <div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
                                                        rounded-full peer peer-checked:after:translate-x-full 
                                                        rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                                                        after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border 
                                                        after:rounded-full after:h-5 after:w-5 after:transition-all
                                                        peer-checked:bg-blue-600" />
                            <span className="ms-3 text-sm text-black">Recipe only</span>
                        </label>
                    </div>
                </div>
                <div>
                    <img className="h-auto max-w md:px-6" src={recipeImage} alt={imgDescription} />
                </div>
            </div>
        );
    }
    
    export default RecipeSummary;