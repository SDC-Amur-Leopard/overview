import { Model, CreationOptional, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize'
import { sequelize } from '../database'
import { Products } from './product'

interface StylesModel extends Model<InferAttributes<StylesModel>, InferCreationAttributes<StylesModel>> {
  id: CreationOptional<number>;
  name: string;
  sale_price: string;
  original_price: string;
  default_style: boolean;
  products_id: number;
}

export const Styles = sequelize.define<StylesModel>('styles', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  sale_price: {
    type: DataTypes.STRING
  },
  original_price: {
    type: DataTypes.STRING
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