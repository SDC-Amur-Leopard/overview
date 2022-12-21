import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const user = process.env.PSQL_USER
const password = process.env.PSQL_PASS

if (user && password) {
  const sequelize = new Sequelize('sdc-test', user, password, {
    host: 'localhost',
    dialect: 'postgres'
  })
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((error)=> {
    console.error('Unable to connect to the database:', error)
  })

}



