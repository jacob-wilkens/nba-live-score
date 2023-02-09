import { Router } from 'express';

import { getLive } from '@controllers';

const router = Router();

router.get('/', getLive);

export default router;
