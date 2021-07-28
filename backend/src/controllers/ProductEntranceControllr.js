const ProductEntrance = require('../models/productEntranceModels')

const ProductEntranceController = {
//CRIAR PRODUTO ENTRADA
async getProductEntrace(req, res){
    
    const bodyData = req.body
    const { product_id} = req.params
    try{      
        const newProduct =  await ProductEntrance.create(bodyData,)
        return res.status(200).json(newProduct)

    } catch(err){

        return res.status(400).json(err)
   }
},


}

module.exports = ProductEntranceController;