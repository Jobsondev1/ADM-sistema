import React, {useState, useEffect} from 'react'
import "./user.css"
import Modal from '../../components/modal/Modal';
import TableUser from './TableUser';


const Users = () => {

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
          <TableUser/>
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

export default Users
