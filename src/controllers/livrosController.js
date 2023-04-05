import livros from '../models/Livro.js';

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
      return res.status(200).json(livrosResultado);
    } catch (error) {
      next(error);
    }
  };

  static createLivros = async (req, res, next) => {
    try {
      let livro = new livros(req.body);
      const livrosResultado = await livro.save();
      return res.status(201).send(livrosResultado.toJSON);
    } catch (error) {
      next(error);
    }
  };

  static updateLivros = async (req, res, next) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: 'Livro Atualizado com Sucesso!' });
    } catch (error) {
      next(error);
    }
  };

  static deleteLivros = async (req, res, next) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      return res.status(200).send({ message: 'Livro removido com Sucesso!' });
    } catch (error) {
      next(error);
    }
  };

  static getLivroEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora;
      const livroResultadoEditora = await livros.find({ 'editora ': editora });
      return res.status(200).json(livroResultadoEditora);
    } catch (error) {
      next(error);
    }
  };
}
export default LivroController;