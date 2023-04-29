import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const searchModule = async () => {
  const [filtro] = await connection.execute<ResultSetHeader>(
    `SELECT orders.id, JSON_ARRAYAGG(products.id) AS productsIds,
    orders.user_id AS userId FROM Trybesmith.orders INNER JOIN Trybesmith.products
    ON orders.id = products.order_id GROUP BY orders.id`,
  );
  return filtro;
};

export default searchModule;