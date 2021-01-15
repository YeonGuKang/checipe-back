import React, { useState, useEffect } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { authService } from '../firebase';
import AppRouter from './Router';

console.log("run App");

function App() {
  console.log("run App fuction");
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  
  return(
<>
  {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />: "Initializing....." }
  <footer>&copy; Checipe {new Date().getFullYear()}</footer>
</>
  );
  }  


export default App;
