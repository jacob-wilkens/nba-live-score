import { Router } from 'express';

import liveRouter from '@routes/api/live';
import statsRouter from '@routes/api/stats';

const router = Router();

router.use('/live', liveRouter);
router.use('/stats', statsRouter);

export default router;
