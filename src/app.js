import express from 'express'


const app = express()

app.use(express.json())


const livros = [
    {
        id: 1, "title": "Lógica Progamação"
    },
    {
        id: 2, "title": "Algoritmo e Lógica"
    }
]
app.get('/', (req, res) => {
    res.status(200).send('Bem vindo a Página Inicial')
})
app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})
app.get('/livros/:id', (req, res) => {
    const index = getLivro(req.params.id)
    res.json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('Seu livro foi Cadastrado com Sucesso!')
})
app.post('/livros/:id', (req, res) => {
    const index = getLivro(req.params.id)
    livros[index].title = req.body.title
    res.json(livros)
})
app.delete('/livros/:id', (req, res) => {
    const { id } = req.params
    const index = getLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com Sucesso! `)
})

function getLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}
export default app