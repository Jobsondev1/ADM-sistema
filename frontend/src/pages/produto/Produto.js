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

    <button onClick={()=> setIsModalVisible(true)} className=" card_button_novo">
         <a className="card_icon" href="#"><i className=" fa fa-plus"></i> </a> Novo Produto 
    </button>

    {isModalVisible ?
     <Modal>
      <h2>Ola modal</h2>
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
