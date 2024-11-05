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
        <div className="sticky top-24 md:top-12 bg-colour2 z-5 shadow-xl">
            <h2 className="m-4 text-colour5 font-bold text-2xl">{category}</h2>
        </div>
        <div className="px-6">
            <div className="flex flex-row">
                <button
                    type="button"
                    className="text-gray-900 bg-white 
                    border border-gray-100 
                    focus:outline-none hover:bg-gray-100 
                    focus:ring-4 focus:ring-colour3 font-medium rounded-lg 
                    text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
                    dark:text-white dark:colour4 
                    dark:hover:bg-colour3
                    dark:hover:border-colour3 
                    dark:focus:ring-colour3">
                    x1
                </button>
                <button
                    type="button"
                    className="text-gray-900 bg-white 
                border border-gray-100 
                focus:outline-none hover:bg-gray-100 
                focus:ring-4 focus:ring-colour3 font-medium rounded-lg 
                text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
                dark:text-white dark:colour4 
                dark:hover:bg-colour3
                dark:hover:border-colour3 
                dark:focus:ring-colour3">
                    x2
                </button>
                <button
                    type="button"
                    className="text-gray-900 bg-white 
                border border-gray-100 
                focus:outline-none hover:bg-gray-100 
                focus:ring-4 focus:ring-colour3 font-medium rounded-lg 
                text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
                dark:text-white dark:colour4 
                dark:hover:bg-colour3
                dark:hover:border-colour3 
                dark:focus:ring-colour3">
                    x3
                </button>
            </div>
            {secondaryIngredients.length > 0 ? <h3 className="italic mt-2 mb-1">{subcategory1}:</h3> : null}
            <ul className="list-item list-disc ml-4">{listItems}</ul>
            {secondaryIngredients.length > 0 ? <h3 className="italic mt-2 mb-1">{subcategory2}:</h3> : null}
            {secondaryIngredients.length > 0 ? <ul className="list-item list-disc ml-4">{secondaryListItems}</ul> : null}
        </div>
    </>);
}
export default IngredientList