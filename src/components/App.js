import React, { useState, useEffect } from 'react';
import { authService } from '../firebase';
import AppRouter from './Router';


function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  

  return(
<>
  {init ? <AppRouter isLoggedIn={isLoggedIn} />: "Initializing....." }
  <footer>&copy; Checipe {new Date().getFullYear()}</footer>
</>
  );
  }  


export default App;
