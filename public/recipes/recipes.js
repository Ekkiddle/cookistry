// recipes.js
const recipes = [
    {
      name: "Tacos",
      author: "",
      type: "entree",
      level: "intermediate",
      image: "/recipes/tacos.jpg", // Path to image goes here
      video: "", // Path to video goes here
      ingredients: [
        {
          listname: "Main Ingredients",
          list: [
            { ingredient: "ground beef", amount: 1, amountType: "lb" },
            { ingredient: "taco seasoning", amount: 1, amountType: "packet" },
            { ingredient: "taco shells", amount: 8, amountType: "" },
            { ingredient: "shredded lettuce", amount: 1, amountType: "cup" },
            { ingredient: "shredded cheese", amount: 1, amountType: "cup" },
            { ingredient: "salsa", amount: 0.5, amountType: "cup" },
          ],
        },
      ],
      Instructions: [
        { number: 1, instruction: "Brown the ground beef in a skillet over medium heat.", image: "" },
        { number: 2, instruction: "Add taco seasoning and simmer according to package directions.", image: "" },
        { number: 3, instruction: "Fill taco shells with beef and top with lettuce, cheese, and salsa.", image: "" },
      ],
    },
    {
      name: "Crispy Broccoli and Cheese",
      author: "",
      type: "appetizer",
      level: "beginner",
      image: "/recipes/crispyBrocoli.jpg",
      video: "",
      ingredients: [
        {
          listname: "Main Ingredients",
          list: [
            { ingredient: "broccoli florets", amount: 2, amountType: "cups" },
            { ingredient: "shredded cheddar cheese", amount: 1, amountType: "cup" },
            { ingredient: "olive oil", amount: 2, amountType: "tbsp" },
            { ingredient: "salt", amount: 0.5, amountType: "tsp" },
            { ingredient: "black pepper", amount: 0.5, amountType: "tsp" },
          ],
        },
      ],
      Instructions: [
        { number: 1, instruction: "Preheat oven to 400°F (200°C).", image: "" },
        { number: 2, instruction: "Toss broccoli with olive oil, salt, and pepper.", image: "" },
        { number: 3, instruction: "Spread on a baking sheet and roast for 20 minutes.", image: "" },
        { number: 4, instruction: "Top with cheese and return to oven until melted.", image: "" },
      ],
    },
    {
        name: "Baked Mac and Cheese",
        author: "",
        type: "entree",
        level: "beginner",
        image: "/recipes/macAndCheese.jpg", // Path to image goes here
        video: "", // Path to video goes here
        ingredients: [
          {
            listname: "Main Ingredients",
            list: [
              { ingredient: "elbow macaroni", amount: 2, amountType: "cups" },
              { ingredient: "shredded cheddar cheese", amount: 2, amountType: "cups" },
              { ingredient: "milk", amount: 1, amountType: "cup" },
              { ingredient: "butter", amount: 2, amountType: "tbsp" },
              { ingredient: "salt", amount: 0.25, amountType: "tsp" },
              { ingredient: "black pepper", amount: 0.5, amountType: "tsp" },
              { ingredient: "paprika", amount: 1, amountType: "tsp" },
              { ingredient: "bread crumbs", amount: 0.5, amountType: "cup" }
            ]
          }
        ],
        Instructions: [
          { number: 1, instruction: "Preheat oven to 350°F (175°C).", image: "" },
          { number: 2, instruction: "Cook macaroni according to package directions; drain and set aside.", image: "" },
          { number: 3, instruction: "In a saucepan, melt butter over medium heat.", image: "" },
          { number: 4, instruction: "Add milk and 2 cups of cheese, stirring until melted and smooth.", image: "" },
          { number: 5, instruction: "Stir in paprika, salt, and black pepper.", image: "" },
          { number: 6, instruction: "Combine cheese sauce with macaroni and stir well.", image: "" },
          { number: 7, instruction: "Transfer the mixture to a baking dish, sprinkle remaining cheese and bread crumbs on top.", image: "" },
          { number: 8, instruction: "Bake for 20-25 minutes or until the top is golden and bubbly.", image: "" }
        ]
      },
    {
      name: "Pumpkin Pie",
      author: "",
      type: "dessert",
      level: "intermediate",
      image: "",
      video: "",
      ingredients: [
        {
          listname: "Main Ingredients",
          list: [
            { ingredient: "pumpkin puree", amount: 1, amountType: "can" },
            { ingredient: "heavy cream", amount: 1, amountType: "cup" },
            { ingredient: "eggs", amount: 2, amountType: "" },
            { ingredient: "sugar", amount: 0.75, amountType: "cup" },
            { ingredient: "ground cinnamon", amount: 1, amountType: "tsp" },
            { ingredient: "ground ginger", amount: 0.5, amountType: "tsp" },
            { ingredient: "ground cloves", amount: 0.25, amountType: "tsp" },
            { ingredient: "pie crust", amount: 1, amountType: "9-inch" },
          ],
        },
      ],
      Instructions: [
        { number: 1, instruction: "Preheat oven to 425°F (220°C).", image: "" },
        { number: 2, instruction: "In a bowl, mix pumpkin, cream, eggs, sugar, and spices.", image: "" },
        { number: 3, instruction: "Pour into pie crust.", image: "" },
        { number: 4, instruction: "Bake for 15 minutes, then reduce heat to 350°F (175°C) and bake for another 40 minutes.", image: "" },
      ],
    },
    // Additional recipes for variety
    {
      name: "Chicken Curry",
      author: "",
      type: "entree",
      level: "advanced",
      image: "",
      video: "",
      ingredients: [
        {
          listname: "Main Ingredients",
          list: [
            { ingredient: "chicken breast, cubed", amount: 1, amountType: "lb" },
            { ingredient: "coconut milk", amount: 1, amountType: "cup" },
            { ingredient: "curry powder", amount: 2, amountType: "tbsp" },
            { ingredient: "diced tomatoes", amount: 1, amountType: "cup" },
            { ingredient: "salt", amount: 0.5, amountType: "tsp" },
          ],
        },
      ],
      Instructions: [
        { number: 1, instruction: "Cook chicken in a skillet over medium heat.", image: "" },
        { number: 2, instruction: "Add curry powder and diced tomatoes.", image: "" },
        { number: 3, instruction: "Pour in coconut milk and simmer for 20 minutes.", image: "" },
      ],
    },
    {
      name: "Garlic Bread",
      author: "",
      type: "appetizer",
      level: "beginner",
      image: "",
      video: "",
      ingredients: [
        {
          listname: "Main Ingredients",
          list: [
            { ingredient: "French bread", amount: 1, amountType: "loaf" },
            { ingredient: "butter", amount: 3, amountType: "tbsp" },
            { ingredient: "garlic, minced", amount: 2, amountType: "cloves" },
            { ingredient: "dried parsley", amount: 1, amountType: "tsp" },
          ],
        },
      ],
      Instructions: [
        { number: 1, instruction: "Preheat oven to 350°F (175°C).", image: "" },
        { number: 2, instruction: "Mix butter, garlic, and parsley.", image: "" },
        { number: 3, instruction: "Spread over bread halves and bake for 10 minutes.", image: "" },
      ],
    },
    {
      name: "Fruit Salad",
      author: "",
      type: "dessert",
      level: "beginner",
      image: "",
      video: "",
      ingredients: [
        {
          listname: "Main Ingredients",
          list: [
            { ingredient: "strawberries, sliced", amount: 1, amountType: "cup" },
            { ingredient: "blueberries", amount: 0.5, amountType: "cup" },
            { ingredient: "banana, sliced", amount: 1, amountType: "" },
            { ingredient: "honey", amount: 1, amountType: "tbsp" },
          ],
        },
      ],
      Instructions: [
        { number: 1, instruction: "Combine all fruit in a bowl.", image: "" },
        { number: 2, instruction: "Drizzle with honey and mix gently.", image: "" },
      ],
    },
    {
      name: "Meatloaf",
      author: "",
      type: "entree",
      level: "intermediate",
      image: "",
      video: "",
      ingredients: [
        {
          listname: "Main Ingredients",
          list: [
            { ingredient: "ground beef", amount: 1.5, amountType: "lb" },
            { ingredient: "breadcrumbs", amount: 1, amountType: "cup" },
            { ingredient: "milk", amount: 0.5, amountType: "cup" },
            { ingredient: "egg", amount: 1, amountType: "" },
            { ingredient: "onion, chopped", amount: 0.5, amountType: "cup" },
            { ingredient: "ketchup", amount: 0.5, amountType: "cup" },
            { ingredient: "salt", amount: 1, amountType: "tsp" },
            { ingredient: "pepper", amount: 0.5, amountType: "tsp" },
          ],
        },
      ],
      Instructions: [
        { number: 1, instruction: "Preheat oven to 350°F (175°C).", image: "" },
        { number: 2, instruction: "In a bowl, mix all ingredients except half the ketchup.", image: "" },
        { number: 3, instruction: "Shape mixture into a loaf and place in a baking dish.", image: "" },
        { number: 4, instruction: "Spread remaining ketchup on top.", image: "" },
        { number: 5, instruction: "Bake for 1 hour, or until cooked through.", image: "" },
      ],
    },
    {
        name: "Beef Wellington",
        type: "entree",
        level: "advanced",
        image: "", // Path to image goes here
        video: "", // Path to video goes here
        portions: 6,
        ingredients: [
          {
            listname: "Main Ingredients",
            list: [
              { amount: 2, amountType: "lb", ingredient: "beef tenderloin" },
              { amount: 1, amountType: "tbsp", ingredient: "olive oil" },
              { amount: 1, amountType: "tsp", ingredient: "salt" },
              { amount: 1, amountType: "tsp", ingredient: "black pepper" },
              { amount: 8, amountType: "oz", ingredient: "mushrooms, finely chopped" },
              { amount: 2, amountType: "tbsp", ingredient: "Dijon mustard" },
              { amount: 8, amountType: "slices", ingredient: "prosciutto" },
              { amount: 1, amountType: "sheet", ingredient: "puff pastry" },
              { amount: 1, amountType: "egg", ingredient: "beaten" }
            ]
          }
        ],
        steps: [
          { writing: "Season beef tenderloin with salt and pepper.", image: "" },
          { writing: "Heat olive oil in a skillet over high heat, sear beef on all sides until browned, then set aside to cool.", image: "" },
          { writing: "Brush beef with Dijon mustard.", image: "" },
          { writing: "In the same skillet, sauté mushrooms until moisture evaporates and they become a paste-like mixture.", image: "" },
          { writing: "Lay out plastic wrap, place prosciutto slices in an even layer, spread mushroom mixture over the prosciutto, and place beef in the center.", image: "" },
          { writing: "Wrap beef in the prosciutto-mushroom layer, tightly rolling it up in the plastic wrap. Refrigerate for 15 minutes.", image: "" },
          { writing: "Preheat oven to 400°F (200°C).", image: "" },
          { writing: "Roll out puff pastry, remove beef from plastic wrap, and wrap it in the pastry. Seal the edges and brush with beaten egg.", image: "" },
          { writing: "Place beef Wellington on a baking sheet, seam-side down, and bake for 35-45 minutes or until golden brown and beef is at desired doneness.", image: "" },
          { writing: "Let rest for 10 minutes before slicing and serving.", image: "" }
        ]
      },
  ];
  
  export default recipes;
  