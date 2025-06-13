import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../db';

interface BrandAttributes {
  id: number;
  name: string;
  userId: number;
  createdAt?: Date;
}

interface BrandCreationAttributes extends Optional<BrandAttributes, 'id' | 'createdAt'> {}

class Brand extends Model<BrandAttributes, BrandCreationAttributes> implements BrandAttributes {
  public id!: number;
  public name!: string;
  public userId!: number;
  public createdAt!: Date;
}

Brand.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
  sequelize,
  modelName: 'brand'
});

export default Brand;
