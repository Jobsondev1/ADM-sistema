const mongoose = require("mongoose");

function connectToDatabase(){
    mongoose.connect( process.env.DATABASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }
      );

    const db = mongoose.connection;
    db.on("erro", (erro) => console.error(error));
    db.once("open", () => console.log("BANCO CONECTADO COM SUCESSO!"));
}

module.exports = connectToDatabase;