const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name_user:{
        type: String,
        required:true
    },
    email_user:{
        type: String,
        required: true,
    },
  password_user:{
        type: String,
        required: true,
    },
     type_user:{
        type: Number, 
        default:1
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
});

UserSchema.pre("save", async function (next) {
    // criptografa a senha antes de salvar no bd
    if (!this.isModified("password_user")) {
      // se pass não foi modificado
      return next();
    }

    this.password_user = await bcrypt.hashSync(this.password_user, 4);
    next();
});

// cria um method comparar a senha informada pelo usuario com a senha cryptografada do bd
UserSchema.methods = {
    compareHash(password_user) {
      return bcrypt.compare(password_user, this.password_user);
    },
  };

  module.exports = mongoose.model("User", UserSchema);
