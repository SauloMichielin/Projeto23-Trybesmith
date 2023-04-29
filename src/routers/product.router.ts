import express from 'express';
import { addProducts, listaProdutos } from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.get(
  '/',
  listaProdutos,
);

productRouter.post(
  '/',
  addProducts,
);

export default productRouter;