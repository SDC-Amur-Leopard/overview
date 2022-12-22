import { Model, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize'


export interface ProductModel extends Model<InferAttributes<ProductModel>, InferCreationAttributes<ProductModel>> {
  id: CreationOptional<number>;
  name: string;
  slogan: string;
  description: string;
  category: string;
  default_price: number;
}
