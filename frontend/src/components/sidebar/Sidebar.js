import "./sidebar.css"
import logo from '../../assets/logo.png';
import MenuSidebar from '../menuSidebar/MenuSidebar';


const Sidebar = ({sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar__reponsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className = "sidebar__img">
                    <img src ={logo} alt= "logo" />
                    <h1>Sitema</h1>
                </div>
                <i onClick={()=> closeSidebar ()}
                 className="fa fa-times"
                 id="sidebarIcon"
                 aria-hidden= "true"
                ></i>
            </div>
       <MenuSidebar/>
       
        </div>
    )
}

export default Sidebar
