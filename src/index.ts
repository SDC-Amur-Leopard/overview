import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

import cors from 'cors'
import { request } from 'http'
import getProducts from './controllers/getProducts'

dotenv.config()

const app: Express = express()
const port: string = process.env.PORT || '3000'

app.use(express.json())

app.get('/products',  (req: Request, res: Response) => {
  const {page, count} = req.query
  if (page !== undefined) {
   if (Number.isNaN(Number(page)) ) {
     res.status(400).send('invalid parameter')
     return
   }

  }
  if (count !== undefined) {
   if (Number.isNaN(Number(count)) ) {
     res.status(400).send('invalid parameter')
     return
   }

  }
  const numberPage = Number(page) || undefined
  const numberCount = Number(count) || undefined
  getProducts(numberPage, numberCount)
  .then((results) => {
    res.status(200).send(results)
  })

})


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})