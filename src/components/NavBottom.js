import React from 'react';
import {Link} from 'react-router-dom';
import{ReactComponent as Home} from "./img/home.svg";
import{ReactComponent as Tv} from "./img/tv.svg";
import{ReactComponent as Movies} from "./img/film.svg";

import "./NavBottom.css";

function NavBottom() {
  return (
    <div className="navWrapper">
      <div className="navElements">
        <Link to="/">
          <div className="navItem">
          <Home className="navElement" />
          <h1 className="Namer">Home</h1>
          </div>
        </Link>
        <Link to="/tv">
          <div className="navItem">
          <Tv className="navElement"/>
          <h1 className="Namer">Tv Shows</h1>
          </div>
        </Link>
        <Link to="/movies">
          <div className="navItem">
          <Movies className="navElement"/>
          <h1 className="Namer">Movies</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default NavBottom
