import React from 'react'
import requests from './requests';
import Row from './Row';
import{ReactComponent as Tv} from "./img/tv.svg";
import "./TvShows.css";
function TvShows() {
  return (
    <div className="TvRowWrapper">
        <Row title="Trending Tv Shows" fetchUrl={requests.fetchTrendingTv}/>
        <Row title="Marvel Tv Shows" fetchUrl={requests.fetchMarvelTv}/>
        <Row title="DC Shows" fetchUrl={requests.fetchDCTV}/>
        <Row title="On Air" fetchUrl={requests.fetchOnAir}/>
      </div>
  )
}

export default TvShows
