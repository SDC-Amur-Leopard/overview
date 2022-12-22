import { Model, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize'


export interface PhotosModel extends Model<InferAttributes<PhotosModel>, InferCreationAttributes<PhotosModel>> {
  id: CreationOptional<number>;
  url: string,
  thumbnail_url: string,
  styles_id: number
}
