import musicController from '../controllers/musicController.js';
import express from 'express';

const router = express.Router();

router.get('/', musicController.getAllMusics);

router.get('/:id', musicController.getMusicById);

router.post('', musicController.createMusic);

router.put('/:id', musicController.updateMusic);

router.delete('/:id', musicController.deleteMusic);

export default router;
