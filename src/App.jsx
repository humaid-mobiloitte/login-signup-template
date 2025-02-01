import { useState } from 'react';
import Login from './assets/login';
import Signup from './assets/Signup';
import {CssBaseline } from '@mui/material';
import TopNavBar from './assets/topNavBar';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  // Toggle between Login and Signup
  const toggleAuth = () => setIsLogin(!isLogin);

  return (
    <>
      <CssBaseline/>
      <div style={{backgroundColor:'#3B270C', overflow:'auto',paddingTop:'10%',paddingBottom:'10%'}}>
        <TopNavBar/>
        {/* Conditional Rendering for Login and Signup */}
        {isLogin ? <Login toggle={toggleAuth} /> : <Signup toggle={toggleAuth} />}
      </div>
    </>
  );
}

export default App;
