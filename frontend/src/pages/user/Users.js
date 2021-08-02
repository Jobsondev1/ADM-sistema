import React from 'react'
import TableProduct from '../../components/tableProduct/TableProduct'
import "./user.css"


const Users = () => {
    return (
    <main>
        <div className="__container">
            <h1>Cliente</h1>
            <div className="card__tabela">
            <TableProduct />
        </div>
        </div>
     </main>
    )
}

export default Users
