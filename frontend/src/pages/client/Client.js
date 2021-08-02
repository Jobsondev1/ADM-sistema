import React, {useState, useEffect} from 'react'
import "./client.css"
import Modal from '../../components/modal/Modal';

import { useForm } from 'react-hook-form'

import api from '../../services/api'
import Search from '../../components/search/Search';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

const Client = () => {
    const classes = useStyles();

    //MODAL
    const [isModalVisible, setIsModalVisible] = useState(false);

    //formulario

    const { register, handleSubmit, formState: { errors } } = useForm()

    const addClient = data => console.log(data)

    //LISTAR DADOS API CLIENTE
    const [clientes, setClientes] = useState([]);

    useEffect(() =>{
      async function loadClientes(){
        const response = await api.get("/api/client");
        console.log(response.data)
        setClientes(response.data)
      }
      loadClientes();
    }, [])


    return (
    <main>
<div className="__container">
            <h1>Cliente</h1>

    <div className="btn_novo">
    <button onClick={()=> setIsModalVisible(true)} className=" card_button_novo">
         <a className="card_icon"><i className=" fa fa-plus"></i> </a> Novo
    </button>
    </div>

    {isModalVisible ?
     <Modal onClose={()=> setIsModalVisible(false)}>

     

     <div className="title_form_modal">
        <h1>Cadastro do Cliente </h1>
      </div>

    <div className="modal__form" >
        
    <form onSubmit={handleSubmit(addClient)}>

    <div className="form__grups" >
        <label htmlFor="nome">Nome*</label>
        <input type="text" name="nome" {...register("nome")} />
        <p className="error-message">{errors.title?.message}</p>
    </div>

    <div className="form__grups" >
        <label htmlFor="address">Endereço*</label>
        <input type="text" name="address" {...register("address")} />
        <p className="error-message">{errors.description?.message}</p>
    </div>

    <div className="form__grups" >
        <label htmlFor="telephone">Telefone*</label>
        <input type="text" name="telephone" {...register("telephone")} />
        <p className="error-message">{errors.content?.message}</p>
    </div>

    <div className="form__grups" >
        <label htmlFor="descipton">descrição</label>
        <textarea type="text" name="descripton" {...register("descripton")} ></textarea>
        <p className="error-message">{errors.content?.message}</p>
    </div>

    <div className="form__button__salvar" >
        <button type="submit" >Salvar</button>
    </div>

    </form>

    </div>
      </Modal> : null
      }
    {/* TABELA DE CLIENTES*/}
    
        <div className="tabela" style={{ height: 400, width: '100%', marginTop:100 }}>
        <TableContainer component={Paper}>
        <Search />
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Telefone</TableCell>
            <TableCell align="center">Endereço</TableCell>
            <TableCell align="center">Data de Cadastro</TableCell>
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.clientName}
              </TableCell>
              <TableCell align="center">{row.clientTelephone}</TableCell>
              <TableCell align="center">{row.clientAddress}</TableCell>
              <TableCell align="center">{row.createdAt}</TableCell>
              <TableCell align="center">Botoes</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
        </div>
</div>
</main>
    )
}

export default Client
