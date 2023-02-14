import { Router } from 'express';

import { getStandings } from '@controllers';

const router = Router();

router.get('/', getStandings);

export default router;
