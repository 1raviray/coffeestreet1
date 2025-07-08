import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Header from './Components/Header';
import Adminlogin from './Components/Adminlogin';
import AdminPanel from './Components/AdminPanel';
import Owlcar from './Components/Owlcar';
import Hero from './Hero';
import Adminroutes from './Components/Adminroutes';
import { createContext, useState } from 'react';

export const logintoken=createContext()
export const logindataContext=createContext()

function App() {

  const [Token,setToken]=useState("")
  const [Logindata,SetLogindata]=useState("")

  return (
    <div>
    <logintoken.Provider value={[Token,setToken]}>
    <logindataContext.Provider value={[Logindata,SetLogindata]}>
    {/* <Owlcar/> */}
      <Adminroutes/>
    </logindataContext.Provider>
    </logintoken.Provider>
    </div>
  );
}

export default App;
