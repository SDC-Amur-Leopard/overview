import { DataTypes } from 'sequelize'
import { sequelize } from './database'
import {ProductModel} from './models/product'
import {RelatedModel} from './models/related'
import {FeaturesModel} from './models/features'
import { StylesModel } from './models/styles'
import { PhotosModel } from './models/photos'
import { SkusModel } from './models/skus'
import { productLoader } from '../loaders/productLoader'
import { relatedLoader } from '../loaders/relatedLoader'
import { featuresLoader } from '../loaders/featuresLoader'
import { stylesLoader } from '../loaders/stylesLoader'
import { skusLoader } from '../loaders/skusLoader'
import { photosLoader } from '../loaders/photosLoader'

export const Products = sequelize.define<ProductModel>('products', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  slogan: {
    type: DataTypes.TEXT
  },
  description: {
    type: DataTypes.TEXT
  },
  category: {
    type: DataTypes.STRING
  },
  default_price: {
    type: DataTypes.INTEGER
  },
}
)
export const RelatedItems = sequelize.define<RelatedModel>('related_items', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  current_product_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: Products,
      key: 'id'
    }
  },
  related_product_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: Products,
      key: 'id'
    }
  }
})

export const Features = sequelize.define<FeaturesModel>('features', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  feature: {
    type: DataTypes.STRING
  },
  value: {
    type: DataTypes.STRING
  },
  products_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: Products,
      key: 'id'
    }
  }
})
export const Styles = sequelize.define<StylesModel>('styles', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  sale_price: {
    type: DataTypes.INTEGER
  },
  original_price: {
    type: DataTypes.INTEGER
  },
  default_style: {
    type: DataTypes.BOOLEAN
  },
  products_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: Products,
      key: 'id'
    }
  }
})

export const Photos = sequelize.define<PhotosModel>('photos', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true
  },
  url: {
    type: DataTypes.STRING
  },
  thumbnail_url: {
    type: DataTypes.STRING
  },
  styles_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: Styles,
      key: 'id'
    }
  }
})

export const Skus = sequelize.define<SkusModel>('skus', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true
  },
  size: {
    type: DataTypes.STRING
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  styles_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: Styles,
      key: 'id'
    }
  }
})

 sequelize.sync({force: true})
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