const Product = require ('../models/productModels');

const ProductController = {
//CRIAR PRODUTO
    async createProduct(req, res){
    
        const bodyData = req.body
    
        try{
            
            const newProduct =  await Product.create(bodyData)
            return res.status(200).json(newProduct)
    
        } catch(err){
    
            return res.status(400).json(err)
       }
    },

    // EDITAR PRODUTO
    async updateProduct(req, res){

        const bodyData = req.body
        const {product_id} = req.params
    
        try{
    
            const updatatedProduct = await Product.findByIdAndUpdate(product_id, bodyData, {new: true}) 
            return res.status(200).json(updatatedProduct)

        } catch(err){

            return res.status(400).json(err)
        }
    },


    // DELETAR PRODUTO
    async deleteProduct(req, res){

        const {product_id} = req.params
    
        try{
            const deletedProduct = await Product.findByIdAndDelete(product_id) 
            return res.status(200).json(deletedProduct)
            
        } catch(err){

            return res.status(400).json(err)
        }
    },

    //PESQUISAR TODOS PRODUTO
    async getProducts(req, res){

        try{
          
            const products = await Product.find()
            return res.status(200).json(products)
    
        }catch(err){
    
            return res.status(400).json(err)
        }
     },

     //PESQUISAR PRODUTOS POR ID
    async getProductByid(req, res){

        const {product_id} = req.params
    try{      
        const products = await Product.findById(product_id)
        return res.status(200).json(products)

    }catch(err){

        return res.status(400).json(err)
    }
 },

}
    module.exports = ProductController;