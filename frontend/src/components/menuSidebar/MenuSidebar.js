import React from 'react'
import "./menuSidebar.css"
import { BrowserRouter, Switch, Route,} from "react-router-dom";
const MenuSidebar = () => {
    return (
        <div className="sidebar__menu">
            <div className="sidebar__link active__menu__link">
                <i className="fa fa-home"></i>
                <a href={"/"}>Main</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-cutlery"></i>
                <a href="Pedidos">Pedidos</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-user-check"></i>
                <a href="Clientes">Clientes</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-box-open"></i>
                <a href={"/Produto"}>Produto</a>
            </div>
           
            <div className="sidebar__link">
                <i className="fa fa-user"></i>
                <a href="Usuarios">Usuarios</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-tachometer"></i>
                <a href="Relatorios">Relatorios</a>
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
