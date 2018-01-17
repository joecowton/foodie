import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <a className="nav navbar-nav navbar-right" href="/auth/google"> Sign In With Google </a>
      default:
       return (
         <div class="navbar navbar-fixed-top navbar-custom ">
           <div class="container">
             <a href="/shoppinglist"><img src="./images/Shopping-Cart-red.png" class="img-responsive" width="100" padding="100"/></a>
             <Link className="navbar-brand" to="/user"> Profile </Link>
               <ul class="nav navbar-nav pull-right">
                 <a className="navbar-brand navbar-right" href="/api/logout"> Logout </a>
              </ul>
           </div>
         </div>
       )
    }
  }

  user(){
    return this.props.auth ? 'Logged in as ' + this.props.auth.name : ''
  }

  render() {
    return(
      <div>
        <nav className="NavBar" >
          <div className="navbar navbar-expand-sm navbar-dark ">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="/"><img src="./images/foodie.png" class="img-responsive" width="100" padding="100"/></a></li>
              <li><a href="/tesco"><img src="./images/tesco.png" class="img-responsive" width="100"/></a></li>
            </ul>
            <div class="nav navbar-nav navbar-right">

            {this.renderContent()}
            {this.user()}
          </div>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
