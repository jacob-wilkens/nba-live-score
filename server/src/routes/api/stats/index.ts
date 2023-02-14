import { Router } from 'express';

import standingsRouter from '@routes/api/stats/standings';

const router = Router();

router.use('/standings', standingsRouter);

export default router;
