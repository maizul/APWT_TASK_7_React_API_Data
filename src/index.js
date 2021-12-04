import React from 'react';
import ReactDOM from 'react-dom';
import './Components/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Home from './Components//Home/Home';
import PackageView from './Components/Packages/PackageView';
import EventView from './Components/Events/EventView';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Packagesdetails from './Components/Packages/Packagedetails';
import Eventdetails from './Components/Events/Eventdetails';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
            <PackageView />
              <EventView />
              </Route>

              <Route exact path="/packages">
                <PackageView/>
              </Route>
              <Route exact path="/packagedetails/:id">
                <Packagesdetails/>
              </Route>

              <Route exact path="/events">
                <EventView/>
              </Route>
              <Route exact path="/eventdetails/:id">
                <Eventdetails/>
              </Route>

              </Switch>
              </div>
              <Footer />
              </Router>
              </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
