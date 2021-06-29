import React from 'react'
import Banner from "./Banner"
import requests from './requests'
import Row from './Row'
import "./Home.css";
function Home() {
  return (
    <div>
      <Banner/>
      <div className="allRowWrapper">
        <Row title="Whats Popular" fetchUrl={requests.fetchPopular}/>
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Hotstar Originals" fetchUrl={requests.fetchHotstarOriginals}/>
        <Row title="Amazon Originals" fetchUrl={requests.fetchAmazonOriginals}/>
      </div>
    </div>
  )
}

export default Home