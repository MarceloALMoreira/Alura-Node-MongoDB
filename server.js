import app from './src/app.js'

// const http = require("http")

const port = process.env.PORT || 3000


// Criando um Objeto simples

// const rotas = {
//     '/': 'Curso de Node',
//     '/livros': 'Listra de Livros',
//     '/autores': 'autores dos Livros',
//     '/editora': 'pag de editora de Node',
//     '/sobre': 'Info:  sobre o projeto'
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content': 'text/plain' })
//     res.end(rotas[req.url])
// })

// server.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`)
// })

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

