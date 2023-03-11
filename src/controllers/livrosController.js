import livros from '../models/Livro.js'

class LivroController {
    static getLivrosId = (req, res) => {
        const id = req.params.id
        livros.findById(id).populate('autor', 'nome').exec((err, livros) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id do Livro não encontrado` })
            } else {
                res.status(200).send(livros)
            }
        })
    }
    static getLivros = (req, res) => {
        livros.find().populate('autor').exec((err, livros) => {
            res.status(200).json(livros)
        })
    }
    static createLivros = (req, res) => {
        const livro = new livros(req.body)
        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar o Livro` })
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }
    static updateLivros = (req, res) => {
        const id = req.params.id
        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: `o Livro ${id} Foi cadastro com Sucesso!` })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
    static deleteLivros = (req, res) => {
        const id = req.params.id
        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Livro removido com Sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
}
export default LivroController