import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './pages/homepage/homepage.styles.scss';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/*const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>)*/

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser : null
    };
  }

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          this.setState({
             currentUser : {
              id: snapShot.id,
              ...snapShot.data()
             }
          });
          });
      } 

      this.setState({ currentUser : userAuth });

      //createUserProfileDocument(user);
      // this.setState({ currentUser : user });
      // console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    
  return (   /*is true if not specified*/
    <div>   {/*should be a string. represents base path denoted by /*/}
      <Header currentUser= { this.state.currentUser } /> 
      <Switch>
      <Route exact path='/' component = {HomePage}/>      
      <Route path='/shop' component = {ShopPage}/>
      <Route path='/signin' component = {SignInAndSignUpPage}/>
      </Switch>     
     {/* <HomePage/>*/}      
    </div>
  );
  }
}

export default App;
