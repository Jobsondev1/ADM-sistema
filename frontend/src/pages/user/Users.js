import React, { useState, useEffect } from 'react'
import "./user.css"
import MaterialTable from 'material-table';
import api from '../../services/api'
import { Modal, TextField, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom"

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
        width: 150,
        editable: true,
    },
];
const Users = () => {
    const styles = useStyles();


    //MODAL
    const [isModalAbrir, setIsModalAbrir] = useState(false);

    //ABRIR MODAL E RFECHAR
    const modalAbrirFeichar = () => {
        setIsModalAbrir(!isModalAbrir);
    }
    //LISTAR DADOS API PRODUTO

    const [data, setData] = useState([])
    useEffect(() => {
        async function loadProdutos() {
            const response = await api.get("/api/user");
            setData(response.data)
        }
        loadProdutos();
    }, [])

    //CRIAR USUARIOS
    let history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const addUser = data => api.post("/api/user", data)
        .then(() => {
            window.alert("Produto Cadastrado")
            history.push("/")
        })
        .catch(() => {
            window.alert("Erro ao Cadastrar")
        })


    //FORMULARIO MODAL
    const bodyInsertar = (
        <div className={styles.modal}>
            <h3>Adicionar novo usuario</h3>
            <div className="modal__Container">
                <form onSubmit={handleSubmit(addUser)} >

                    <div className="form__grup">
                        <label htmlFor="nomeUsuario">Usuario*</label>
                        <input type="text" id="nomeUsuario" name="nome_user" required {...register("name_user")}/>
                        <p className="error-message">{errors.title?.message}</p>
                    </div>

                    <div className="form__grup">
                        <label htmlFor="emailUsuario">Email*</label>
                        <input type="email" id="emailUsuario" name="email_user" required {...register("email_user")}/>
                        <p className="error-message">{errors.title?.message}</p>
                    </div>

                    <div className="form__grup">
                        <label htmlFor="passwordUsuario">Senha*</label>
                        <input type="password" id="passwordUsuario" name="password_user" required {...register("password_user")}/>
                        <p className="error-message">{errors.title?.message}</p>
                    </div>

                    <div className="form__grup">
                        <label htmlFor="tipoUser">Tipo*:</label>
                        <select id="tipoUser" name="type_User" required {...register("type_user")}>
                            <option value={1}>Aministrador</option>
                            <option value={2}>Usuario</option>
                        </select>
                        <p className="error-message">{errors.title?.message}</p>
                    </div>

                    <div className="buttoon_modal">
                        <button className="button_exit " onClick={() => modalAbrirFeichar(false)} >Cancelar</button>
                        <button className="button_salvar " >Salvar</button>
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
                        <button onClick={() => modalAbrirFeichar(true)} className=" card_button_novo">
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
                                    onClick: (event, rowData) => window.confirm("deseja editar o produto:" + rowData.name_user)
                                },
                                {
                                    icon: "delete",
                                    tooltip: "Deletar Usurio",
                                    onClick: (event, rowData) => window.confirm("deseja Deleatar o produto:" + rowData.name_user + "?")
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
                        <div className="modal_ui">
                            <Modal
                                open={isModalAbrir}
                                onClose={modalAbrirFeichar}>
                                {bodyInsertar}
                            </Modal>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    )
}

export default Users
