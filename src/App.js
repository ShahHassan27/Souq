import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';

const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
)

function App() {
  return (   /*is true if not specified*/
    <div>   {/*should be a string. represents base path denoted by /*/} 
      <Switch>
      <Route exact path='/' component = {HomePage}/>      
      <Route path='/hats' component = {HatsPage}/>
      </Switch>     
     {/* <HomePage/>*/}      
    </div>
  );
}

export default App;
