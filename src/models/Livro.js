import mongoose from 'mongoose';



const livroSchema = new mongoose.Schema(

  {
    id: { type: String },
    titulo: { type: String, required: [true, 'O titulo do Livro é obrigatório'] },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'autores',
      required: [true, 'O(a) Autor(a) é obrigatório'],
      autopopulate: { select: 'nome' }
    },
    editora: {
      type: String, required: [true, 'A editora é obrigatória'],
      enum: {
        values: ['Casa do Código', 'Alura', 'Dev club'], //colocando quais editora deve ser aceita na tabela
        message: 'A editora {VALUE} não é um valor Permitido.'
      }
    },
    pagina: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 500;
        },
        message: 'O numero de Páginas deve estar entre 10 e 500. Valor Forneceido: {VALUE}'
      }
    }
  }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;