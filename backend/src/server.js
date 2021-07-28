require("dotenv").config();

const express = require ('express');
const cookieParse = require ('cookie-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const connectToDatabase = require("./database");
const routes = require("./routes");
const { appendFile } = require("fs");

connectToDatabase();
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());

app.use(morgan('dev'))
app.use(cookieParse());

app.use(express.json());

app.use(routes);

app.listen(port,function(){
    console.log(`Sevidor rodando na porta ${port}`)
})
