import express, { Request, Response } from 'express';
import { Cart } from '../models';

export const cartRouter = express.Router();

// set initial cart state
const cart: Cart = {
  userId: 1,
  totalQty: 0,
  totalPrice: 0,
  items: [],
};

// GET cart
cartRouter.get('/', (req: Request, res: Response) => {
  try {
    res.status(200).send(cart);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
