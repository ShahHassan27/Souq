import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './pages/homepage/homepage.styles.scss';
import Header from './components/header/header.component'
/*const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>)*/

function App() {
  return (   /*is true if not specified*/
    <div>   {/*should be a string. represents base path denoted by /*/}
      <Header /> 
      <Switch>
      <Route exact path='/' component = {HomePage}/>      
      <Route path='/shop' component = {ShopPage}/>
      </Switch>     
     {/* <HomePage/>*/}      
    </div>
  );
}

export default App;
