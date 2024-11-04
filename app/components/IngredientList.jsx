function IngredientList(props) {

    const category = props.category;
    const subcategory1 = props.subcategory1;
    const subcategory2 = props.subcategory2;
    const ingredientList = props.ingredients;
    const secondaryIngredients = props.secondaryIngredients;
    const multiplierOn = false;
    const multiplierAmount = "var";

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
        <div className="flex flex-row">
            <button
                type="button"
                className="text-gray-900 bg-white 
                    border border-gray-300 
                    focus:outline-none hover:bg-gray-100 
                    focus:ring-4 focus:ring-gray-100 font-medium rounded-lg 
                    text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
                    dark:text-white dark:border-gray-600 
                    dark:hover:bg-gray-700 
                    dark:hover:border-gray-600 
                    dark:focus:ring-gray-700">
                x1
            </button>
            <button
                type="button"
                className="text-gray-900 bg-white 
                    border border-gray-300 
                    focus:outline-none hover:bg-gray-100 
                    focus:ring-4 focus:ring-gray-100 font-medium rounded-lg 
                    text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
                    dark:text-white dark:border-gray-600 
                    dark:hover:bg-gray-700 
                    dark:hover:border-gray-600 
                    dark:focus:ring-gray-700">
                x2
            </button>
            <button
                type="button"
                className="text-gray-900 bg-white 
                    border border-gray-300 
                    focus:outline-none hover:bg-gray-100 
                    focus:ring-4 focus:ring-gray-100 font-medium rounded-lg 
                    text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
                    dark:text-white dark:border-gray-600 
                    dark:hover:bg-gray-700 
                    dark:hover:border-gray-600 
                    dark:focus:ring-gray-700">
                x3
            </button>
        </div>
        {secondaryIngredients.length > 0 ? <h3 className="italic mt-2 mb-1">{subcategory1}:</h3> : null}
        <ul className="list-item">{listItems}</ul>
        {secondaryIngredients.length > 0 ? <h3 className="italic mt-2 mb-1">{subcategory2}:</h3> : null}
        {secondaryIngredients.length > 0 ? <ul className="list-item">{secondaryListItems}</ul> : null}
    </>);
}
export default IngredientList