import express from 'express';
import orderSearch from '../controllers/order.controller';

const orderRouter = express.Router();

orderRouter.get(
  '/',
  orderSearch,
);

export default orderRouter;