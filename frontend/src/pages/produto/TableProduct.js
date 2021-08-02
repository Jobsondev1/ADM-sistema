import React, {useState, useEffect} from 'react'
import MaterialTable from 'material-table';
import api from '../../services/api'


const TableProduct = () => {

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
      title: 'Descrição',
      width: 400,
      editable: true,
    },
    {
      field: 'productSize',
      title: 'Tamanho',
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


  return (
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
  )
}

export default TableProduct
