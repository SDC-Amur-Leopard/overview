import { Sequelize } from 'sequelize'
import dotenv  from 'dotenv'

dotenv.config()

const user = process.env.PSQL_USER as string
const password = process.env.PSQL_PASS as string
const host = process.env.PSQL_HOST as string

export const sequelize: Sequelize = new Sequelize('sdc', user, password, {
  host: host,
  dialect: 'postgres',
  logging: false
})



