import { Model, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize'


export interface SkusModel extends Model<InferAttributes<SkusModel>, InferCreationAttributes<SkusModel>> {
  id: CreationOptional<number>;
  size: string;
  quantity: number;
  styles_id: number;
}