import { BrowserRouter, Switch, Route,} from "react-router-dom";
import {useState} from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

import Main from './pages/main/Main';
import Produto from './pages/produto/Produto';

const App = () => {

  const [sidebarOpen, setSidebarOpem] = useState(false);
  const openSidebar = ()=>{
    setSidebarOpem(true);
  };
  const closeSidebar = ()=>{
    setSidebarOpem(false);
  };

  return (
    <BrowserRouter>
    <div className="container">
       <Navbar sidebarOpen ={sidebarOpen} openSidebar={openSidebar}/>
       <Switch>
       <Route path ='/' exact component= {Main} />
       <Route path ='/Produto' exact component= {Produto} /> 
       </Switch>
       <Sidebar sidebarOpen={sidebarOpen} closeSidebar ={ closeSidebar }/>
    </div>
    </BrowserRouter>
  )
}

export default App

