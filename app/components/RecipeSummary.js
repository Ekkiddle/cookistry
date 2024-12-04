import StarRatingDisplay from "./StarRatingDisplay";

function RecipeSummary({ 
    recipeTitle,
    recipeAuthor, 
    recipeLevel, 
    recipeType, 
    recipeImage, 
    imgDescription, 
    showMedia, 
    onToggleShowMedia, 
    recipeRating }) {

    return (
        <>
            {/* Titles and subtitles */}
            <h3 className="font-bold text-4xl">{recipeTitle}</h3>
            <h2>{" Author: "}{recipeAuthor}</h2>
            <h2>{"Level: "}{recipeLevel}</h2>
            {/* User rating component */}
            <div className="flex flex-row items-center gap-3">
                {"Average Rating: "}
                <StarRatingDisplay rating={recipeRating} />
            </div>

            {/* Horizontal flex box */}
            <div className="flex flex-row justify-between items-center">

                {/* First item: recipe type */}
                <div>
                    <h2 className="mb-4">{"Type: "}{recipeType}</h2>
                </div>

                {/* Second item: recipe only toggle */}
                <div>
                    <label className="items-center cursor-pointer inline-flex">
                        <input
                            type="checkbox"
                            checked={!showMedia}
                            onChange={onToggleShowMedia}
                            className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
                                                        rounded-full peer peer-checked:after:translate-x-full 
                                                        rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                                                        after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border 
                                                        after:rounded-full after:h-5 after:w-5 after:transition-all
                                                        peer-checked:bg-blue-600" />
                        <span className="ms-3 text-sm text-black">{"Recipe only"}</span>
                    </label>
                </div>
            </div>

            {/* Conditionally show image */}
            <div>
                {showMedia && (<img className="h-auto max-w lg:pl-20 lg:pr-28" src={recipeImage} alt={imgDescription} />)}
            </div>
        </>
    );
}

export default RecipeSummary;