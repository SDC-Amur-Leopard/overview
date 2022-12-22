import { sequelize } from '../database/database'


export default function getProducts(page = 1, count = 5) {
  const end_id = count  * page
  const start_id = (end_id - count) + 1
  const queryString = `SELECT id, name, slogan, description, category, default_price FROM products WHERE id >= ${start_id} AND id <= ${end_id}`
  return sequelize.query(queryString)
    .then((results) => console.log(results[0]))
}
