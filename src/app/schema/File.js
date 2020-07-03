import { Schema, model } from 'mongoose';

const fileSchema = new Schema(
  {
    descricao: {
      type: String,
      maxlength: 100,
      minlength: 20,
      required: false,
    },
    nome_original: {
      type: String,
      maxlength: 50,
      required: true,
    },
    nome_criptografado: {
      type: String,
      required: true,
    },
    extensao: {
      type: String,
      required: true,
    },
    tamanho: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('file', fileSchema);
