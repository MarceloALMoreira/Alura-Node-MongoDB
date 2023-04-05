import mongoose from 'mongoose';

// eslint-disable-next-line no-unused-vars
const manipuladorErrors = (erro, req, res, next) => {
  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: 'Um ou mais dados fornecidos estão Incorretos.' });
  } else {
    return res.status(500).json({ message: 'Erro interno de Servidor' });
  }

};

export default manipuladorErrors;