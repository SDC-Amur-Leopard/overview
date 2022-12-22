import { Model, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize'


export interface StylesModel extends Model<InferAttributes<StylesModel>, InferCreationAttributes<StylesModel>> {
  id: CreationOptional<number>;
  name: string;
  sale_price: number | null;
  original_price: number;
  default_style: boolean;
  products_id: number;
}
