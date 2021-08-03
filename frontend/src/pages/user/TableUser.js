import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table';
import api from '../../services/api'
import { useForm } from 'react-hook-form'


const TableUser = () => {

  const columns = [

    {
      field: 'name_user',
      title: 'Nome',
      width: 300,
      editable: true,
    },
    {
      field: 'email_user',
      title: 'Email',
      width: 150,
      editable: true,
    },
  ];

  //LISTAR DADOS API PRODUTO

  const [data, setData] = useState([])
  useEffect(() => {
    async function loadProdutos() {
      const response = await api.get("/api/user");
      setData(response.data)
    }
    loadProdutos();
  }, [])

  //CRIAR PRODUTO
  const getUser = () => {
    fetch(api).then(resp => resp.json())
      .then(resp => setData(resp))
  }

  return (
    <div>
      <MaterialTable
        title="Produtos"
        columns={columns}
        data={data}
         actions={[        
          {
            icon: "edit",
            tooltip: "editar Produto",
            onClick: (event, rowData) => window.confirm("deseja editar o produto:" + rowData.productName)
          },
          {
            icon: "delete",
            tooltip: "Deletar Produto",
            onClick: (event, rowData) => window.confirm("deseja Deleatar o produto:" + rowData.productName + "?")
          }
        ]}
        options={{
          addRowPosition:"first",
          actionsColumnIndex: -1,
          search: false,
          exportButton: true,
          sorting: false,       

        }}
      />
    </div>
  )
}

export default TableUser
