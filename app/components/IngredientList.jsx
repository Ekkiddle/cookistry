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
        <h3 className="medium-title">{category}</h3>
        <h3 className="small-title">{subcategory1}</h3>
        <ul className="list-item">{listItems}</ul>
        {secondaryIngredients.length > 0 ? <h3 className="small-title">{subcategory2}</h3> : null}
        {secondaryIngredients.length > 0 ? <ul className="list-item">{secondaryListItems}</ul> : null}
    </>);
}
export default IngredientList