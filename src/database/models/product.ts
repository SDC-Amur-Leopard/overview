import { Model, CreationOptional, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize'
import { sequelize } from '../database'
interface ProductModel extends Model<InferAttributes<ProductModel>, InferCreationAttributes<ProductModel>> {
  id: CreationOptional<number>;
  name: string;
  slogan: string;
  description: string;
  category: string;
  default_price: string;
}

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
    type: DataTypes.STRING
  },
}
)