import { Router } from 'express'; 
import { getMovieById, getMovies } from '../controllers/movie.controller.js';

const router=Router();

router.get('/movies',getMovies);
router.get('/:id',getMovieById);

export default router;