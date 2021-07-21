import {useState} from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';

const App = () => {

  const [sidebarOpen, setSidebarOpem] = useState(false);
  const openSidebar = ()=>{
    setSidebarOpem(true);
  };
  const closeSidebar = ()=>{
    setSidebarOpem(false);
  };

  return (
    <div className="container">
       <Navbar sidebarOpen ={sidebarOpen} openSidebar={openSidebar}/>
       <Main />
       <Sidebar sidebarOpen={sidebarOpen} closeSidebar ={ closeSidebar }/>
    </div>
  )
}

export default App

