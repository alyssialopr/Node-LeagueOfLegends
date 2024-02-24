// const express = require('express');
// const champions = require('./routes/champions');

// const router = express.Router();

// router.use('/champions', champions);

// export default router;

import express from 'express';
import Champion from './routes/champions';

const championsRouter = express.Router();

// Définissez vos routes pour les champions ici

export default championsRouter;