import React, {useState} from 'react'
import "./client.css"
import Modal from '../../components/modal/Modal';
import { useForm } from 'react-hook-form'

const Client = () => {
    //MODAL
    const [isModalVisible, setIsModalVisible] = useState(false);

    //formulario

    const { register, handleSubmit, formState: { errors } } = useForm()

    const addClient = data => console.log(data)

    return (
    <main>
        <div className="__container">
            <h1>Cliente</h1>

     <button onClick={()=> setIsModalVisible(true)} className=" card_button_novo">
         <a className="card_icon" href="/Client"><i className=" fa fa-plus"></i> </a> Novo Cliente 
    </button>

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
        </div>
    </main>
    )
}

export default Client
