import React, {useState} from 'react'
import "./client.css"
import Modal from '../../components/modal/Modal';


const Client = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <client>
        <div className="__container">
            <h1>Cliente</h1>

     <button onClick={()=> setIsModalVisible(true)} className=" card_button_novo">
         <a className="card_icon" href="#"><i className=" fa fa-plus"></i> </a> Novo Cliente 
    </button>

    {isModalVisible ?
     <Modal>
      <h2>Ola modal</h2>
      <button>Salvar</button>
      </Modal> : null
      }
        </div>
    </client>
    )
}

export default Client
