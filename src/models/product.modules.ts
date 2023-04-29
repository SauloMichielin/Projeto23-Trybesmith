import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export const addModule = async (name: string, amount: string) => {
  const [insert] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId } = insert;
  return { id: insertId, name, amount };
};

export const a = 'a';

// export const findAll = async () => {
//   const [result] = await connection.execute(
//     'SELECT * FROM Trybesmith.products',
//   );
//   return result;
// };

// export const findById = async (productId: number) => {
//   const [[product]] = await connection.execute(
//     'SELECT * FROM Trybesmith.products WHERE id = ?',
//     [productId],
//   );
//   return product; 
// };