// Importa o módulo Express e o módulo de conexão com o banco de dados
import express from 'express';
import db from './config/dbConnect.js';

// Importa as rotas do aplicativo
import routes from './routes/index.js';

// Importa o middleware para manipular erros
import manipuladorErrors from './middlewares/manipuladorErrors.js';
import manipulador404 from './middlewares/manipulador404.js';

// Configura o evento de erro do banco de dados para que os erros sejam registrados no console
db.on('error', err => {
  console.log('Erro de Conexão: ', err.message);
});

// Configura o evento de abertura do banco de dados para imprimir uma mensagem de confirmação no console
db.once('open', () => {
  console.log('Banco OK ::::');
});

// Cria uma instância do aplicativo Express
const app = express();

// Configura o aplicativo para analisar o corpo das solicitações como JSON
app.use(express.json());

// Configura as rotas do aplicativo
routes(app);

app.use(manipulador404);

// Configura o middleware para manipular erros
app.use(manipuladorErrors);



// Exporta o aplicativo Express
export default app;
