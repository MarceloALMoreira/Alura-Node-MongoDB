import mongoose from 'mongoose';
import ErroBase from '../erros/ErrosBase.js';
import RequisicaoInconrreta from '../erros/RequisicaoInconrreta.js';
import Errovalidacao from '../erros/ErroValidacao.js';
// eslint-disable-next-line no-unused-vars
const manipuladorErrors = (erro, req, res, next) => {
  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoInconrreta().enviarResposta(res);
  }
  else if (erro instanceof mongoose.Error.ValidationError) {
    new Errovalidacao(erro).enviarResposta(res);
  } else if (erro instanceof ErroBase) {
    erro.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
};
export default manipuladorErrors;