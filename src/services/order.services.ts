import searchModule from '../models/order.modules';

export const orderService = async () => {
  const newId = await searchModule();
  return newId;
};

export default orderService;