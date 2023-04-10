// eslint-disable-next-line quotes
import RequisicaoInconrreta from './RequisicaoInconrreta.js';

class Errovalidacao extends RequisicaoInconrreta {
  constructor(erro){
    const mensagensErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join('; ');

    super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
  }
}
export default Errovalidacao;