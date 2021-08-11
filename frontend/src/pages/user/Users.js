import React, { useState, useEffect } from 'react'
import "./user.css"
import MaterialTable from 'material-table';
import api from '../../services/api'
import { Modal} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import { useForm } from 'react-hook-form'
//import { useHistory } from "react-router-dom"

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
        field: 'name_user',
        title: 'Nome',
        width: 300,
        editable: true,
    },
    {
        field: 'email_user',
        title: 'Email',
        width: 300,
        editable: true,
    },
    {
        field: 'type_user',
        title: 'Tipo',
        width: 150,
        editable: true,
    },
];
const Users = () => {
    const styles = useStyles();
   const [data, setData] = useState([]) 
     //MODAL INSERIR
  const [modalInsertar, setmodalInsertar] = useState(false);
  //MODAL EDITAR
  const [modalEditar, setmodalEditar] = useState(false);
    //PEGA DAOS DO INPUT
 const [userSelect, setUserSelect] = useState({
     name_user:"",
     email_user:"",
     password_user:"",
     type_user:""
  })
    
  const handlechange = e=>{
      const { name, value} =e.target;
      setUserSelect(prevState=>({
          ...prevState,
          [name]:value    
      }));
      console.log(userSelect);
  }
   //LISTAR DADOS API USUARIO
/*    useEffect(() => {
        async function loaduser() {
            const response = await api.get("/api/user");
            setData(response.data)
        }
        loaduser();
    }, [])
*/
const getUser = async()=>{
    await api.get("/api/user")
    .then(response =>{
        setData(response.data)
    })
}

useEffect(() =>{
    getUser();
},[])

    //CRIAR USUARIOS
  const postUser = async()=>{
      await api.post("/api/user", userSelect)
      .then(response=>{
          setData(data.concat(response.data));
      })
  }

      //EDITAR USUARIOS
      const patchUser = async()=>{
        await api.patch("/api/user/:user_id" ,userSelect)
        .then(response=>{
            var newData= data;
            newData.map(User=>{
                if(User.id===userSelect.id){
                    User.name_user=userSelect.name_user;
                    User.email_user=userSelect.email_user;
                    User.password_user=userSelect.password_user;
                    User.type_user=userSelect.type_user
                }
                console.log(newData)
            });
            setData(newData);
            modalAbrirFeicharEditar();
        }).catch(error=>{
            console.log(error);
        })
    }

  //EDITAR USUARIO
  const selectUserEdit= (name_user, caso)=>{
      setUserSelect(name_user);
      (caso==="Editar")&&modalAbrirFeicharEditar()
  }

//MODAL INSERIR
    const modalAbrirFeicharInsertar = () => {
        setmodalInsertar(!modalInsertar);
    }

    //MODAL EDITAR
    const modalAbrirFeicharEditar = () => {
        setmodalEditar(!modalEditar);
    }

    //FORMULARIO MODAL CADASTRAR
    const bodyInsertar = (
        <div className={styles.modal}>
            <h3>Adicionar novo usuario</h3>
            <div className="modal__Container">

                <form >

                    <div className="form__grup">
                        <label htmlFor="name_user">Usuario*</label>
                        <input type="text" id="nomeUser"  name="name_user" required  onChange={handlechange}/>
                       
                    </div>

                    <div className="form__grup">
                        <label htmlFor="email_user">Email*</label>
                        <input type="email" id="emailUser"  name="email_user" required onChange={handlechange}/>
                        
                    </div>

                    <div className="form__grup">
                        <label htmlFor="password_user">Senha*</label>
                        <input type="password" id="passwordUsuario"  name="password_user" required onChange={handlechange}/>
                        
                    </div>

                    <div className="form__grup">
                        <label htmlFor="type_user">Tipo*:</label>
                        <select id="typeUser" name="type_user" onChange={handlechange} >
                            <option value={1}>Usuario</option>
                            <option value={2}>Adm</option>
                        </select>
                        
                    </div>

                    <div className="buttoon_modal">
                        <button className="button_exit " onClick={() => modalAbrirFeicharInsertar()} >Cancelar</button>
                        <button type="submit" className="button_salvar "onClick={() => postUser()}>Salvar</button>
                    </div>
                </form>

            </div>

        </div>

    )

     //FORMULARIO MODAL EDITAR
     const bodyEditar = (
        <div className={styles.modal}>
            <h3>Editar usuario</h3>
            <div className="modal__Container">

                <form >

                    <div className="form__grup">
                        <label htmlFor="name_user">Usuario*</label>
                        <input type="text" id="nomeUser"  name="name_user" 
                        required  onChange={handlechange} value={userSelect&&userSelect.name_user}/>
                       
                    </div>

                    <div className="form__grup">
                        <label htmlFor="email_user">Email*</label>
                        <input type="email" id="emailUser"  name="email_user" 
                        required onChange={handlechange} value={userSelect&&userSelect.email_user}/>
                        
                    </div>

                    <div className="form__grup">
                        <label htmlFor="password_user">Senha*</label>
                        <input type="password" id="passwordUsuario"  name="password_user" 
                        required onChange={handlechange} value={userSelect&&userSelect.password_user}/>
                        
                    </div>

                    <div className="form__grup">
                        <label htmlFor="type_user">Tipo*:</label>
                        <select id="typeUser" name="type_user" 
                        onChange={handlechange} value={userSelect&&userSelect.type_user} >
                            <option value={1}>Usuario</option>
                            <option value={2}>Adm</option>
                        </select>
                        
                    </div>

                    <div className="buttoon_modal">
                        <button className="button_exit " onClick={() => modalAbrirFeicharEditar()} >Cancelar</button>
                        <button type="submit" className="button_salvar" onClick={()=>patchUser()}>Editar</button>
                    </div>
                </form>

            </div>

        </div>

    )

    return (

        <main>
            <div className="__container">
                <div className="produto__container">                 

                    {/*BOTTON NOVO*/}
                    <div className="btn_novo">
                        <button onClick={() => modalAbrirFeicharInsertar()} className=" card_button_novo">
                            <a className="card_icon"><i className=" fa fa-plus"></i> </a> Novo
                        </button>
                    </div>

                    {/*TABELA*/}
                    <div>
                        <MaterialTable
                            title="Usuarios"
                            columns={columns}
                            data={data}
                            actions={[
                                {
                                    icon: "edit",
                                    tooltip: "editar Usuario",
                                    onClick: (event, rowData) =>selectUserEdit(rowData, "Editar")
                                },
                                {
                                    icon: "delete",
                                    tooltip: "Deletar Usurio",
                                    onClick: (event, rowData) => window.confirm("deseja Deleatar o usuario:" + rowData.name_user + "?")
                                }
                            ]}
                            options={{
                                addRowPosition: "first",
                                actionsColumnIndex: -1,
                                search: false,
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

                    </div>

                </div>
            </div>
        </main>
    )
}

export default Users
