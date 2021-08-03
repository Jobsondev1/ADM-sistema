import React, {useState, useEffect} from 'react'
import "./produto.css"
import {useHistory} from "react-router-dom"
import Modal from '../../components/modal/Modal';
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import TableProduct from './TableProduct';

const Produto = () => {

      //MODAL
      const [isModalVisible, setIsModalVisible] = useState(false);

      //CRIAR PRODUTO
  let history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const addProduct = data => api.post("/api/product", data)
    .then(()=>{
      window.alert("Produto Cadastrado")
      history.push("/")
    })
    .catch(()=>{
      window.alert("Erro ao Cadastrar")
    })

    

    return (
    <main>
   <div className="__container">
    <div className="produto__container">

  

{/*MODAL CADASTRO*/}
            {isModalVisible ?
            <Modal onClose={()=> setIsModalVisible(false)}>
            
            
              <div className="title_form_modal">
                <h1>Cadastro do Produto </h1>
              </div> 

            <div className="modal__form">

            <form onSubmit={handleSubmit(addProduct)} >

                  <div className="form__grup">
                  <label htmlFor="nomeProduto">Produto*</label>
                    <input type="text" id="nomeProduto" name="nomeProduto" required {...register("productName")}/>
                    <p className="error-message">{errors.title?.message}</p>
                  </div>
                    
                  <div className="form__grup">
                    <label htmlFor="sizeProduto">Tamanho*:</label>
                      <select id="sizeProduto" {...register("productSize")}>
                        <option value="Pequeno">Pequeno</option>
                        <option value="Grande">Grande</option>
                      </select>
                      <p className="error-message">{errors.title?.message}</p>
                  </div>

                  <div className="form__grup">
                      <label htmlFor="detalheProduto">Detalhes:</label>
                      <textarea rows="3" name="detalheProduto" id="detalheProduto" {...register("productDescription")}/>
                      <p className="error-message">{errors.title?.message}</p>
                  </div>
                  <div className="form__button__salvar">
                  <button type="submit">Salvar</button>
                  </div>
            </form>
          </div>
              </Modal> : null
              }

        {/*TABELA*/}   
              <div className="tabela">
                <TableProduct />
              </div>

        {/*BOTTON NOVO*/}
            <div className="btn_novo">
                <button onClick={()=> setIsModalVisible(true)} className=" card_button_novo">
                    <a className="card_icon"><i className=" fa fa-plus"></i> </a> Novo Produto 
                </button>
            </div>
     </div>  
   </div>
 </main>
    )
}

export default Produto
