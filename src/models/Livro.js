import mongoose from 'mongoose';



const livroSchema = new mongoose.Schema(

  {
    id: { type: String },
    title: { type: String, required: [true, 'O titulo do Livro é obrigatório'] },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: [true, 'O(a) Autor(a) é obrigatório'] },
    editora: { type: String, required: [true, 'A editora é obrigatória'] },
    pagina: { type: Number }
  }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;