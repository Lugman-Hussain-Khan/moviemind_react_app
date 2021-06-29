import React,{useEffect,useState} from 'react';
import requests from './requests';
import "./Banner.css";
const bannerUrl = "https://image.tmdb.org/t/p/w1280/";

function Banner() {
  const [banner, setbanner] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await fetch(requests.fetchNetflixOriginals);
      const data = await request.json();
      setbanner(data.results[Math.floor(Math.random()*20)]);
    }
    fetchData()
  },[])
  return (
    <div className="bannerWrapper" style={{
      backgroundImage: `url(${bannerUrl}${banner.backdrop_path})`,
      backgroundSize:"cover",
      // backgroundPositionY: "-100px",
      backgroundRepeat:"no-repeat"
    }}>
      <div className="overlayWrapper">
        <div className="overlay">
          <h1>Welcome.</h1>
          <h2>Millions of movies, TV shows to discover. Explore now.</h2>
        </div>
      </div>
    </div>
  )
}

export default Banner
