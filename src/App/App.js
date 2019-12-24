import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Portfolio from '../routes/Portfolio/Portfolio';
import LandingPage from '../routes/LandingPage/LandingPage';
import About from '../routes/About/About';
import Header from '../routes/Header/Header';
import Sidebar from '../routes/Sidebar/Sidebar';
import Footer from '../routes/Footer/Footer';



export default class App extends Component {
render(){
  return(
    <div className="App">
        <Header />
        {/* <Sidebar /> */}
        <main>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
  
            <Route
             
              path={'/about'}
              component={About}
            />
            <Route
             
              path={'/portfolio'}
              component={Portfolio}
            />
           
            
          </Switch>
        </main>
        <Footer />
      </div>
  )
}
}
