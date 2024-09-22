import {useFetch} from "../hooks/useFetch";
import {Cards} from "../components";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({apiPath, title}) => {

  const {data: movies} = useFetch(apiPath); // fetch a movie data

  useTitle(`${title} FreeWatch`);
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          { movies.map((movie) => (                     // then after render this
            <Cards key={movie.id} movie={movie}/>               
          )) }
        </div>
      </section>
    </main>
  )
}

