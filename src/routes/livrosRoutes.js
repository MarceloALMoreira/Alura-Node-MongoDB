import express from 'express';
import LivroController from '../controllers/livrosController.js';
import paginar from '../middlewares/paginar.js';



const router = express.Router();

router.get('/livros', LivroController.getLivros, paginar);
router.get('/livros/busca', LivroController.getLivroFiltro, paginar);
router.get('/livros/:id', LivroController.getLivrosId);
router.post('/livros', LivroController.createLivros);
router.put('/livros/:id', LivroController.updateLivros);
router.delete('/livros/:id', LivroController.deleteLivros);

export default router;