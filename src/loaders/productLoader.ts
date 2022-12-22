
import * as fs from 'fs'
import readline from 'readline'
import path from 'path'
import { Products } from '../database/index'



export async function processProducts(fileName: string) {
  const filePath = path.join(__dirname, '/csv_data/', fileName)
  const fileStream = fs.createReadStream(filePath)
  const data = []

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
    const columns = line.split(/(?!\B"[^"]*),(?![^"]*"\B)/)
    const id = Number(columns[0])
    const name = columns[1].replaceAll(/^"?|"?$/g, '' )
    const slogan = columns[2].replaceAll(/^"?|"?$/g, '' )
    const description = columns[3].replaceAll(/^"?|"?$/g, '' )
    const category = columns[4].replaceAll(/^"?|"?$/g, '' )
    const default_price = Number(columns[5])
    data.push({id, name, slogan, description, category, default_price})
  }
  const chunkSize = 100000
  for (let i = 0; i < data.length; i+= chunkSize) {
    const chunk = data.slice(i, i + chunkSize)
    await Products.bulkCreate(chunk).then((result) => console.log(result))
  }
}





