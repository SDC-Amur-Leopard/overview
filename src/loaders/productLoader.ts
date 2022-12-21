import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import * as fs from 'fs'
import readline from 'readline'
import path from 'path'

dotenv.config()


async function processLineByLine(fileName: string) {
  const filePath = path.join(__dirname, '/test_data/', fileName)
  const fileStream = fs.createReadStream(filePath)

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    if (line === 'id,name,slogan,description,category,default_price') {
      continue
    }
    let [
      product_id,
      name,
      slogan,
      description,
      category,
      default_price
    ] = line.split(/(?!\B"[^"]*),(?![^"]*"\B)/)
    name = name.replaceAll(/^"?|"?$/g, '' )
    slogan = slogan.replaceAll(/^"?|"?$/g, '' )
    description = description.replaceAll(/^"?|"?$/g, '' )
    category = category.replaceAll(/^"?|"?$/g, '' )
  }
}

processLineByLine('product1.csv')

const user = process.env.PSQL_USER
const password = process.env.PSQL_PASS

if (user && password) {

  const sequelize = new Sequelize(user, password, {
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




