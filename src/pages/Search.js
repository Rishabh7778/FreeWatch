import { useSearchParams } from "react-router-dom";//search
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Cards } from "../components";


export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();//search
  const queryTerm = searchParams.get("q");//search

  const { data: movies } = useFetch(apiPath, queryTerm);
  useTitle(`Search result for ${queryTerm}`);


  // useEffect(()=>{
  //   document.title = `Search result for ${queryTerm} / Cinemate`;
  // })

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap">
          {movies.map((movie) => (                     // then after render this
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
