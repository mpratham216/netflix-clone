import React, { StrictMode, useEffect } from 'react';
import './App.css';
import Homescreen from './screens/Homescreen';
import Loginscreen from './screens/Loginscreen';
import Profilescreen from './screens/Profilescreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import  { auth } from "./firebase"
import { onAuthStateChanged } from "@firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth =>{
      if(userAuth){
        //Loggedin
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }else{
        //Loggedout
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch]);
  return (
    <div className="app">
      <StrictMode>
        <Router>
        {!user ?(
          <Loginscreen />
        ) : (
          <Switch>
            <Route path= "/profile">
              <Profilescreen/>
            </Route>
            <Route exact path="/">
              <Homescreen/>
            </Route>
            
          </Switch>
        )}
        </Router>
      </StrictMode>
      
    </div>
  );
  
}


export default App;
