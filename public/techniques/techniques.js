// techniques.js
const techniques = [
  {
    name: "Boil water",
    slug: "boil-water",
    image: "/techniques/boil-water.jpeg",
    imageAlt: "Boiling water in pot on burner. Photo by Anna Shvets from Pexels.com.",
    level: "beginner",
    summary: "Boiling water involves selecting the right pot size, possibly salting the water, and using the right temperature.",
    main_video: "https://www.youtube.com/watch?v=D_TX67X2ddU",
    description: [ // description of technique, broken down into sections
      {
        text: ["Boiling is the method of cooking food in boiling water or other water-based liquids such as stock or milk. Simmering is gentle boiling, while in poaching the cooking liquid moves but scarcely bubbles. The boiling point of water is typically considered to be 100 °C (212 °F; 373 K), especially at sea level.",
          "The process to boil water (or any other kind of liquid) is simple, and you need to follow only a few steps:", 
          "1. Put some water in a pan or pot.",
          "2. Place the pan on your stovetop and turn the burner to the highest setting.",
          "3. Let the water come to a full rolling boil (when the bubbles are rapidly breaking the surface)",
        ],
        image1: "/techniques/boil-water.jpeg",// optional
        image2: "/techniques/waterBoiling2.jpeg",
        video: "", // optional
      }
    ],
    recipes: [
      { name: "Baked Mac and Cheese"
      },{name : "Boiled eggs"}
    ]
  },
  {
    name: "Fold in",
    slug : "fold-in",
    image: "/techniques/fold-in.jpeg",
    imageAlt: "A person mixing dough using a wooden spatula in a stainless bowl. Photo by Ron Lach from Pexels.com.",
    level: "intermediate",
    summary: "A technique for carefully combining two substances of different thickness and weight into one (relatively) smooth mixture.",
    main_video: "https://www.youtube.com/watch?v=7To3giV62rg", // path to video here
    description: [ // description of technique, broken down into sections
      {
        text:  ["Folding is a a baking technique that involves gently mixing a lighter, airier ingredient into a heavier, denser ingredient. The goal is to incorporate the delicate ingredients without deflating the batter and to preserve the structure and lightness of the mixture",
        "To fold ingredients into a batter, you can use a spatula or wooden spoon to scoop around the mixture and then flip the spoon over to tuck in the ingredients. You can also rotate the bowl to make sure you get the ingredients from the whole perimeter. It's important to be gentle so you don't knock out air bubbles.",],
        image1: "/techniques/fold-in.jpeg",
        image2: "/techniques/Fold-in2.jpeg", // optional
      }
    ],
    recipes: [{ name: "Pumpkin Pie" }] // list of recipes using this technique
  },
  {
    name: "Baste",
    slug: "baste",
    image: "/techniques/baste.jpg",
    imageAlt: "Hand-brushing roasted chicken. Photo by RDNE Stock project from Pexels.com.",
    level: "advanced",
    summary: "A meat cooking technique in which the meat is cooked with its own juices or a preparation such as a sauce or marinade.",
    main_video: "https://www.youtube.com/watch?v=Q_p-MIYuccI", // path to video here
    description: [ // description of technique, broken down into sections
      {
        text: ["Basting is a cooking technique that involves periodically moistening food with liquid while it cooks to add flavor and prevent it from drying out. The liquid can be meat drippings, melted butter, sauces, marinades, or other fats. Basting is commonly used for turkey, chicken, pork, duck, and beef, but can be applied to any type of meat.", 
          " Here are some tips for basting:", 
          " - You can use a basting brush, spoon, ladle, or turkey baster to apply the liquid.", 
          " - Basting can also help cool the surface of the meat and slow down cooking. ",
          " - To avoid overcooking, you can use an instant-read thermometer to check the internal temperature of the meat. ",
          " - Basting while searing a steak can help it cook on both sides at the same time so it doesn't overcook beneath the crust. "
        ],
        image1: "/techniques/baste1.jpeg", 
        image2: "/techniques/baste2.jpeg",   // optional
        video: "", // optional
      }
    ],
    recipes: [{ name: "Meatloaf"}] // list of recipes using this technique
  },
  {
    name: "Saute",
    slug: "saute",
    image: "/techniques/saute.jpg",
    imageAlt: "Vegetable dish on frying pan. Photo by Ela Haney from Pexels.com.",
    level: "beginner",
    summary: "Quickly frying food in a small amount of oil or fat over medium to high heat.",
    main_video: "https://www.youtube.com/watch?v=CTyV3JExDT8", // path to video here
    description: [ // description of technique, broken down into sections
      {
        text: ["Sautéing is a cooking technique that involves cooking food in a small amount of fat in a hot pan while frequently tossing the ingredients around", 
          "The word sauté comes from the French verb sauter, which means to jump. This refers to the food jumping around in the pan while cooking. ", 
          "To sauté, you'll need a small amount of fat, like butter or oil, in a hot pan with rounded edges. You should make sure the pan is hot before adding the fat. Then, add the food and stir or toss it regularly so that it's evenly exposed to the heat and doesn't burn." 

        ],
        image1: "/techniques/sauteing3.jpeg", // optional
        image2: "/techniques/sauteing2.jpeg",
        video: "", // optional
      }
    ],
    recipes: [{ name: "Beef Wellington" }] // list of recipes using this technique
  }
];

export default techniques;