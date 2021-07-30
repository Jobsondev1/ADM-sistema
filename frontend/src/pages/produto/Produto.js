import React, {useState} from 'react'
import "./produto.css"
import { DataGrid } from '@material-ui/data-grid';
import Search from '../../components/search/Search';
import Modal from '../../components/modal/Modal';

const Produto = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nome', headerName: 'name produto', width: 130 },
        { field: 'tipo', headerName: 'tipo', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
      ];
      
      const rows = [
        { id: 1, nome: 'Mandioca', tipo: 'pequeno', age: 35 },
        { id: 2, nome: 'macaxeira', tipo: 'pequeno', age: 42 },
        { id: 3, nome: 'tradicional', tipo: 'Grande', age: 45 },
        { id: 4, nome: 'Formigueiro', tipo: 'Grande', age: 16 },
        { id: 5, nome: 'Goiabada', tipo: 'Pequeno', age: null },
        { id: 6, nome: 'Goiabada coco', tipo: null, age: 150 },
      ];

      const [isModalVisible, setIsModalVisible] = useState(false);

    return (
    <produto>
    <div className="produto__container">

       <div className="btn_novo">
    <button onClick={()=> setIsModalVisible(true)} className=" card_button_novo">
         <a className="card_icon" href="#"><i className=" fa fa-plus"></i> </a> Novo Produto 
    </button>
    </div>

    {isModalVisible ?
     <Modal onClose={()=> setIsModalVisible(false)}>
     
    
      <div className="title_form_modal">
        <h1>Cadastro do Produto </h1>
      </div> 
    <div className="modal__form">
    <form method="post" >
          <div className="form__grup">
          <label htmlFor="nomeProduto">Produto:</label>
            <input type="text" id="nomeProduto" name="nomeProduto" placeholder="Digite o produto*" required/>
          </div>
             
          <div className="form__grup">
            <label htmlFor="size">Tamanho:</label>
              <select id="size">
                <option value="pequeno">Pequeno</option>
                <option value="grande">Grande</option>
              </select>
          </div>

          <div className="form__grup">
              <label htmlFor="mensagem">Detalhes:</label>
              <textarea rows="3" name="mensagem" id="mensagem" placeholder="Detalhe do produto*" required></textarea>
          </div>
          <div className="form__button__salvar">
          <button type="submit">Salvar</button>
          </div>
    </form>
    </div>
      </Modal> : null
      }

    <div className="card__tabela">

     <Search />
  
    <div className="tabela" style={{ height: 400, width: '100%', marginTop:10 }}>
         <DataGrid rows={rows} columns={columns} pageSize={5} c />
    </div>
    
     </div>  
  
   </div>
   
    </produto>
    )
}

export default Produto
