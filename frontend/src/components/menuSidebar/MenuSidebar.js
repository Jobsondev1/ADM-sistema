import React from 'react'
import "./menuSidebar.css"
//import { BrowserRouter, Switch, Route,} from "react-router-dom";
const MenuSidebar = () => {
    return (
        <div className="sidebar__menu">
            <div className="sidebar__link active__menu__link">
                <i className="fa fa-home"></i>
                <a href={"/"}>Main</a>
            </div>
            <div className="sidebar__link">
                <i className="fas fa-shopping-cart"></i>
                <a href="/Sales">Venda</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-user-check"></i>
                <a href="/Client">Clientes</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-box-open"></i>
                <a href={"/Produto"}>Produto</a>
            </div>
           
            <div className="sidebar__link">
                <i className="fa fa-user"></i>
                <a href="/User">Usuarios</a>
            </div>
            <div className="sidebar__link">
                <i className="fas fa-chart-pie"></i>
                <a href="/Report">Relatorios</a>
            </div>
            <h2>Relatorios</h2>
            <div className="sidebar__link">
                <i className="fa fa-chart-area"></i>
                <a href="Mês">Mês</a>
            </div>
            <div className="sidebar__logout">
                <i className="fa fa-power-off"></i>
                <a href="Sair">Sair</a>
            </div>
        </div>
    )
}

export default MenuSidebar
