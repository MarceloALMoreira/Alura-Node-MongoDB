import express from 'express';
import AutorController from '../controllers/autoresController.js';
import paginar from '../middlewares/paginar.js';

const router = express.Router();

router.get('/autores', AutorController.getAutores, paginar);
router.get('/autores/:id', AutorController.getAutoresId);
router.post('/autores', AutorController.createAutores);
router.put('/autores/:id', AutorController.updateAutores);
router.delete('/autores/:id', AutorController.deleteAutores);

export default router;