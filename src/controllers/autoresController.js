import mongoose from 'mongoose';
import autores from '../models/Autor.js';

class AutorController {

  static getAutores = async (req, res) => {
    try {
      const autoresResultado = await autores.find();
      return res.status(200).json(autoresResultado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  };

  static getAutoresId = async (req, res) => {
    try {
      const id = req.params.id;

      const autorIdResultado = await autores.findById(id);

      
      if (autorIdResultado !== null) {
        return res.status(200).send(autorIdResultado);
      } else {
        return res.status(404).send({ message: "Id do Autor não localizado." });
      }
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "Um ou mais dados fornecidos estão Incorretos."})
      } else {
        return res.status(500).send({ message: "Erro interno de Servidor" });
      }
    }
  };

  static createAutores = async (req, res) => {
    const autor = new autores(req.body);
    try {
      const autorResultado = await autor.save();
      return res.status(201).json(autorResultado);

    } catch (error) {
      return res.status(500).json(error.message)
    }
  };

  static updateAutores = async (req, res) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, { $set: req.body })

      return res.status(200).json({ message: "Autor atualizado com sucesso" });
    } catch (error) {
      return res.status(500).json(error.message)
    }
  };

  static deleteAutores = async (req, res) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      return res.status(200).send({ message: `Autor Removido com sucesso!` })
    } catch (error) {
      return res.status(500).send({ message: 'Erro no Sistema ao deletar usuario' })
    }
  };

}
export default AutorController;