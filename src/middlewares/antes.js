// import mongoose from 'mongoose';
// // eslint-disable-next-line no-unused-vars
// const manipuladorErrors = (erro, req, res, next) => {
//     if (erro instanceof mongoose.Error.CastError) {
//         res.status(400).json({ message: 'Um ou mais dados fornecidos estão Incorretos.' });
//     }
//     //Tratando os erros
//     else if (erro instanceof mongoose.Error.ValidationError) {
//         const mensagensErro = Object.values(erro.errors)
//             .map(erro => erro.message)
//             .join('; ');
//         // Tratando o erro com personalização para o front end
//         res.status(400).send({ message: `Os seguintes erros foram encontrados: ${mensagensErro}` });
//     } else {
//         return res.status(500).json({ message: 'Erro interno de Servidor' });
//     }
// };

// export default manipuladorErrors; import mongoose from 'mongoose';
// // eslint-disable-next-line no-unused-vars
// const manipuladorErrors = (erro, req, res, next) => {
//     if (erro instanceof mongoose.Error.CastError) {
//         res.status(400).json({ message: 'Um ou mais dados fornecidos estão Incorretos.' });
//     }
//     //Tratando os erros
//     else if (erro instanceof mongoose.Error.ValidationError) {
//         const mensagensErro = Object.values(erro.errors)
//             .map(erro => erro.message)
//             .join('; ');
//         // Tratando o erro com personalização para o front end
//         res.status(400).send({ message: `Os seguintes erros foram encontrados: ${mensagensErro}` });
//     } else {
//         return res.status(500).json({ message: 'Erro interno de Servidor' });
//     }
// };

// export default manipuladorErrors; import mongoose from 'mongoose';
// // eslint-disable-next-line no-unused-vars
// const manipuladorErrors = (erro, req, res, next) => {
//     if (erro instanceof mongoose.Error.CastError) {
//         res.status(400).json({ message: 'Um ou mais dados fornecidos estão Incorretos.' });
//     }
//     //Tratando os erros
//     else if (erro instanceof mongoose.Error.ValidationError) {
//         const mensagensErro = Object.values(erro.errors)
//             .map(erro => erro.message)
//             .join('; ');
//         // Tratando o erro com personalização para o front end
//         res.status(400).send({ message: `Os seguintes erros foram encontrados: ${mensagensErro}` });
//     } else {
//         return res.status(500).json({ message: 'Erro interno de Servidor' });
//     }
// };

// export default manipuladorErrors;