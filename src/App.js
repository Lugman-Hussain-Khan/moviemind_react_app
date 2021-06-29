import './App.css';
import Home from "./components/Home";
import TvShows from "./components/TvShows";
import Movies from "./components/Movies";
import NavBottom from "./components/NavBottom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TvShows} />
            <Route path="/movies" exact component={Movies} />
          </Switch>
        </div>
        <NavBottom />
      </div>
    </Router>
  );
}

export default App;
