import * as store from '../store';
import express, { Request, Response } from 'express';
import { Cart, CartItem } from '../models';

export const cartRouter = express.Router();

// set initial cart state
const cart: Cart = {
  userId: 1,
  totalQty: 0,
  totalPrice: 0,
  items: [],
};
const catalog: CartItem[] = store.Store;

// GET cart
cartRouter.get('/', (req: Request, res: Response) => {
  try {
    res.status(200).send(cart);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// POST item
cartRouter.post('/', (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const qty = req.body.qty;
    const index = cart.items.findIndex((obj) => obj.id === id);

    index > -1
      ? (() => {
          cart.items[index].qty += qty;
        })()
      : (() => {
          const matched: CartItem = catalog.filter((obj) => obj.id === id)[0];
          const product: CartItem = {
            id,
            name: matched.name,
            price: matched.price,
            qty,
          };
          cart.items.push(product);
        })();

    res.status(201).send(cart);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
