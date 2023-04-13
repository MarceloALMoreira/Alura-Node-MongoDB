import NaoEncontrado from '../erros/NaoEncontrado.js';
import { livros } from '../models/index.js';

class LivroController {

  static getLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livros.find().populate('autor').exec();
      return res.status(200).json(livrosResultado);
    } catch (error) {
      next(error);
    }
  };

  static getLivrosId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livrosResultado = await livros.findById(id).populate('autor', 'nome').exec();
      if (livrosResultado !== null) {
        return res.status(200).json(livrosResultado);
      } else {
        next(new NaoEncontrado('Id do livro não localizado.'));
      }

    } catch (error) {
      next(error);
    }
  };

  static createLivros = async (req, res, next) => {
    let livro = new livros(req.body);
    try {
      const livrosResultado = await livro.save();
      res.status(201).send(livrosResultado);

    } catch (error) {
      next(error);
    }
  };

  static updateLivros = async (req, res, next) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, { $set: req.body });
      if (livros !== null) {
        res.status(200).send({ message: 'Livro Atualizado com Sucesso!' });
      } else {
        next(new NaoEncontrado('Id do livro não localizado.'));
      }
    } catch (error) {
      next(error);
    }
  };

  static deleteLivros = async (req, res, next) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      if (livros !== null) {
        res.status(200).send({ message: 'Livro removido com Sucesso!' });
      } else {
        next(new NaoEncontrado('Id do livro não localizado.'));
      }
    } catch (error) {
      next(error);
    }
  };


  // Buscando por titulo do livro e por editora
  static getLivroFiltro = async (req, res, next) => {
    try {
      const { editora, titulo } = req.query;

      const busca = {};

      if (editora) busca.editora = editora;

      if (titulo) busca.titulo = titulo;

      const livroResultadoEditora = await livros.find(busca);

      return res.status(200).json(livroResultadoEditora);
    } catch (error) {
      next(error);
    }
  };
}
export default LivroController;