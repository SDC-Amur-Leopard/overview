import { Model, CreationOptional, InferAttributes, InferCreationAttributes, DataTypes} from 'sequelize'
import { sequelize } from '../database'
import { Styles } from './styles'

 interface SkusModel extends Model<InferAttributes<SkusModel>, InferCreationAttributes<SkusModel>> {
  id: CreationOptional<number>;
  size: string;
  quantity: number;
  styles_id: number;
}

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