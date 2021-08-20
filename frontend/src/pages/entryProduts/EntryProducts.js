import React from 'react'
import "./entryProducts.css"
//import {userNavigate} from "react-router-dom"

const EntryProducts = () => {

   // const navigate = userNavigate();
    return (
        <div className="main_p">
            <div className="main__container">

                <div className="btn_link_entry_pro">
                    <div className="btn">
                        <i className="fa fa-plus"></i>
                        <a href="/Produto">Novo Produto</a>
                    </div>
                </div >

                <div className="card_produtct">
                    <h1>Entrada de Produtos</h1>
                <div className="form_container">
                    <form className="form_product"> 
                        <div className="form__grup">
                            <label htmlFor="produtoName">Produto*</label>
                            <input type="text" id="produtoName" name="productName" required />
                        </div>
                    <div className="row">
                        <div className="form__grup">
                            <label htmlFor="productDescription">Quantidade*</label>
                            <input type="number" min="1" id="productDescription" name="productDescription" required />
                        </div>
                    
                        <div className="form__grup">
                            <label htmlFor="produtoName">Valor R$*</label>
                            <input className="valor" type="text" id="produtoName" name="productName" required />
                        </div>
                    </div>
                        <div className="form__grup">
                            <label htmlFor="productDescription">Data*</label>
                            <input type="date" id="productDescription" name="productDescription" required />
                        </div>
                
                        <div className="buttoon_modal">
                            <button type="submit" className="btn_add ">Adicionar</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EntryProducts
