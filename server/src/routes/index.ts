import { Router } from 'express';

import apiRouter from '@routes/api';

const router = Router();

router.use('/api', apiRouter);

export default router;
