import { Model, CreationOptional, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize'
import { sequelize } from '../database'
import { Products } from './product'


interface FeaturesModel extends Model<InferAttributes<FeaturesModel>, InferCreationAttributes<FeaturesModel>> {
  id: CreationOptional<number>;
  feature: string,
  value: string | null,
  products_id: number,
}

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