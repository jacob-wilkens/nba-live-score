import { config } from '@config';

import { app } from './app';

const { PORT } = config;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
