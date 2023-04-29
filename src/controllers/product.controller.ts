import { Request, Response } from 'express';
import { createProduct } from '../services/products.services';

const addProducts = async (req: Request, res: Response) => {
  const { name, amount } = req.body;  
  const asd = await createProduct(name, amount);
  // if (type) return res.status(400).json(message);
  // if (type) return res.status(errorMap.mapError[{ type }]).json(message);
  res.status(201).json(asd);
};

export default addProducts;