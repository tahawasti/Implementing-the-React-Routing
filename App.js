import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import AboutPage from './views/aboutPage';
import ListPage from './views/listPage';
import HomePage from './views/homePage';
import ThanksPage from './views/thankyou';
import DetailsPage from './views/detailsPage';
import DonatePage from './views/donatePage';
import LoginPage from './views/login';
import NotfoundPage from './views/notfound';
import NavComponent from './components/nav';
import FooterComponent from './components/footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavComponent/>
        <div className="container app">
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/list" component={ListPage} />
            <Route path="/thankyou" component={ThanksPage} />
            <Route path="/details" component={DetailsPage} />
            <Route path="/donate" component={DonatePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/notfound" component={NotfoundPage} />
            <Route path="/" exact component={HomePage} />
            <Redirect to="/notfound"/>
          </Switch>
        </div> 
        <FooterComponent/>
      </Router>
    </React.Fragment>

  );
}

export default App;
