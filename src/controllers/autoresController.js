import NaoEncontrado from '../erros/NaoEncontrado.js';
import autores from '../models/Autor.js';

class AutorController {

  static getAutores = async (req, res, next) => {
    try {
      const autoresResultado = await autores.find();
      return res.status(200).json(autoresResultado);
    } catch (error) {
      next(error);
    }
  };

  static getAutoresId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autorIdResultado = await autores.findById(id);


      if (autorIdResultado !== null) {
        return res.status(200).send(autorIdResultado);
      } else {
        next(new NaoEncontrado('Id do Autor Não Encontrado'));
      }
    } catch (error) {
      next(error);
    }
  };

  static createAutores = async (req, res, next) => {
    const autor = new autores(req.body);
    try {
      const autorResultado = await autor.save();
      return res.status(201).json(autorResultado);

    } catch (error) {
      next(error);
    }
  };

  static updateAutores = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, { $set: req.body });

      return res.status(200).json({ message: 'Autor atualizado com sucesso' });
    } catch (error) {
      next(error);
    }
  };

  static deleteAutores = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      return res.status(200).send({ message: 'Autor Removido com sucesso!' });
    } catch (error) {
      next(error);
    }
  };

}
export default AutorController;