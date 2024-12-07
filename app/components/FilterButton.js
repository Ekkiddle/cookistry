import { useEffect, useRef, useState } from "react";
import FilterMenu from "../components/Filtermenu";
import { FilterIcon } from "@/public/FilterIcon";
import { useFilter } from "../components/Filter";

export default function FilterButton( {ignoreRecipes, inSearchbar}) {
  const [openFilter, setOpenFilter] = useState(false);
  const filter_btn = useRef(null);

  const openFilterMenu = () => setOpenFilter(true);
  const closeFilterMenu = () => setOpenFilter(false);

  const { filters } = useFilter(); // access filter context

  useEffect(() => {
    ((filters.levels.length === 0)
    && (ignoreRecipes || (filters.types.length === 0))
    && (ignoreRecipes || (filters.tags.length === 0))) ?
      (filter_btn.current?.setAttribute("data-filtering", "false"))
      : (filter_btn.current?.setAttribute("data-filtering", "true"));
  }, [filters, ignoreRecipes])

  return (
    <>
      {inSearchbar ? (
        <div className="relative h-full">
            <button ref={filter_btn} onClick={openFilterMenu}
                data-filtering="false"
                className="
                  flex items-center justify-center
                  w-10 h-full rounded-r-[15px]
                  stroke-[1] stroke-current fill-none
                  bg-slate-500 text-white
                  data-[filtering=true]:fill-current
                  hover:bg-slate-700 hover:text-slate-500"
            >
              {/* scale icon down within button */}
              <div className="size-4"><FilterIcon /></div>
            </button>
            {openFilter && <FilterMenu handleClose={closeFilterMenu} />}
        </div>
      ) : (
        <div className="relative z-[15]">
          <button ref={filter_btn} onClick={openFilterMenu}
            data-filtering="false"
            className="
              ml-1 size-6 p-1
              text-colour2 stroke-[1.5] stroke-current fill-none
              bg-colour4 rounded-md
              data-[filtering=true]:fill-current
              hover:bg-colour2/50 hover:text-colour5"
          >
            <FilterIcon />
          </button>
          {openFilter && <FilterMenu ignoreRecipes={ignoreRecipes} handleClose={closeFilterMenu} />}
        </div>
      )}
    </>
  )
}