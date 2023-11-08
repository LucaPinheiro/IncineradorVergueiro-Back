import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /\S+@\S+\.\S+/.test(value);
      },
      message: "Email deve ser válido (ex: email@example.com)",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 8;
      },
      message: "Senha deve ter pelo menos 8 caracteres",
    },
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/.test(value);
      },
      message: "CPF deve estar no formato correto (ex: 123.456.789-01)",
    },
  },
  number: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^\(\d{2}\)9\d{4}-\d{4}$/.test(value);
      },
      message: "Celular deve estar no formato correto (ex: (11)9 6774-8079)",
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
