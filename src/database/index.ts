import { sequelize } from './database'
import { productLoader } from '../loaders/productLoader'
import { relatedLoader } from '../loaders/relatedLoader'
import { featuresLoader } from '../loaders/featuresLoader'
import { stylesLoader } from '../loaders/stylesLoader'
import { skusLoader } from '../loaders/skusLoader'
import { photosLoader } from '../loaders/photosLoader'


 sequelize.sync()
  .then(async () => {
    await productLoader('product.csv')
    await relatedLoader('related.csv')
    await featuresLoader( 'features.csv')
    await stylesLoader('styles.csv')
    await skusLoader('skus.csv')
    await photosLoader('photos.csv')

  })
  .then(() => {
    console.log('Success! All data loaded')
  })
  .catch((err)=> {
    console.log(err)
  })