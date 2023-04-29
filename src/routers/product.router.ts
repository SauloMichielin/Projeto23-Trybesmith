import express from 'express';
import addProducts from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.post(
  '/',
  addProducts,
);

export default productRouter;