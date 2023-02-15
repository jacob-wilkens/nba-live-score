import { Router } from 'express';

import { getStandings } from '@controllers';
import { validate } from '@middleware';
import { StandingsParams } from '@validators/standings/get';

const router = Router();

router.get('/', validate(StandingsParams), getStandings);

export default router;
