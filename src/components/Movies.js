import React from 'react'
import Row from './Row';
import requests from './requests';
function Movies() {
  return (
    <div>
      <div className="TvRowWrapper">
        <Row title="Trending Movies" fetchUrl={requests.fetchTrendingMovie}/>
        <Row title="Marvel Movies" fetchUrl={requests.fetchMarvelMovie}/>
        <Row title="DC Movies" fetchUrl={requests.fetchDCMovie}/>
        <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying}/>
      </div>
    </div>
  )
}

export default Movies
