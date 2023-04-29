import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const addModule = async (
  username: string,
  vocation: string,
  level: number,
  password: string,
) => {
  const [insert] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const { insertId } = insert;
  return { id: insertId, username, vocation, level, password };
};

export default addModule;