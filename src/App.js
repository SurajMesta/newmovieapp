import React from 'react';
import logo from './logo.svg';
import './App.css';
import Moviesearch from './components/Moviesearch'
import Second from './components/Second'

class App extends React.Component {
 
 

  render(){
    return (
      <React.Fragment>
        <Moviesearch />
        <Second/>
      </React.Fragment>
    );

  }

}

export default App;
