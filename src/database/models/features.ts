import { Model,  CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize'


export interface FeaturesModel extends Model<InferAttributes<FeaturesModel>, InferCreationAttributes<FeaturesModel>> {
  id: CreationOptional<number>;
  feature: string,
  value: string,
  product_id: number,
}