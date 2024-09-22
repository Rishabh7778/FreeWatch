import { useEffect, useState } from "react";

//we are using single use fetch to do all of our task
export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

    // this use effect show on first time in our browser
    useEffect(()=> {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      },[url])

  return {data}
}

