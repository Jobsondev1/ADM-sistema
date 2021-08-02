import React, {useState, useEffect} from 'react'
import "./produto.css"
//import { DataGrid } from '@material-ui/data-grid';
import MaterialTable from 'material-table';
import Search from '../../components/search/Search';
import Modal from '../../components/modal/Modal';

import { useForm } from 'react-hook-form'

import api from '../../services/api'

const pro = [
  { id: 1, productName: 'Mandioca', productSize: 'Pequeno', productDescription: 'Bolo de Mandioca', opcoes: 'botão'},
  { id: 2, productName: 'macaxeira', productSize: 'Pequeno', productDescription: 'bolo de macaxeira', opcoes: 'botão' },
  { id: 3, productName: 'tradicional', productSize: 'Grande', productDescription: 'Bolo trigo',  opcoes: 'botão' },
  { id: 4, productName: 'Formigueiro', productSize: 'Grande', productDescription: 'bolo ganulado',  opcoes: 'botão' },
  { id: 5, productName: 'Goiabada', productSize: 'Pequeno', productDescription: 'trigo e goiabada',  opcoes: 'botão' },
  { id: 6, productName: 'Goiabada coco', productSize: 'Pequeno', productDescription: 'trigo goiabada e coco',  opcoes: 'botão'},
];


const Produto = () => {

      //MODAL
      const [isModalVisible, setIsModalVisible] = useState(false);

      //DADOS PARA API

    const { register, handleSubmit, formState: { errors } } = useForm()

    const addProduct = data => console.log(data)

      //LISTAR DADOS API PRODUTO
  
      const [data, setData] = useState([])
     useEffect(() =>{
        async function loadProdutos(){
          const response = await api.get("/api/product");
          console.log(response.data)
          setData(response.data)
        }
        loadProdutos();
      }, [])

        //TABELA
  const columns = [
    /*{ 
    field: '_id', 
    headerName: 'ID', 
    width: 100 
     },*/
    {
      field: 'productName',
      title: 'Produto',
      width: 300,
      editable: true,
    },
    {
      field: 'productDescription',
      title: 'descrição',
      width: 400,
      editable: true,
    },
    {
      field: 'productSize',
      title: 'tamanho',
      width: 150,
      editable: true,
    },
  /*  {
      field: 'opcoes',
      title: 'Opções',
      width: 160,
      renderCell: (params)=>{
        return (
          <>
          <div className="btn_table_edit">
          <button className=" btn_edit">
         <a><i className=" fas fa-pencil-alt"></i> </a> 
          </button>
          </div>

          <div className="btn_table_delete">
          <button className=" btn_delete">
         <a><i className=" fas fa-trash-alt"></i></a> 
          </button>
          </div>
          </>
        )
      }
    },*/
  ];
      
    return (
    <main>
      <div className="__container">
    <div className="produto__container">

    <div className="btn_novo">
    <button onClick={()=> setIsModalVisible(true)} className=" card_button_novo">
         <a className="card_icon"><i className=" fa fa-plus"></i> </a> Novo Produto 
    </button>
    </div>

    {isModalVisible ?
     <Modal onClose={()=> setIsModalVisible(false)}>
     
    
      <div className="title_form_modal">
        <h1>Cadastro do Produto </h1>
      </div> 
    <div className="modal__form">

    <form onSubmit={handleSubmit(addProduct)} >

          <div className="form__grup">
           <label htmlFor="nomeProduto">Produto*</label>
            <input type="text" id="nomeProduto" name="nomeProduto" required {...register("nomeProduto")}/>
            <p className="error-message">{errors.title?.message}</p>
          </div>
             
          <div className="form__grup">
            <label htmlFor="sizeProduto">Tamanho*:</label>
              <select id="sizeProduto" {...register("sizeProduto")}>
                <option value={1}>Pequeno</option>
                <option value={2}>Grande</option>
              </select>
              <p className="error-message">{errors.title?.message}</p>
          </div>

          <div className="form__grup">
              <label htmlFor="detalheProduto">Detalhes:</label>
              <textarea rows="3" name="detalheProduto" id="detalheProduto" {...register("detalhePrduto")}/>
              <p className="error-message">{errors.title?.message}</p>
          </div>
          <div className="form__button__salvar">
          <button type="submit">Salvar</button>
          </div>
    </form>
    </div>
      </Modal> : null
      }

    <div className="card__tabela">
  
     <div>
      <MaterialTable
        data={data}
        columns={columns}
        title="Produtos"
        actions={[
          {
            icon:"edit",
            tooltip: "editar Produto",
            onClick: (event, rowData)=> window.confirm("deseja editar o produto:" +rowData.productName)
          },
          {
            icon:"delete",
            tooltip: "Deletar Produto",
            onClick: (event, rowData)=> window.confirm("deseja Deleatar o produto:" +rowData.productName+"?")
          }
        ]}
        options={{
          actionsColumnIndex: -1
        }}
        localization={{
          header:{
            actions:"Opçoes"
          }
        }}
      />
    </div>
  
     </div>  
  
   </div>
   </div>
    </main>
    )
}

export default Produto
