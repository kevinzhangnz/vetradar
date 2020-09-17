import express from 'express';
import { cartRouter } from './routes';

// default port to listen
const port = 3000;
const app = express();

app.use(express.json());

// Configure routes
app.use('/api/cart', cartRouter);

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});