import { app } from './app';

const port = app.get('port') as string;

app.listen(port, () => console.log(`listening on ${port}`));
