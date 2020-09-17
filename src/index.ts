import express from 'express';

// default port to listen
const port = 3000;
const app = express();

app.use(express.json());

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});