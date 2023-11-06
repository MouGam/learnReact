import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Details(){
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const param = useParams();

    const getMovie = async()=>{
        const response = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${param.id}`)).json();
        // console.log(response.data.movie.title);
        setMovie(response.data.movie);
        console.log(response);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie();
    },[])

    return <div>
        {loading ? "Loading" :
        <div>
            <h1>{movie.title}({movie.year})</h1>
            <img src={movie.medium_cover_image}/><br/>
            {movie.genres.map((gen)=><span key={gen}>{gen} </span>)}
        </div>}
        <br/>
        <Link to={`/`}>go to front page</Link>
        </div>
}