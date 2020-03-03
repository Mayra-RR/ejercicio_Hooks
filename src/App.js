import React from 'react';
import './App.css';
import {GlobalContextProvider} from './components/GlobalContextProvider'
import Login from './components/Login'


function App() {

   
  
  return <GlobalContextProvider settings={{username: "Mayra" , password: "120190"}}>
    <div>May</div>
      <Login className={'Login'}/>
   
    </GlobalContextProvider>
    
  ;
}

export default App;
