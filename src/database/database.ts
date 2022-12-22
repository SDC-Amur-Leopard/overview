import { Sequelize } from 'sequelize'
import dotenv  from 'dotenv'

dotenv.config()

const user = process.env.PSQL_USER as string
const password = process.env.PSQL_PASS as string

export const sequelize: Sequelize = new Sequelize('sdc-test', user, password, {
  host: 'localhost',
  dialect: 'postgres'
})



