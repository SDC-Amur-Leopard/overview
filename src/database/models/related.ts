import { Model, CreationOptional, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize'
import { sequelize } from '../database'
import { Products } from './product'

export interface RelatedModel extends Model<InferAttributes<RelatedModel>, InferCreationAttributes<RelatedModel>> {
  id: CreationOptional<number>;
  current_product_id: number,
  related_product_id: number
}

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
