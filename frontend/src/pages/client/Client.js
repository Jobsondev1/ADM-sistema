import React, {useState, useEffect} from 'react'
import "./client.css"
import MaterialTable from 'material-table';
import api from '../../services/api'
import { Modal} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
      position: 'relative',
      width: '45%',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '15%',
      left: '25%'
      
  },
  icons: {
      cursor: 'pointer'
  },
  inputMaterial: {
      width: '100%'
  }
}));


const columns = [
    {
        field: 'clientName',
        title: 'Nome',
        width: 350,
        editable: true,
      },
      {
        field: 'clientAddress',
        title: 'Endereço',
        width: 400,
        editable: true,
      },
      {
        field: 'clientTelephone',
        title: 'Telefone',
        width: 150,
        editable: true,
      },
      {
          field: 'clientDescription',
          title: 'Descição',
          width: 300,
          editable: true,
        },
];

 


const Client = () => {
  const styles = useStyles();
  
  const [data, setData] = useState([]) 
   //MODAL INSERIR
 const [modalInsertar, setmodalInsertar] = useState(false);
 //MODAL EDITAR
 const [modalEditar, setmodalEditar] = useState(false);
//MODAL DELETE
  const [modalDelete, setmodalDelete] = useState(false);
//PEGA DAOS DO INPUT
const [ clientSelect, setClientSelect ] = useState({
    clientName:"",
    clientAddress:"",
    clientTelephone:"",
    clientDescription:""
})

 
const handlechange = e=>{
   const { name, value} =e.target;
   setClientSelect(prevState=>({
       ...prevState,
       [name]:value    
   }));
}
//PRODUTO TABELA
const getClient = async()=>{
  await api.get("/api/client")
  .then(response =>{
      setData(response.data)
  }).catch(error=>{
      console.log(error);
  })
}

useEffect(() =>{
  getClient();
},[])


  //CRIAR CLIENTE
  const postClient = async () => {
    await api.post("/api/client", clientSelect)
      .then(response => {
        setData(data.concat(response.data))
      }).catch(error => {
        console.log(error);
      })
  }

 //DADOS PARA EDITAR DELETE CLIENTE
  const selectClienteEditDelete = (client, caso) => {
    setClientSelect(client);
    (caso === "Editar") ? modalAbrirFeicharEditar()
      :
      modalAbrirFeicharDelete()
  }
  //EDITAR USUARIOS
  const patchClient = async()=>{
    await api.patch("/api/client"+ "/" + clientSelect._id ,clientSelect)
    .then(response=>{
        var newData= data;
        newData.map(client=>{
            if(client._id===clientSelect._id){
                client.clientName=clientSelect.clientName;
                client.clientAddress=clientSelect.clientAddress;
                client.clientTelephone=clientSelect.clientTelephone;
                client.clientDescription=clientSelect.clientDescription
            }
            console.log(response)
        });
        setData(newData);
        modalAbrirFeicharEditar();
    }).catch(error=>{
        console.log(error);
    })
}

//DELETE CLIENT
const deleteClient = async () => {
  await api.delete("/api/client" + "/" + clientSelect._id)
      .then(response => {
          setData(data.filter(client => client._id !== clientSelect._id))
          modalAbrirFeicharDelete();
      }).catch(error => {
          console.log(error);
      })
}

//MODAL CRIAR
const modalAbrirFeicharInsertar = () => {
  setmodalInsertar(!modalInsertar);
}

  //MODAL EDITAR
  const modalAbrirFeicharEditar = () => {
    setmodalEditar(!modalEditar);
}

//MODAL DELETE
const modalAbrirFeicharDelete = () => {
  setmodalDelete(!modalDelete);
}


  //FORMULARIO MODAL CADASTRAR
  const bodyInsertar = (
    <div className={styles.modal}>
        <h3>Adicionar novo Cliente</h3>
        <div className="modal__Container">

            <form >

                <div className="form__grup">
                    <label htmlFor="clienteName">Cliente*</label>
                    <input type="text" id="clienteName"  name="clientName" required  onChange={handlechange}/>        
                </div>

                <div className="form__grup">
                    <label htmlFor="clientAddress">Endereço*</label>
                    <input type="text" id="clientAddress"  name="clientAddress" required onChange={handlechange}/>     
                </div>

                <div className="form__grup">
                    <label htmlFor="clientTelephone">Telefone*</label>
                    <input type="text" id="clientTelephone"  name="clientTelephone" required onChange={handlechange}/>              
                </div>
              
                <div className="form__grup">
                    <label htmlFor="clientDescription">Descrição*</label>
                    <input type="text" id="clientDescription"  name="clientDescription" required onChange={handlechange}/>              
                </div>

                <div className="buttoon_modal">
                    <button className="button_exit " onClick={() => modalAbrirFeicharInsertar()} >Cancelar</button>
                    <button type="submit" className="button_salvar " onClick={()  => postClient()} >Salvar</button>
                </div>
            </form>

        </div>

    </div>
)


  //FORMULARIO MODAL EDITAR
  const bodyEditar = (
    <div className={styles.modal}>
        <h3>Editar Produto</h3>
        <div className="modal__Container">

              <form >

                  <div className="form__grup">
                      <label htmlFor="clienteName">Cliente*</label>
                      <input type="text" id="clienteName" name="clientName" 
                      required onChange={handlechange} value={clientSelect&&clientSelect.clientName} />
                  </div>

                  <div className="form__grup">
                      <label htmlFor="clientAddress">Endereço*</label>
                      <input type="text" id="clientAddress" name="clientAddress" 
                      required onChange={handlechange} value={clientSelect&&clientSelect.clientAddress} />
                  </div>

                  <div className="form__grup">
                      <label htmlFor="clientTelephone">Telefone*</label>
                      <input type="text" id="clientTelephone" name="clientTelephone" 
                      required onChange={handlechange}  value={clientSelect&&clientSelect.clientTelephone} />
                  </div>

                  <div className="form__grup">
                      <label htmlFor="clientDescription">Descrição*</label>
                      <input type="text" id="clientDescription" name="clientDescription" 
                      required onChange={handlechange} value={clientSelect&&clientSelect.clientDescription} />
                  </div>

                  <div className="buttoon_modal">
                      <button className="button_exit " onClick={() => modalAbrirFeicharInsertar()} >Cancelar</button>
                      <button type="submit" className="button_salvar " onClick={() => patchClient()} >Editar</button>
                  </div>
              </form>

        </div>

    </div>

)

   //FORMULARIO MODAL DELETE
   const bodyDelete = (
    <div className={styles.modal}>
        <h3>Excluir Cliente</h3>
        <div className="modal__Container">
               <div className="buttoon_modal">
                   <p>
                       Tem sertesa que deseija exluir o produto <b>{clientSelect && clientSelect.clientName}</b> ?
                   </p>
                   <button className="button_exit " onClick={()=>modalAbrirFeicharDelete()} >Cancelar</button>
                   <button type="submit" className="button_salvar"onClick={()=>deleteClient()}>Excluir</button>
               </div>
        </div>
    </div>
)

    return (
      <main>
      <div className="__container">
          <div className="produto__container">                 

              {/*BUtTON NOVO*/}
              <div className="btn_novo">
                  <button onClick={() => modalAbrirFeicharInsertar()} className=" card_button_novo">
                      <a className="card_icon"><i className=" fa fa-plus"></i> </a> Novo
                  </button>
              </div>

              {/*TABELA*/}
              <div>
                  <MaterialTable
                      title="Cliente"
                      columns={columns}
                      data={data}
                      actions={[
                        {
                          icon: "edit",
                          tooltip: "Editar Cliente",
                          onClick: (event, rowData) =>selectClienteEditDelete(rowData, "Editar")
                      },
                      {
                        icon: "delete",
                        tooltip: "Deletar Cliente",
                        onClick: (event, rowData) => selectClienteEditDelete(rowData, "Excluir")
                    }
                      ]}
                      options={{
                          addRowPosition: "first",
                          actionsColumnIndex: -1,
                          search: true,
                          exportButton: true,
                          sorting: false,

                      }}
                  />
               
                 {/*MODAL POST*/}
                   <div className="modal_ui">
                      <Modal
                          open={modalInsertar}
                          onClose={modalAbrirFeicharInsertar}>
                          {bodyInsertar}
                      </Modal>
                  </div>

              {/*MODAL EDITAR*/}
              <div className="modal_ui">
                <Modal
                  open={modalEditar}
                  onClose={modalAbrirFeicharEditar}>
                  {bodyEditar}
                </Modal>
              </div>

              {/*MODAL DELETAR*/}
              <div className="modal_ui">
                <Modal
                  open={modalDelete}
                  onClose={modalAbrirFeicharDelete}>
                  {bodyDelete}
                </Modal>
              </div>
                  
              </div>
          </div>
      </div>
  </main>
    )
}

export default Client
