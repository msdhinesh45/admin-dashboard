import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import { useState } from 'react';
import './App.css';

function App() {

const[openSideBarToggle, setOpenSideBarToggle] = useState(false);

const openSideBar=()=>{
  setOpenSideBarToggle(!openSideBarToggle)
}

  return(
    <div className="grid-container">
      <Header openSideBar={openSideBar} />
      <Sidebar openSideBarToggle={openSideBarToggle}/>
      <Home />
    </div>
  )
}

export default App;
