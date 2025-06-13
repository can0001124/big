import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../db';

export enum UserRole {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  STANDARD = 'standard',
  DEMO = 'demo'
}

interface UserAttributes {
  id: number;
  email: string;
  password: string;
  role: UserRole;
  ethicalConsentGiven: boolean;
  createdAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public email!: string;
  public password!: string;
  public role!: UserRole;
  public ethicalConsentGiven!: boolean;
  public createdAt!: Date;
}

User.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM(...Object.values(UserRole)), defaultValue: UserRole.CUSTOMER },
  ethicalConsentGiven: { type: DataTypes.BOOLEAN, defaultValue: false },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
  sequelize,
  modelName: 'user'
});

export default User;
