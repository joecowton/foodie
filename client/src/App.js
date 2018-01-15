import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import User from './components/User/User'
import Alerts from './components/alerts/Alerts'
import Products from './components/Products/Products'
import LandingPage from './components/LandingPage/LandingPage';
import Tesco from './components/tesco/tesco';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    const alerts = <Alerts/>
    const navBar = <NavBar />
    const user = () => <User />
    const tescoApi = () =>  <Tesco />
    const landingpage = () => <LandingPage />

    return (
      <div className="App">
        <div className ="container">
          <BrowserRouter>
            <div>
              {navBar}
              <Route exact path="/" component={landingpage}/>
              <Route exact path="/tesco" component={tescoApi}/>
              <Route exact path="/user" component={user} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}


export default connect(null, actions)(App);
