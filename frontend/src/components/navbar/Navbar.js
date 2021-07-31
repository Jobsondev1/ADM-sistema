import "./navbar.css"
import avatar from '../../assets/avatar.png';


const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className = "navbar">
           <div className ="nav_icon" onClick={()=> openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
           </div>
           
           <div className ="navbar__left">
            <a href="/">Inicio</a>
            <a href="/User">Usuarios</a>
            <a className="active_link" href="/Produto">Produtos</a>
           </div>

        <div className="navbar__right">
         {/*   <a href="#">
                <i className=" fa fa-search"></i>
            </a>
            <a href="#">
                <i className=" fa fa-clock"></i>
    </a>*/}
            <a href="/User">
                <img width="30" src={avatar} alt="avatar"/>
            </a>
        </div>
        </nav>
    )
}

export default Navbar
