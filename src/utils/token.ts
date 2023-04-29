import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'SauloFoda';

export const geradorToken = (data: string) => jwt.sign(data, secret);

export const authToken = (token: string) => {
  if (!token) return { type: 'UNAUTHORIZED', message: 'Token not found' };
  const decoded = jwt.verify(token, secret);  
  return { type: null, message: decoded };
};

export const decoded = (token: string) => jwt.decode(token);