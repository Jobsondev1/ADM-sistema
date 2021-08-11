import React, {useState} from 'react'
import "./client.css"
import Modal from '../../components/modal/Modal';
import TableClient from './TableClient';


const Client = () => {

     //MODAL
     const [isModalVisible, setIsModalVisible] = useState(false);

return (
    <main>
     <div className="__container">
        <div className="produto__container">

    {/*Modal*/} 
    {isModalVisible ?
         <Modal onClose={()=> setIsModalVisible(false)}>
        
        </Modal> : null
    }
    
     {/*TABELA*/}
     <div>
          <TableClient />
     </div>

        {/*BOTTON NOVO*/}
            <div className="btn_novo">
                <button onClick={()=> setIsModalVisible(true)} className=" card_button_novo">
                <a className="card_icon"><i className=" fa fa-plus"></i> </a> Novo 
                </button>
            </div>

        </div>
    </div>
</main>
    )
}

export default Client
