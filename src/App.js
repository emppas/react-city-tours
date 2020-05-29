import React, { Component } from 'react';
import './App.scss';
import NavBar from "./components/Navbar/Navbar"
import "@fortawesome/fontawesome-free/css/all.min.css";
import TourList from './components/TourList';

class App extends Component {
  render(){
  return (
  
      <React.Fragment>
        <NavBar />
        <TourList />
      </React.Fragment>
    
  );
}
}

export default App;
