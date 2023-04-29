import { addModule } from '../models/product.modules';

export const createProduct = async (name: string, amount: string) => {
  const newProductId = await addModule(name, amount);
  return newProductId;
};

export const a = 'a';