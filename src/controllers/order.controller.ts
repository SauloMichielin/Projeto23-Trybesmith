import { Request, Response } from 'express';
import orderServices from '../services/order.services';

const orderSearch = async (_req: Request, res: Response) => {
  const busca = await orderServices();
  res.status(200).json(busca);
};

export default orderSearch;