import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import manipuladorErrors from './middlewares/manipuladorErrors.js';

db.on('error', console.log.bind(console, 'Erro de Conexão'));
db.once('open', () => {
  console.log('Banco OK ::::');
});

const app = express();
app.use(express.json());
routes(app);

// Middlewares do Express recebe 4 paramentros

// eslint-disable-next-line no-unused-vars
app.use(manipuladorErrors);
export default app;