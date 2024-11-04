function RecipeSummary(props) {

    const recipeTitle = props.recipeTitle;
    const recipeAuthor = props.recipeAuthor;
    const recipeLevel = props.recipeLevel;
    const recipeType = props.recipeType;
    const recipeImage = "meatloaf.jpg";
    const imgDescription = props.imgDescription;

    return (
        <div className="flex flex-col">
            <div>
                <h3 className="text-color1 font-bold text-xl">{recipeTitle}</h3>
                <h2 className="text-color1">Author: {recipeAuthor}</h2>
                <h2 className="text-color1">Level: {recipeLevel}</h2>
                <h2 className="text-color1">Type: {recipeType}</h2>
            </div>
            <div>
                <img className="h-auto max-w-full" src={recipeImage} alt={imgDescription} />
            </div>
        </div>
    );
}
export default RecipeSummary