import React, {useEffect, useState} from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const Row = () => {
  const [movies, setMovies] = useState([]);
  const fetchURL =
    "https://api.themoviedb.org/3/discover/movie?api_key=8d935f8786d8db8c6893d2f41881e577&with_networks=213";
  useEffect(() => {
    // it will take some time to bring the data so we need to use async
    async function fetchData() {
      const req = await axiosInstance.get(fetchURL);
      console.log(req);
      //   setMovies(req.data.results);
      return req;
    }
    fetchData();
    // any outside variables of useEffect that you used must be included in the [] (Dependency array)
  }, [fetchURL]);
  //if [] is blank, run once when the row loads, and don't run again! there's movies so it will run whenever movies has changed

  console.log(movies);
  return (
    <div>
      {/* {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.name}</h1>
          <p>{movie.overview}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Row;
