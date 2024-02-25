import express from 'express';
import { getChampion, getChampions, createChampions, updateChampions, deleteChampions } from '../controllers/ChampionsController.js';

const router = express.Router();

router.get('/', getChampions )
router.get('/:id', getChampion )
router.post('/', createChampions )
router.put('/:id', updateChampions )
router.delete('/:id', deleteChampions )

export default router;