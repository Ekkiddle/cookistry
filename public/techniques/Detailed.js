const Detailed = [
  {
      image1: "/techniques/boil-water.jpg",
      image2: "/techniques/waterBoiling2.jpeg",
      imageAlt: "Boiling water in pot on burner. Photo by Anna Shvets from Pexels.com.",
      title: "Boil water",
      level: "beginner",
      
      summary: "Boiling water involves selecting the right pot size, possibly salting the water, and using the right temperature.",
      main_video: "https://www.youtube.com/watch?v=D_TX67X2ddU", // path to video here
      description: [ // description of technique, broken down into sections
          {
              text: "Boiling is the method of cooking food in boiling water or other water-based liquids such as stock or milk. Simmering is gentle boiling, while in poaching the cooking liquid moves but scarcely bubbles. The boiling point of water is typically considered to be 100 °C (212 °F; 373 K), especially at sea level."
          },
          {
              text: "The process to boil water (or any other kind of liquid) is simple, and you need to follow only a few steps:"
          },
          {
              text: "1. Put some water in a pan or pot."
          },
          {
              text: "2. Place the pan on your stovetop and turn the burner to the highest setting."
          },
          {
              text: "3. Let the water come to a full rolling boil (when the bubbles are rapidly breaking the surface)."
          },
          {
              image: "",// optional
              video: "", // optional
          }
      ],
      recipes: ["Boiled Eggs", "Pasta with Meatballs", "Risotto"] // list of recipes using this technique
  },
  {
    image1: "/techniques/fold-in.jpg",
    image2: "/techniques/fold-in2.jpeg",
    imageAlt: "A person mixing dough using a wooden spatula in a stainless bowl. Photo by Ron Lach from Pexels.com.",
    title: "Fold in",
    level: "intermediate",
    summary: "A technique for carefully combining two substances of different thickness and weight into one (relatively) smooth mixture.",
    main_video: "https://www.youtube.com/watch?v=7To3giV62rg", // path to video here
    description: [ // description of technique, broken down into sections
      {
        text: "Fold the dough or whatever ",
        image: "", // optional
        video: "", // optional
      }
    ],
    recipes: ["Cookie dough", " something something "] // list of recipes using this technique
  }
];

export default Detailed;
