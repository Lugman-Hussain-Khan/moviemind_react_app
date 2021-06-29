import React,{useEffect,useState} from 'react'
import "./Row.css";

const imgBaseUrl = "https://image.tmdb.org/t/p/w185/"
function Row({title,fetchUrl}) {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await fetch(fetchUrl);
      const data = await request.json();
      setMovies(data.results);
    }
    fetchData();
  },[fetchUrl]);
  return (
    <div className="rowWrapper">
      <h1 className="rowTitle">{title}</h1>
      <div className="rowPosters">
        {movies.map(movie => (
          <div className="poster" key={movie.id}>
            <img src={`${imgBaseUrl}${movie.poster_path}`} alt={movie.name} className="rowPoster"  loading="lazy"/>
            <div className="posterContent">
              <h1 className="posterTitle">{movie?.title || movie?.name ||movie?.original_name }</h1>
              <h1 className="posterVote">{(movie.vote_average) ? movie.vote_average : "NR"}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row;