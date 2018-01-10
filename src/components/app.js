// responsible intitial view layer setup
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const dummyHeader = () => <h2>Header</h2>
const dummyDashboard = () => <h2>Dashboard</h2>
const dummyLanding = () => <h2>Landing</h2>



const App = function(){
  return (
    <div>
    Hi there!
    </div>
  );
};

export default App;
