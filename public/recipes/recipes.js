// recipes.js
const recipes = [
  {
    name: "Tacos",
    slug: "tacos",
    author: "",
    type: "entree",
    level: "intermediate",
    image: "/recipes/tacos.jpg", // Path to image goes here
    video: "", // Path to video goes here
    ingredients: [
      {
        listname: "Ingredients",
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
    instructions: [
      { number: 1, instruction: "Brown the ground beef in a skillet over medium heat.", image: "" },
      { number: 2, instruction: "Add taco seasoning and simmer according to package directions.", image: "" },
      { number: 3, instruction: "Fill taco shells with beef and top with lettuce, cheese, and salsa.", image: "" },
    ],
  },
  {
    name: "Crispy Broccoli and Cheese",
    slug: "crispy-broccoli-and-cheese",
    author: "",
    type: "appetizer",
    level: "beginner",
    image: "/recipes/crispyBrocoli.jpg",
    video: "",
    ingredients: [
      {
        listname: "Ingredients",
        list: [
          { ingredient: "broccoli florets", amount: 2, amountType: "cups" },
          { ingredient: "shredded cheddar cheese", amount: 1, amountType: "cup" },
          { ingredient: "olive oil", amount: 2, amountType: "tbsp" },
          { ingredient: "salt", amount: 0.5, amountType: "tsp" },
          { ingredient: "black pepper", amount: 0.5, amountType: "tsp" },
        ],
      },
    ],
    instructions: [
      { number: 1, instruction: "Preheat oven to 400°F (200°C).", image: "" },
      { number: 2, instruction: "Toss broccoli with olive oil, salt, and pepper.", image: "" },
      { number: 3, instruction: "Spread on a baking sheet and roast for 20 minutes.", image: "" },
      { number: 4, instruction: "Top with cheese and return to oven until melted.", image: "" },
    ],
  },
  {
    name: "Baked Mac and Cheese",
    slug: "backed-mac-and-cheese",
    author: "",
    type: "entree",
    level: "beginner",
    image: "/recipes/macAndCheese.jpg", // Path to image goes here
    video: "", // Path to video goes here
    ingredients: [
      {
        listname: "Ingredients",
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
    instructions: [
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
    slug: "pumpkin-pie",
    author: "",
    type: "dessert",
    level: "intermediate",
    image: "/recipes/pumpkinPie.jpg",
    video: "",
    ingredients: [
      {
        listname: "Ingredients",
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
    instructions: [
      { number: 1, instruction: "Gather all ingredients.", image: "/recipes/ingredients.jpg" },
      { number: 2, instruction: "Preheat the oven to 325 degrees F (165 degrees C). Line a baking dish with lightly greased foil.", image: "/recipes/oven.jpg" },
      { number: 3, instruction: "Place carrot, celery, onion, bell pepper, mushrooms, and garlic in a food processor; pulse until very finely chopped, almost to a purée. Transfer to a large mixing bowl.", image: "/recipes/foodProcessor.jpeg" },
      { number: 4, instruction: "Add ground chuck to the vegetables, along with Worcestershire sauce, egg, Italian herbs, salt, black pepper, and cayenne. Mix gently with a wooden spoon until ingredients are just combined. Sprinkle in bread crumbs and gently mix with your fingertips until just combined; don't overmix.", image: "/recipes/mixMeatloaf.jpg" },
      { number: 5, instruction: "Shape the mixture into a loaf, about 4 inches high by 6 inches across. Place in the prepared baking pan.", image: "/recipes/meatloafInPan.jpg" },
      { number: 6, instruction: "Bake in the preheated oven just until the meatloaf is hot, about 15 minutes.", image: "" },
      { number: 7, instruction: "Remove meatloaf from the oven. Spoon glaze on the top of the meatloaf with the back of a spoon, then pull a tiny bit glaze down the sides.", image: "/recipes/glaze.jpg" },
      { number: 8, instruction: "Return to the oven, and bake until no longer pink inside, 45 to 75 more minutes. An instant-read thermometer inserted into the thickest part of the loaf should read at least 160 degrees F (70 degrees C), so start checking at 45 minutes and continue baking until meatloaf reaches that temperature. Cooking time will depend on shape and thickness of the meatloaf.", image: "" },
      { number: 9, instruction: "Serve hot and enjoy!", image: "/recipes/meatLoaf.jpg" },
    ],
  },
  // Additional recipes for variety
  {
    name: "Chicken Curry",
    slug: "chicken-curry",
    author: "",
    type: "entree",
    level: "advanced",
    image: "/recipes/chickenCurry.jpg",
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
    instructions: [
      { number: 1, instruction: "Cook chicken in a skillet over medium heat.", image: "" },
      { number: 2, instruction: "Add curry powder and diced tomatoes.", image: "" },
      { number: 3, instruction: "Pour in coconut milk and simmer for 20 minutes.", image: "" },
    ],
  },
  {
    name: "Garlic Bread",
    slug: "garlic-bread",
    author: "",
    type: "appetizer",
    level: "beginner",
    image: "/recipes/garlicBread.jpg",
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
    instructions: [
      { number: 1, instruction: "Preheat oven to 350°F (175°C).", image: "" },
      { number: 2, instruction: "Mix butter, garlic, and parsley.", image: "" },
      { number: 3, instruction: "Spread over bread halves and bake for 10 minutes.", image: "" },
    ],
  },
  {
    name: "Fruit Salad",
    slug: "fruit-salad",
    author: "",
    type: "dessert",
    level: "beginner",
    image: "/recipes/fruitSalad.jpg",
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
    instructions: [
      { number: 1, instruction: "Combine all fruit in a bowl.", image: "" },
      { number: 2, instruction: "Drizzle with honey and mix gently.", image: "" },
    ],
  },
  {
    name: "Meatloaf",
    slug: "meatloaf",
    author: "",
    type: "entree",
    level: "intermediate",
    image: "/recipes/meatLoaf.jpg",
    video: "",
    ingredients: [
      {
        listname: "Meatloaf Ingredients",
        list: [
          { ingredient: "medium carrot", amount: 1 },
          { ingredient: "rib celery", amount: 1 },
          { ingredient: "medium onion", amount: 0.5 },
          { ingredient: "medium red bell pepper", amount: 0.5 },
          { ingredient: "white mushrooms", amount: 4 },
          { ingredient: "cloves garlic", amount: 3 },
          { ingredient: "ground chuck", amount: 2.5, amountType: "pounds" },
          { ingredient: "Worcestershire sauce", amount: 1, amountType: "tablespoon" },
          { ingredient: "large egg, beaten", amount: 1 },
          { ingredient: "dried Italian herbs", amount: 1, amountType: "teaspoon" },
          { ingredient: "salt", amount: 2, amountType: "teaspoons" },
          { ingredient: "ground black pepper", amount: 1, amountType: "teaspoon" },
          { ingredient: "cayenne pepper", amount: 0.5, amountType: "teaspoon" },
          { ingredient: "plain bread crumbs", amount: 1, amountType: "cup" }
        ]
      },
      {
        listname: "Glaze Ingredients",
        list: [
          { ingredient: "brown sugar", amount: 2, amountType: "tablespoons" },
          { ingredient: "ketchup", amount: 2, amountType: "tablespoons" },
          { name: "Dijon mustard", amount: 2, amountType: "tablespoons" },
          { name: "Sriracha sauce (optional)", amount: 1, amountType: "teaspoon" }
        ]
      }
    ],
    instructions: [
      { number: 1, instruction: "Gather all ingredients.", image: "/recipes/ingredients.jpg" },
      { number: 2, instruction: "Preheat the oven to 325 degrees F (165 degrees C). Line a baking dish with lightly greased foil.", image: "/recipes/oven.jpg" },
      { number: 3, instruction: "Place carrot, celery, onion, bell pepper, mushrooms, and garlic in a food processor; pulse until very finely chopped, almost to a purée. Transfer to a large mixing bowl.", image: "/recipes/foodProcessor.jpeg" },
      { number: 4, instruction: "Add ground chuck to the vegetables, along with Worcestershire sauce, egg, Italian herbs, salt, black pepper, and cayenne. Mix gently with a wooden spoon until ingredients are just combined. Sprinkle in bread crumbs and gently mix with your fingertips until just combined; don't overmix.", image: "/recipes/mixMeatloaf.jpg" },
      { number: 5, instruction: "Shape the mixture into a loaf, about 4 inches high by 6 inches across. Place in the prepared baking pan.", image: "/recipes/meatloafInPan.jpg" },
      { number: 6, instruction: "Bake in the preheated oven just until the meatloaf is hot, about 15 minutes.", image: "" },
      { number: 7, instruction: "Remove meatloaf from the oven. Spoon glaze on the top of the meatloaf with the back of a spoon, then pull a tiny bit glaze down the sides.", image: "/recipes/glaze.jpg" },
      { number: 8, instruction: "Return to the oven, and bake until no longer pink inside, 45 to 75 more minutes. An instant-read thermometer inserted into the thickest part of the loaf should read at least 160 degrees F (70 degrees C), so start checking at 45 minutes and continue baking until meatloaf reaches that temperature. Cooking time will depend on shape and thickness of the meatloaf.", image: "" },
      { number: 9, instruction: "Serve hot and enjoy!", image: "/recipes/meatLoaf.jpg" }
    ]
  },
  {
    name: "Beef Wellington",
    slug: "beef-wellington",
    type: "entree",
    level: "advanced",
    image: "/recipes/beefWellington.jpg", // Path to image goes here
    video: "", // Path to video goes here
    portions: 6,
    ingredients: [
      {
        listname: "Ingredients",
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
    instructions: [
      { number: 1, instruction: "Season beef tenderloin with salt and pepper.", image: "" },
      { number: 2, instruction: "Heat olive oil in a skillet over high heat, sear beef on all sides until browned, then set aside to cool.", image: "" },
      { number: 3, instruction: "Brush beef with Dijon mustard.", image: "" },
      { number: 4, instruction: "In the same skillet, sauté mushrooms until moisture evaporates and they become a paste-like mixture.", image: "" },
      { number: 5, instruction: "Lay out plastic wrap, place prosciutto slices in an even layer, spread mushroom mixture over the prosciutto, and place beef in the center.", image: "" },
      { number: 6, instruction: "Wrap beef in the prosciutto-mushroom layer, tightly rolling it up in the plastic wrap. Refrigerate for 15 minutes.", image: "" },
      { number: 7, instruction: "Preheat oven to 400°F (200°C).", image: "" },
      { number: 8, instruction: "Roll out puff pastry, remove beef from plastic wrap, and wrap it in the pastry. Seal the edges and brush with beaten egg.", image: "" },
      { number: 9, instruction: "Place beef Wellington on a baking sheet, seam-side down, and bake for 35-45 minutes or until golden brown and beef is at desired doneness.", image: "" },
      { number: 10, instruction: "Let rest for 10 minutes before slicing and serving.", image: "" }
    ]
  },
];

export default recipes;
