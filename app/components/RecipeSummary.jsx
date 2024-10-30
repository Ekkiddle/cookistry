function RecipeSummary(props) {

    const recipeTitle = props.recipeTitle;
    const recipeAuthor = props.recipeAuthor;
    const recipeLevel = props.recipeLevel;
    const recipeType = props.recipeType;

    return (
    <>
        <h3 className="big-title">{recipeTitle}</h3>
        <h2>Author: {recipeAuthor}</h2>
        <h2>Level: {recipeLevel}</h2>
        <h2>Type: {recipeType}</h2>
    </>
    );
}
export default RecipeSummary