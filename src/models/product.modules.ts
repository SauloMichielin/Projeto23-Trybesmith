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

export const listaModulo = async () => {
  const [lista] = await connection.execute<ResultSetHeader>(
    'SELECT * FROM Trybesmith.products',
  );  
  return lista;
};