import { Request, Response } from 'express';
import { createProduct, listaService } from '../services/products.services';

export const addProducts = async (req: Request, res: Response) => {
  const { name, amount } = req.body;  
  const resultado = await createProduct(name, amount);
  // if (type) return res.status(400).json(message);
  res.status(201).json(resultado);
};

export const listaProdutos = async (_req: Request, res: Response) => {
  const lista = await listaService();
  res.status(200).json(lista);
};