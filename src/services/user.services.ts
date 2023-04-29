import addModule from '../models/user.modules';

export const createUser = async (
  username: string,
  vocation: string,
  level: number,
  password: string,
) => {
  const newProductId = await addModule(username, vocation, level, password);
  return newProductId;
};

export default createUser;