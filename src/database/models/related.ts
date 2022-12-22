import { Model,  CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize'


export interface RelatedModel extends Model<InferAttributes<RelatedModel>, InferCreationAttributes<RelatedModel>> {
  id: CreationOptional<number>;
  current_product_id: number,
  related_product_id: number
}
