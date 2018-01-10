// responsible intitial view layer setup
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const dummyHeader = () => <h2>Header</h2>
const dummyDashboard = () => <h2>Dashboard</h2>
const dummyLanding = () => <h2>Landing</h2>



const App = function(){
  return (
    <div>
      <BrowserRouter> // expects one child componentat most
        <div>
          //setting up routes
          <Route path="/" component={dummyLanding} /> // home page route setup
        <div/>
      </BrowserRouter>
    </div>
  );
};

export default App;
