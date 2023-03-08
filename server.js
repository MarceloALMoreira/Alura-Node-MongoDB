const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content': 'text/plain' })
    res.end('Primeira API com Node')
})

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})


