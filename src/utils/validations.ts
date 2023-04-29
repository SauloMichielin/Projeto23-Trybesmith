import Joi from 'joi';

const addProduct = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const validateProduct = (name: string, amount: string) => {
  const { error } = addProduct.validate({ name, amount });
  if (error) return { type: 'ERROR_422', message: '"id" must be a number' };
  return { type: null, message: '' };
};

export const a = 'a';