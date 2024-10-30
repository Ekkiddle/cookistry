import TechniquesCard from "./techniquesCard"

const TECHNIQUES_LIST = [
  { id: 0,
    image: "/test1.jpg",
    imageAlt: "",
    title: "Use a Knife",
    desc: "Learn more about how to dice vegetables.",
    nav: "",
    level: "beginner"
  },
  { id: 1,
    image: "/test2.jpg",
    imageAlt: "",
    title: "Make Soup",
    desc: "Learn how to make the best soup. Ideal stirring velocities, best ladle material, and more!",
    nav: "",
    level: "advanced"
  },
  { id: 2,
    image: "/test3.jpg",
    imageAlt: "",
    title: "Pan Fry",
    desc: "Learn more about how to pan fry: selecting the right oil, cooking temperature, and cooking times.",
    nav: "",
    level: "advanced"
  }
]

const SORTED_TECHNIQUES = [
  { sort: "level",
    category: "beginner",
    techniques: TECHNIQUES_LIST.filter(tech => tech.level === "beginner")
  },
  { sort: "level",
    category: "intermediate",
    techniques: TECHNIQUES_LIST.filter(tech => tech.level === "intermediate")
  },
  { sort: "level",
    category: "advanced",
    techniques: TECHNIQUES_LIST.filter(tech => tech.level === "advanced")
  }
]

export default function TechniquesList() {
  return(
    <div className="flex flex-col gap-3 bg-colour5">
      <div className="flex justify-between p-2">
        <h1 className="text-3xl">Techniques</h1>
        <p className="my-auto">Sort</p>
      </div>
      {
        SORTED_TECHNIQUES.map(cat =>
          {return cat.techniques.length > 0 ?
            (
              <div key={cat.category}>
                <h1 className="text-xl font-bold bg-colour2 text-center text-colour4">
                  {cat.category.toUpperCase()}
                </h1>
                <div className="flex flex-col gap-3 p-2">
                  {cat.techniques.map(technique =>
                    <TechniquesCard
                      image={technique.image}
                      imageAlt={technique.imageAlt}
                      title={technique.title}
                      desc={technique.desc}
                      nav={technique.nav} />
                  )}
                </div>
              </div>
            ):(<div key={cat.category} hidden></div>)
          }
        )
      }
    </div>
  );
}