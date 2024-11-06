import RecipeCard from "./RecipeCard"
import TechniquesCard from "./techniquesCard"

export default function SearchList({result_list, sortBy}) {
  const SORT_MODES = {
    level: ['beginner', 'intermediate', 'advanced'],
    name: undefined
  }

  // sort according to sort mode
  if (SORT_MODES[sortBy] === undefined) {
    // sort alphabetically by the sortBy field in the list
    var sorted_list = [...result_list].sort((a,b) => {
      if (a.item[sortBy] < b.item[sortBy]) return -1
      else if (a.item[sortBy] > b.item[sortBy]) return 1
      else return 0
    })
  } else {
    // sort by the categories in that sort mode list
    var sorted_list = [...result_list].sort((a,b) => {
      return SORT_MODES[sortBy].indexOf(a.item[sortBy]) - SORT_MODES[sortBy].indexOf(b.item[sortBy]);
    })
  }

  // group techniques according to sort mode
  const grouped_list = sorted_list.reduce((acc, result) => {
    let group = ""
    if (SORT_MODES[sortBy] === undefined) {
      group = result.item[sortBy].charAt(0).toUpperCase();
    } else {
      group = result.item[sortBy];
    }
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(result);
    return acc;
  }, {});

  return(
    <div className="flex flex-col gap-3 bg-colour5">
      {
        Object.keys(grouped_list).map((group => (
          <div key={group}>
            <h2 className="sticky top-24 md:top-12 z-10 p-2 pl-6 text-xl font-bold bg-colour2 text-colour4">
              {group.charAt(0).toUpperCase() + group.slice(1)}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 z-0 gap-4 p-4">
              {
                grouped_list[group].map((result) => (
                  result.type === "technique" ? (
                    <TechniquesCard technique={result.item} />
                  ) : (
                    <RecipeCard recipe={result.item} />
                  )
                ))
              }
            </div>
          </div>
        )))
      }
    </div>
  );
}