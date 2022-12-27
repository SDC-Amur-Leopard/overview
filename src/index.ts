import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import cors from 'cors'
import getProducts from './controllers/getProducts'
import getProductById from './controllers/getProductById'
import getProductStyles from './controllers/getProductStyles'
import getRelatedProducts from './controllers/getRelatedProducts'

dotenv.config()

const app: Express = express()
const port: string = process.env.PORT || '3000'

app.use(morgan('dev'))
app.use(express.json())

app.get('/products',  (req: Request, res: Response) => {
  getProducts(req, res)
})
app.get('/products/:product_id',  (req: Request, res: Response) => {
  getProductById(req, res)
})
app.get('/products/:product_id/styles',  (req: Request, res: Response) => {
  getProductStyles(req, res)
})
app.get('/products/:product_id/related',  (req: Request, res: Response) => {
  getRelatedProducts(req, res)
})


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})