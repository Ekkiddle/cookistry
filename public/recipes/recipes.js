// recipes.js
import TechniquePopup from "@/app/components/TechniquePopup";

const recipes = [
  {
    name: "Tacos",
    slug: "tacos",
    author: "Rachel Ray",
    type: "entree",
    level: "intermediate",
    tags: [],
    rating: 4,
    image: "/recipes/tacos.jpg", // Path to image goes here
    video: "", // Path to video goes here
    portions: 8,
    ingredients: [
      {
        listname: "Ingredients",
        list: [
          { ingredient: "ground beef", amount: 1, amountType: "lb" },
          { ingredient: "taco seasoning", amount: 1, amountType: "packet" },
          { ingredient: "taco shells", amount: 8, amountType: "" },
          { ingredient: "shredded lettuce", amount: 1, amountType: "cup" },
          { ingredient: "shredded cheese", amount: 1, amountType: "cup" },
          { ingredient: "salsa", amount: 1/2, amountType: "cup" },
        ],
      },
    ],
    instructions: [
      { number: 1, instruction: "Brown the ground beef in a skillet over medium heat.", image: "/recipes/brown-beef.jpg" },
      { number: 2, instruction: "Add taco seasoning and simmer according to package directions.", image: "/recipes/tacoseasoning.jpg" },
      { number: 3, instruction: "Fill taco shells with beef and top with lettuce, cheese, and salsa.", image: "/recipes/tacos.jpg" },
    ],
  },
  {
    name: "Crispy Broccoli and Cheese",
    slug: "crispy-broccoli-and-cheese",
    author: "Jamie Oliver",
    type: "appetizer",
    level: "beginner",
    tags: ["glutenFree"],
    rating: 3,
    image: "/recipes/crispyBrocoli.jpg",
    video: "",
    portions: 8,
    ingredients: [
      {
        listname: "Ingredients",
        list: [
          { ingredient: "broccoli florets", amount: 2, amountType: "cups" },
          { ingredient: "shredded cheddar cheese", amount: 1, amountType: "cup" },
          { ingredient: "olive oil", amount: 2, amountType: "tbsp" },
          { ingredient: "salt", amount: 1/2, amountType: "tsp" },
          { ingredient: "black pepper", amount: 1/2, amountType: "tsp" },
        ],
      },
    ],
    instructions: [
      { number: 1, instruction: "Preheat oven to 400°F (200°C).", image: "/recipes/oven.jpg" },
      { number: 2, instruction: "Toss broccoli with olive oil, salt, and pepper.", image: "/recipes/broccoli.jpg" },
      { number: 3, instruction: "Spread on a baking sheet and roast for 20 minutes.", image: "/recipes/broccoli-on-pan.jpg" },
      { number: 4, instruction: "Top with cheese and return to oven until melted.", image: "/recipes/crispyBrocoli.jpg" },
    ],
  },
  {
    name: "Baked Mac and Cheese",
    slug: "baked-mac-and-cheese",
    author: "Gordon Ramsey",
    type: "entree",
    level: "beginner",
    tags: [],
    rating: 4,
    image: "/recipes/macAndCheese.jpg", // Path to image goes here
    video: "", // Path to video goes here
    portions: 4,
    ingredients: [
      {
        listname: "Ingredients",
        list: [
          { ingredient: "elbow macaroni", amount: 2, amountType: "cups" },
          { ingredient: "shredded cheddar cheese", amount: 2, amountType: "cups" },
          { ingredient: "milk", amount: 1, amountType: "cup" },
          { ingredient: "butter", amount: 2, amountType: "tbsp" },
          { ingredient: "salt", amount: 1/4, amountType: "tsp" },
          { ingredient: "black pepper", amount: 1/2, amountType: "tsp" },
          { ingredient: "paprika", amount: 1, amountType: "tsp" },
          { ingredient: "bread crumbs", amount: 1/2, amountType: "cup" }
        ]
      }
    ],
    instructions: [
      { number: 1, instruction: "Preheat oven to 350°F (175°C).", image: "/recipes/oven.jpg" },
      { number: 2, instruction: <div><TechniquePopup>Boil water</TechniquePopup> at 100 degrees.</div>, image: "/techniques/boil-water.jpg"},
      { number: 3, instruction: "Cook macaroni according to package directions; drain and set aside.", image: "/recipes/macaroni-in-pot.jpg" },
      { number: 4, instruction: "In a saucepan, melt butter over medium heat.", image: "/recipes/melt-butter.jpg" },
      { number: 5, instruction: "Add milk and 2 cups of cheese, stirring until melted and smooth.", image: "/recipes/add-milk.jpg" },
      { number: 6, instruction: "Stir in paprika, salt, and black pepper.", image: "/recipes/add-salts.jpg" },
      { number: 7, instruction: "Combine cheese sauce with macaroni and stir well.", image: "/recipes/mix-macaroni.jpg" },
      { number: 8, instruction: "Transfer the mixture to a baking dish, sprinkle remaining cheese and bread crumbs on top.", image: "/recipes/macaroni-in-pan.jpg" },
      { number: 9, instruction: "Bake for 20-25 minutes or until the top is golden and bubbly.", image: "/recipes/baked-mac-and-cheese.jpg" }
    ]
  },
  {
    name: "Pumpkin Pie",
    slug: "pumpkin-pie",
    author: "Randy Scott",
    type: "dessert",
    level: "intermediate",
    tags: [],
    rating: 5,
    image: "/recipes/pumpkinPie.jpg",
    video: "",
    portions: 4,
    ingredients: [
      {
        listname: "Ingredients",
        list: [
          { ingredient: "pumpkin puree", amount: 1, amountType: "can" },
          { ingredient: "heavy cream", amount: 1, amountType: "cup" },
          { ingredient: "eggs", amount: 2, amountType: "" },
          { ingredient: "sugar", amount: 3/4, amountType: "cup" },
          { ingredient: "ground cinnamon", amount: 1, amountType: "tsp" },
          { ingredient: "ground ginger", amount: 0.5, amountType: "tsp" },
          { ingredient: "ground cloves", amount: 1/4, amountType: "tsp" },
          { ingredient: "pie crust", amount: 1, amountType: "9-inch" },
        ],
      },
    ],
    instructions: [
      { number: 1, instruction: "Gather all ingredients and preheat the oven to 400 degrees F (200 degrees C).", image: "/recipes/pie-ingredients.webp" },
      { number: 2, instruction: <div>To make the pastry crust: Mix flour and salt together in a bowl. <TechniquePopup>Fold in</TechniquePopup> butter until mixture resembles coarse crumbs.</div>, image: "/recipes/pie-2.webp"},
      { number: 3, instruction: "Mix in 3 tablespoons water, one at a time, until dough is moist enough to hold together. Add up to 1 more tablespoon water if needed.", image: "/recipes/pie-3.webp"},
      { nubmer: 4, instruction: "Shape dough into a ball with lightly floured hands. Roll dough on a lightly floured surface to a thickness of 1/8 inch.", image: "/recipes/pie-4.webp"},
      { number: 5, instruction: "Place a 9-inch pie pan upside-down on the dough; use a sharp knife to cut a circle of dough 1 ½ inches larger than the pie pan. Remove and discard dough scraps and set pie pan aside.", image: "/recipes/pie-5.webp"},
      { number: 6, instruction: "Gently roll circular piece of dough around the rolling pin; transfer it right-side up over the pie pan. Unroll, easing dough into the bottom of the pan.", image: "/recipes/pie-6.webp"},
      { number: 7, instruction: "Use two hands to flute the dough around the top edges.", image: "/recipes/pie-7.webp"},
      { number: 8, instruction: "To make the filling: Beat pumpkin, evaporated milk, brown sugar, eggs, cinnamon, ginger, nutmeg, and salt in a large bowl with an electric mixer until well combined. Pour into the prepared crust.", image:"/recipes/pie-8.webp"},
      { number: 9, instruction: "Bake in the preheated oven until a knife inserted into the filling 1 inch from the edge comes out clean, 40 to 60 minutes. Cover the edges with foil if needed to prevent from burning as the filling cooks. Remove from the oven and cool to room temperature before serving.", image: "/recipes/pie-9.webp"},
      { number: 10, instruction: "Enjoy!", image: "/recipes/pie-10.webp"}
    ],
  },
  // Additional recipes for variety
  {
    name: "Chicken Curry",
    slug: "chicken-curry",
    author: "Amanda Fetters",
    type: "entree",
    level: "advanced",
    tags: ["glutenFree", "spice"],
    rating: 5,
    image: "/recipes/chickenCurry.jpg",
    video: "",
    portions: 4,
    ingredients: [
        {
            listname: "Main Ingredients",
            list: [
                { ingredient: "olive oil", amount: 3, amountType: "tbsp" },
                { ingredient: "onion, chopped", amount: 1, amountType: "cup" },
                { ingredient: "garlic, minced", amount: 2, amountType: "clove" },
                { ingredient: "curry powder", amount: 3, amountType: "tbsp" },
                { ingredient: "ground cinnamon", amount: 1, amountType: "tsp" },
                { ingredient: "paprika", amount: 1, amountType: "tsp" },
                { ingredient: "bay leaf", amount: 1, amountType: "piece" },
                { ingredient: "grated fresh ginger root", amount: 0.5, amountType: "tsp" },
                { ingredient: "white sugar", amount: 1/2, amountType: "tsp" },
                { ingredient: "salt", amount: 1/2, amountType: "tsp" },
                { ingredient: "skinless, boneless chicken breast, cubed", amount: 2, amountType: "pcs" },
                { ingredient: "tomato paste", amount: 1, amountType: "tbsp" },
                { ingredient: "plain yogurt", amount: 1, amountType: "cup" },
                { ingredient: "coconut milk", amount: 3/4, amountType: "cup" },
                { ingredient: "lemon, juiced", amount: 1/2, amountType: "cup" },
                { ingredient: "cayenne pepper", amount: 1/2, amountType: "tsp" },
            ],
        },
    ],
    instructions: [
        {
            number: 1,
            instruction: <div>Heat olive oil in a skillet over medium heat. <TechniquePopup name="saute">Saut&eacute;</TechniquePopup> onion until lightly browned.</div>,
            image: "/recipes/curry-1.webp",
        },
        {
            number: 2,
            instruction: "Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar, and salt. Continue stirring for 2 minutes.",
            image: "/recipes/curry-2.webp",
        },
        {
            number: 3,
            instruction: "Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes.",
            image: "/recipes/curry-3.webp",
        },
        {
            number: 4,
            instruction: "Remove bay leaf, and stir in lemon juice and cayenne pepper. Simmer 5 more minutes.",
            image: "/recipes/curry-4.webp",
        },
        {
            number: 5,
            instruction: "Serve hot and enjoy!",
            image: "/recipes/curry-5.webp",
        },
    ],
  },
  {
    name: "Garlic Bread",
    slug: "garlic-bread",
    author: "David Chang",
    type: "appetizer",
    level: "beginner",
    tags: [],
    rating: 3,
    image: "/recipes/garlicBread.jpg",
    video: "",
    portions: 8,
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
      { number: 1, instruction: "Preheat oven to 350°F (175°C).", image: "/recipes/oven.jpg" },
      { number: 2, instruction: "Mix butter, garlic, and parsley.", image: "/recipes/garlic-butter.jpg" },
      { number: 3, instruction: "Spread over bread halves and bake for 10 minutes.", image: "/recipes/garlic-bread-spread.jpg" },
      { number: 4, instruction: "Enjoy!", image: "/recipes/garlicBread.jpg"},
    ],
  },
  {
    name: "Fruit Salad",
    slug: "fruit-salad",
    author: "Julia Child",
    type: "dessert",
    level: "beginner",
    tags: ["vegan", "glutenFree", "lactoseFree"],
    rating: 5,
    image: "/recipes/fruitSalad.jpg",
    video: "",
    portions: 8,
    ingredients: [
      {
        listname: "Main Ingredients",
        list: [
          { ingredient: "strawberries, sliced", amount: 1, amountType: "cup" },
          { ingredient: "blueberries", amount: 1/2, amountType: "cup" },
          { ingredient: "banana, sliced", amount: 1, amountType: "" },
          { ingredient: "honey", amount: 1, amountType: "tbsp" },
        ],
      },
    ],
    instructions: [
      { number: 1, instruction: "Combine all fruit in a bowl.", image: "/recipes/cut-fruit.jpg" },
      { number: 2, instruction: "Drizzle with honey and mix gently.", image: "/recipes/drizzle.jpg" },
    ],
  },
  {
    name: "Meatloaf",
    slug: "meatloaf",
    author: "Anthony Bourdain",
    type: "entree",
    level: "intermediate",
    tags: ["lactoseFree", "spice"],
    rating: 3.5,
    image: "/recipes/meatLoaf.jpg",
    video: "",
    portions: 10,
    ingredients: [
      {
        listname: "Meatloaf Ingredients",
        list: [
          { ingredient: "medium carrot", amount: 1 },
          { ingredient: "rib celery", amount: 1 },
          { ingredient: "medium onion", amount: 1/2 },
          { ingredient: "medium red bell pepper", amount: 1/2 },
          { ingredient: "white mushrooms", amount: 4 },
          { ingredient: "cloves garlic", amount: 3 },
          { ingredient: "ground chuck", amount: 2.5, amountType: "pounds" },
          { ingredient: "Worcestershire sauce", amount: 1, amountType: "tablespoon" },
          { ingredient: "large egg, beaten", amount: 1 },
          { ingredient: "dried Italian herbs", amount: 1, amountType: "teaspoon" },
          { ingredient: "salt", amount: 2, amountType: "teaspoons" },
          { ingredient: "ground black pepper", amount: 1, amountType: "teaspoon" },
          { ingredient: "cayenne pepper", amount: 1/2, amountType: "teaspoon" },
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
      { number: 6, instruction: "Bake in the preheated oven just until the meatloaf is hot, about 15 minutes.", image: "/recipes/loaf-in-oven.jpg" },
      { number: 7, instruction: "Remove meatloaf from the oven. Spoon glaze on the top of the meatloaf with the back of a spoon, then pull a tiny bit glaze down the sides.", image: "/recipes/glaze.jpg" },
      { number: 8, instruction: "Return to the oven, and bake until no longer pink inside, 45 to 75 more minutes. An instant-read thermometer inserted into the thickest part of the loaf should read at least 160 degrees F (70 degrees C), so start checking at 45 minutes and continue baking until meatloaf reaches that temperature. Cooking time will depend on shape and thickness of the meatloaf.", image: "/recipes/meatloaf-thermometer.jpg" },
      { number: 9, instruction: "Serve hot and enjoy!", image: "/recipes/meatLoaf.jpg" }
    ]
  },
  {
    name: "Beef Wellington",
    slug: "beef-wellington",
    author: "Elise Bauer",
    type: "entree",
    level: "advanced",
    tags: [],
    rating: 5,
    image: "/recipes/beefWellington.jpg",
    video: "",
    portions: 4,
    ingredients: [
        {
            listname: "Main Ingredients",
            list: [
                { ingredient: "thick beef tenderloin", amount: 1, amountType: "lb" },
                { ingredient: "Kosher salt", amount: 1, amountType: "pinch" },
                { ingredient: "black pepper, freshly ground", amount: 1, amountType: "pinch" },
                { ingredient: "extra virgin olive oil", amount: 2, amountType: "tbsp" },
                { ingredient: "yellow mustard", amount: 2, amountType: "tbsp" },
                { ingredient: "mushrooms", amount: 1, amountType: "lb" },
                { ingredient: "thin slices of prosciutto or Parma ham", amount: 4, amountType: "pcs" },
                { ingredient: "puff pastry sheet, thawed", amount: 1, amountType: "sheet" },
                { ingredient: "large egg yolks, beaten", amount: 2, amountType: "pcs" },
                { ingredient: "flaky salt", amount: 1, amountType: "pinch" },
            ],
        },
    ],
    instructions: [
        {
            number: 1,
            instruction: "Preheat the oven to 400°F as you assemble the Wellington.",
            image: "/recipes/oven.jpg",
        },
        {
            number: 2,
            instruction: "Season the beef with salt and pepper. Heat 2 tablespoons of oil in a large pan over high heat. Sear the beef on all sides for 2-3 minutes per side until well browned.",
            image: "/recipes/sear.webp",
        },
        {
            number: 3,
            instruction: "Remove the beef from the pan and let cool. Once cooled, brush all sides with mustard.",
            image: "/recipes/brush-mustard.webp",
        },
        {
            number: 4,
            instruction: "Chop mushrooms finely using a food processor. Cook the chopped mushrooms in a pan over medium-high heat until all moisture is released, about 10-15 minutes. Let cool.",
            image: "/recipes/mushroom.webp",
        },
        {
            number: 5,
            instruction: "Lay out plastic wrap and overlap slices of prosciutto. Spread the cooled mushroom mixture evenly over the prosciutto.",
            image: "/recipes/beef-5.webp",
        },
        {
            number: 6,
            instruction: "Place the beef in the center and roll the prosciutto and mushroom layer tightly around it using the plastic wrap. Twist the ends of the plastic wrap to secure and refrigerate for 20 minutes.",
            image: "/recipes/beef-wrap.webp",
        },
        {
            number: 7,
            instruction: "On a floured surface, roll out the puff pastry sheet to wrap the beef. Remove the plastic wrap and place the beef in the center of the pastry.",
            image: "/recipes/wrap-beef.webp",
        },
        {
            number: 8,
            instruction: "Brush the edges of the pastry with beaten egg yolks. Fold the pastry around the beef, sealing the edges and cutting off any excess.",
            image: "/recipes/pastry-beef.webp",
        },
        {
            number: 9,
            instruction: "Place the wrapped beef seam-side down on a lined baking pan. Brush with beaten egg yolks again. Score the top of the pastry lightly with a knife and sprinkle with flaky salt.",
            image: "/recipes/beef-score.webp",
        },
        {
            number: 10,
            instruction: "Bake at 400°F for 25-35 minutes until the pastry is golden. Use a meat thermometer to ensure the center reaches 125-130°F for medium rare.",
            image: "/recipes/bake-beef.webp",
        },
        {
            number: 11,
            instruction: "Remove from the oven and let rest for 10 minutes before slicing. Serve in 1-inch slices.",
            image: "/recipes/beef-serve.webp",
        },
    ],
  },

];

export default recipes;
