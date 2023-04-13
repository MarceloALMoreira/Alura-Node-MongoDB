import NaoEncontrado from '../erros/NaoEncontrado.js';
import { autores, livros } from '../models/index.js';

class LivroController {

  static getLivros = async (req, res, next) => {
    try {

      const buscaLivros = livros.find();

      req.resultado = buscaLivros;

      next();
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
      const busca = await processaBusca(req.query);

      if (busca !== null) {

        const livroResultadoEditora = livros.find(busca).populate('autor'); //aplicando o metedo populate para que o mongose se encarregue de popular minha tabela na hoda da busca.

        req.resultado = livroResultadoEditora;

        next();

      } else {
        res.status(200).send([]);
        // { message: 'O autor que voce Passou não Existe' }
      }
    } catch (error) {
      next(error);
    }
  };
}

// criando uma função que nos devolvedo livros por filtros -- Buscando de forma dinâmica
async function processaBusca(parametros) {

  const { editora, titulo, minPages, maxPages, nomeAutor } = parametros;


  let busca = {};

  if (editora) busca.editora = editora;

  // Aplicando uma regex para buscar o lirvo apenas com as primeiras letras do livro, ou que contêm palavras que o livro de ter

  // { $regex: titulo, $options: 'i' } operadores de busca do mongoDB

  //livros/busca?editora=Alura&titulo=alguma coisa
  if (titulo) busca.titulo = { $regex: titulo, $options: 'i' };


  if (minPages || maxPages) busca.pagina = {};

  //gte = Greater than or Equal = Maior ou igual que
  if (minPages) busca.pagina.$gte = minPages;

  //lte = less than or Equal = Menor ou igual que
  if (maxPages) busca.pagina.$lte = maxPages;

  if (nomeAutor) {
    const autor = await autores.findOne({ nome: nomeAutor });


    if (autor !== null) {
      busca.autor = autor._id;
    } else {
      busca = null;
    }

  }

  return busca;
}

export default LivroController;

