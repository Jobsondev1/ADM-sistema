import { BrowserRouter, Switch, Route,} from "react-router-dom";
import {useState} from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

import Client from './pages/client/Client';
import Main from './pages/main/Main';
import Produto from './pages/produto/Produto';
import Report from './pages/report/Report';
import Sales from './pages/sales/Sales';
import  User from './pages/user/Users';

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
       <Route path ='/Client' exact component= {Client} /> 
       <Route path ='/Produto' exact component= {Produto} /> 
       <Route path ='/Report' exact component= {Report} /> 
       <Route path ='/Sales' exact component= {Sales} />
       <Route path ='/User' exact component= {User} /> 

       
       </Switch>
       <Sidebar sidebarOpen={sidebarOpen} closeSidebar ={ closeSidebar }/>
    </div>
    </BrowserRouter>
  )
}

export default App

