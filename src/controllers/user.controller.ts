import { Request, Response } from 'express';
import createUsers from '../services/user.services';
import { geradorToken } from '../utils/token';

const addUser = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;  
  await createUsers(username, vocation, level, password);
  // if (type) return res.status(400).json(message);
  const token = geradorToken(username);
  res.status(201).json({ token });
};

export default addUser;