const Client = require ('../models/clientModels')

const ClientController = {
    //CRIAR CLIENTE
    async createClient(req, res){
    
        const bodyData = req.body
    
        try{
            
            const newClient =  await Client.create(bodyData)
            return res.status(200).json(newClient)
    
        } catch(err){
    
            return res.status(400).json(err)
       }
    },

     // EDITAR CLIENTE
     async updateClient(req, res){

        const bodyData = req.body
        const {client_id} = req.params
    
        try{
    
            const updatatedClient = await Client.findByIdAndUpdate(client_id, bodyData, {new: true}) 
            return res.status(200).json(updatatedClient)

        } catch(err){

            return res.status(400).json(err)
        }
    },

      // DELETAR CLIENTE
      async deleteClient(req, res){

        const {client_id} = req.params
    
        try{
            const deletedClient = await Client.findByIdAndDelete(client_id) 
            return res.status(200).json(deletedClient)
            
        } catch(err){

            return res.status(400).json(err)
        }
    },

    //lISTAR CLIENTE
async getClients(req, res){

    try{
      
        const client = await Client.find()
        return res.status(200).json(client)

    }catch(err){

        return res.status(400).json(err)
    }
 },
 
//LISTAR CLIENTE POR ID
 async getClienttByid(req, res){

    const {client_id} = req.params
try{      
    const clients = await Client.findById(client_id)
    return res.status(200).json(clients)

}catch(err){

    return res.status(400).json(err)
    }
},

}

module.exports = ClientController;