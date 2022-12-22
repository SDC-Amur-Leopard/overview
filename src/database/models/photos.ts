import { Model, CreationOptional, InferAttributes, InferCreationAttributes, DataTypes} from 'sequelize'
import { sequelize } from '../database'
import { Styles } from './styles'

export interface PhotosModel extends Model<InferAttributes<PhotosModel>, InferCreationAttributes<PhotosModel>> {
  id: CreationOptional<number>;
  url: string,
  thumbnail_url: string,
  styles_id: number
}

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