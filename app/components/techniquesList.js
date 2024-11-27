import CategoryInfoButton from "./CategoryInfoButton"
import TechniquesCard from "./techniquesCard"

export default function TechniquesList({techniques, sortBy}) {
  const SORT_MODES = {
    level: ['beginner', 'intermediate', 'advanced'],
    name: undefined
  }

  // sort techniques according to sort mode
  if (SORT_MODES[sortBy] === undefined) {
    // sort alphabetically by the sortBy field in the techniques list
    var sorted_techniques = [...techniques].sort((a,b) => {
      if (a[sortBy] < b[sortBy]) return -1
      else if (a[sortBy] > b[sortBy]) return 1
      else return 0
    })
  } else {
    // sort by the categories in that sort mode list
    var sorted_techniques = [...techniques].sort((a,b) => {
      return SORT_MODES[sortBy].indexOf(a[sortBy]) - SORT_MODES[sortBy].indexOf(b[sortBy]);
    })
  }

  // group techniques according to sort mode
  const grouped_techniques = sorted_techniques.reduce((acc, technique) => {
    let group = ""
    if (SORT_MODES[sortBy] === undefined) {
      group = technique[sortBy].charAt(0).toUpperCase();
    } else {
      group = technique[sortBy];
    }
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(technique);
    return acc;
  }, {});

  return(
    <div className="flex flex-col gap-3 bg-colour5">
      {
        Object.keys(grouped_techniques).map((group => (
          <div key={group}>
            {/* category divider (sticks to top of page) */}
            <div className="
              sticky top-24 md:top-12
              z-10
              w-full
              flex flex-row justify-between
              p-2 pl-6 pr-4
              bg-colour2
            ">
              <h2 className="text-xl font-bold text-colour4">
                {group.charAt(0).toUpperCase() + group.slice(1)}
              </h2>
              {/* only include the info button if sortBy has specified categories */}
              {SORT_MODES[sortBy] && <CategoryInfoButton cat_name={sortBy} cat_option={group} />}
            </div>
            {/* list of techniques within category */}
            <div className="grid grid-cols-1 lg:grid-cols-2 z-0 gap-4 p-4">
              {
                grouped_techniques[group].map((technique) => (
                  <TechniquesCard technique={technique} />
                ))
              }
            </div>
          </div>
        )))
      }
    </div>
  );
}