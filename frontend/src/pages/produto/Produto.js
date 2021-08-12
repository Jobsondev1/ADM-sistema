import React, {useState, useEffect} from 'react'
import "./produto.css"
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
    field: 'productName',
    title: 'PRODUTO',
    width: 300,
    editable: true,
  },
  {
    field: 'productDescription',
    title: 'DESCRIÇÃO',
    width: 400,
    editable: true,
  },
  {
    field: 'productSize',
    title: 'TAMANHO',
    lookup:{1:"Pequeno", 2:"Grande"},
    width: 150,
    editable: true,
  },
];

 


const Produto = () => {
  const styles = useStyles();
  
  const [data, setData] = useState([]) 
   //MODAL INSERIR
 const [modalInsertar, setmodalInsertar] = useState(false);
 //MODAL EDITAR
 const [modalEditar, setmodalEditar] = useState(false);
//MODAL DELETE
  const [modalDelete, setmodalDelete] = useState(false);
//PEGA DAOS DO INPUT
const [ productSelect, setproductSelect ] = useState({
  productName:"",
  productDescription:"",
  productSize:"1"
})

 
const handlechange = e=>{
   const { name, value} =e.target;
   setproductSelect(prevState=>({
       ...prevState,
       [name]:value    
   }));
}
//PRODUTO TABELA
const getProduto = async()=>{
  await api.get("/api/product")
  .then(response =>{
      setData(response.data)
  }).catch(error=>{
      console.log(error);
  })
}

useEffect(() =>{
  getProduto();
},[])


  //CRIAR PRODUTO
  const postProduct = async () => {
    await api.post("/api/product", productSelect)
      .then(response => {
        setData(data.concat(response.data))
      }).catch(error => {
        console.log(error);
      })
  }

 //DADOS PARA EDITAR DELETE USUARIO
  const selectProductEditDelete = (products, caso) => {
    setproductSelect(products);
    (caso === "Editar") ? modalAbrirFeicharEditar()
      :
      modalAbrirFeicharDelete()
  }
  //EDITAR USUARIOS
  const patchProduct = async()=>{
    await api.patch("/api/Product"+ "/" + productSelect._id ,productSelect)
    .then(response=>{
        var newData= data;
        newData.map(product=>{
            if(product._id===productSelect._id){
                product.productName=productSelect.productName;
                product.productDescription=productSelect.productDescription;
                product.productSize=productSelect.productSize
            }
            console.log(response)
        });
        setData(newData);
        modalAbrirFeicharEditar();
    }).catch(error=>{
        console.log(error);
    })
}

//DELETE USUARIOS
const deleteProduct = async () => {
  await api.delete("/api/product" + "/" + productSelect._id)
      .then(response => {
          setData(data.filter(product => product._id !== productSelect._id))
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
        <h3>Adicionar novo Produto</h3>
        <div className="modal__Container">

            <form >

                <div className="form__grup">
                    <label htmlFor="produtoName">Produto*</label>
                    <input type="text" id="produtoName"  name="productName" required  onChange={handlechange}/>
                   
                </div>

                <div className="form__grup">
                    <label htmlFor="productDescription">Descrição*</label>
                    <input type="text" id="productDescription"  name="productDescription" required onChange={handlechange}/>
                    
                </div>

                <div className="form__grup">
                    <label htmlFor="productSize">Tamamho*:</label>
                    <select id="productSize" name="productSize" onChange={handlechange} >
                        <option value={1}>Pequeno</option>
                        <option value={2}>Grande</option>
                    </select>
                    
                </div>

                <div className="buttoon_modal">
                    <button className="button_exit " onClick={() => modalAbrirFeicharInsertar()} >Cancelar</button>
                    <button type="submit" className="button_salvar " onClick={()  => postProduct()} >Salvar</button>
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
                    <label htmlFor="produtoName">Produto*</label>
                    <input type="text" id="produtoName"  name="productName" 
                    required  onChange={handlechange} value={productSelect&&productSelect.productName}/>  
                </div>

                <div className="form__grup">
                    <label htmlFor="productDescription">Descrição*</label>
                    <input type="text" id="productDescription"  name="productDescription" 
                    required onChange={handlechange} value={productSelect&&productSelect.productDescription}/>               
                </div>

                <div className="form__grup">
                    <label htmlFor="productSize">Tamamho*:</label>
                    <select id="productSize" name="productSize" 
                    onChange={handlechange} value={productSelect&&productSelect.productSize} >
                        <option value={1}>Pequeno</option>
                        <option value={2}>Grande</option>
                    </select>
                    
                </div>

                <div className="buttoon_modal">
                    <button className="button_exit " onClick={() => modalAbrirFeicharEditar()} >Cancelar</button>
                    <button type="submit" className="button_salvar " onClick={()  => patchProduct()} >Salvar</button>
                </div>
            </form>

        </div>

    </div>

)

   //FORMULARIO MODAL DELETE
   const bodyDelete = (
    <div className={styles.modal}>
        <h3>Excluir produto</h3>
        <div className="modal__Container">
               <div className="buttoon_modal">
                   <p>
                       Tem sertesa que deseija exluir o produto <b>{productSelect && productSelect.productName}</b> ?
                   </p>
                   <button className="button_exit " onClick={()=>modalAbrirFeicharDelete()} >Cancelar</button>
                   <button type="submit" className="button_salvar"onClick={()=>deleteProduct()}>Excluir</button>
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
                      title="Produto"
                      columns={columns}
                      data={data}
                      actions={[
                        {
                          icon: "edit",
                          tooltip: "editar Produto",
                          onClick: (event, rowData) =>selectProductEditDelete(rowData, "Editar")
                      },
                      {
                        icon: "delete",
                        tooltip: "Deletar Produto",
                        onClick: (event, rowData) => selectProductEditDelete(rowData, "Excluir")
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

export default Produto
