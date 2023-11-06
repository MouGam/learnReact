import { useEffect, useState } from "react";
import styles from "./App.module.css"
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, title, year, summary, genres, medium_cover_image}){
    // console.log(id);
    return <Link 
    to={`/movie/${id}`}
    key={id} 
    className={styles.movielist}>
        <img className={styles.movieImage} src={medium_cover_image}/>
        <span className={styles.movieName}>{title} ({year})</span>
        {genres.map((gen)=><span key={gen}>{gen} </span>)}
        <div>{summary}</div>
    </Link>
};

export default Movie;

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    year:PropTypes.number,
    summary:PropTypes.string,
    genres:PropTypes.arrayOf(PropTypes.string),
    medium_cover_image:PropTypes.string,
};