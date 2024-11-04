function IngredientList(props) {

    const category = props.category;
    const subcategory1 = props.subcategory1;
    const subcategory2 = props.subcategory2;
    const ingredientList = props.ingredients;
    const secondaryIngredients = props.secondaryIngredients;

    const listItems = ingredientList.map(ingredient =>
        <li key={ingredient.name}>
            {ingredient.amount}&nbsp;
            {ingredient.amountType || ""}&nbsp;
            {ingredient.name}</li>);

    const secondaryListItems = secondaryIngredients.map(ingredient =>
        <li key={ingredient.name}>
            {ingredient.amount}&nbsp;
            {ingredient.amountType || ""}&nbsp;
            {ingredient.name}</li>);

    return (<>
        <h3 className="text-xl font-bold mt-2">{category}</h3>
        {secondaryIngredients.length > 0 ? <h3 className="italic mt-2 mb-1">{subcategory1}:</h3> : null}
        <ul className="list-item">{listItems}</ul>
        {secondaryIngredients.length > 0 ? <h3 className="italic mt-2 mb-1">{subcategory2}:</h3> : null}
        {secondaryIngredients.length > 0 ? <ul className="list-item">{secondaryListItems}</ul> : null}
    </>);
}
export default IngredientList