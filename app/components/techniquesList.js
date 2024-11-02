import TechniquesCard from "./techniquesCard"
import techniques from '@/public/techniques/techniques'

const SORTED_TECHNIQUES = [
  { sort: "level",
    category: "beginner",
    techniques: techniques.filter(tech => tech.level === "beginner")
  },
  { sort: "level",
    category: "intermediate",
    techniques: techniques.filter(tech => tech.level === "intermediate")
  },
  { sort: "level",
    category: "advanced",
    techniques: techniques.filter(tech => tech.level === "advanced")
  }
]

export default function TechniquesList() {
  return(
    <div className="flex flex-col gap-3 bg-colour5">
      <div className="flex justify-between p-2 lg:px-5">
        <h1 className="text-3xl font-bold text-colour1">Techniques</h1>
        <div className="flex my-auto">
          <label htmlFor="sort" className="pr-1.5 my-auto text-colour1">Sort by</label>
          <select name="sort" id="sort" className="p-1 text-colour2 bg-colour4 rounded-md">
            <option value="level">Level</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      {
        SORTED_TECHNIQUES.map(cat =>
          {return cat.techniques.length > 0 ?
            (
              <div key={cat.category}>
                <h1 className="sticky top-24 md:top-12 p-1 pl-6 text-xl font-bold bg-colour2 text-colour4">
                  {cat.category.toUpperCase()}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                  {cat.techniques.map(technique =>
                    <TechniquesCard
                      image={technique.image}
                      imageAlt={technique.imageAlt}
                      title={technique.title}
                      summary={technique.summary}
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