const express = require('express');
const UsuerControllers = require('./controllers/UsuerControllers');
const ProductController = require('./controllers/ProductController');
const ClientController = require ('./controllers/ClientController')

const routes = express.Router();

//USUARIO
routes.post('/api/user', UsuerControllers.createUser);
routes.get('/api/user', UsuerControllers.getUsers);
routes.get('/api/user/:user_id', UsuerControllers.getUserByid);

//PRODUTO
routes.post('/api/product', ProductController.createProduct);
routes.patch('/api/product/:product_id', ProductController.updateProduct);
routes.delete('/api/product/:product_id', ProductController.deleteProduct);

routes.get('/api/product', ProductController.getProducts);
routes.get('/api/product/:product_id', ProductController.getProductByid);

//CLIENTE
routes.post('/api/client', ClientController.createClient);
routes.patch('/api/client/:client_id', ClientController.updateClient);
routes.delete('/api/client/:client_id', ClientController.deleteClient);

routes.get('/api/client', ClientController.getClients )
routes.get('/api/client/:client_id', ClientController.getClienttByid);



module.exports = routes;