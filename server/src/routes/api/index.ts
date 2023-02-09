import { Router } from 'express';

import liveRouter from '@routes/api/live';

const router = Router();

router.use('/live', liveRouter);

export default router;
