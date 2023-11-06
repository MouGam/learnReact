import { useState, useEffect } from "react";
import Movie from "./component/Movie.js";
import styles from "./App.module.css";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState(false);
    const getMovies = async()=>{
      const response = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
      setMovies(response.data.movies);
      setLoading(false);
    }
    useEffect(
      ()=>{getMovies()}, []
    );
    return <div className={styles.bground}>
  
      <h1>Movies</h1>
      {loading ? "now loading" :
      <div className={styles.movieall}>
        {movies.map((movie)=>
          <Movie
          key={movie.id}
          id={movie.id}
          title = {movie.title} 
          year = {movie.year} 
          summary={movie.summary}
          medium_cover_image={movie.medium_cover_image}
          genres={movie.genres}
          />
        )}
      </div>
      }
    </div>
  }