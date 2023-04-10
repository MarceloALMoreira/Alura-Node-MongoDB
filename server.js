import 'dotenv/config';

import app from './src/app.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});



// Trata erros no aplicativo
process.on('uncaughtException', err => {
  console.log('Erro não tratado: ', err.message);
  process.exit(1);
});


// Trata erros na conexão com o banco de dados
process.on('unhandledRejection', err => {
  console.log('Erro na conexão com o banco de dados: ', err.message);
  process.exit(1);
});
