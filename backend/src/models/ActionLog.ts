import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../db';

interface ActionLogAttributes {
  id: number;
  userId: number;
  command: string;
  result: string;
  status: string;
  createdAt?: Date;
}

interface ActionLogCreationAttributes extends Optional<ActionLogAttributes, 'id' | 'createdAt'> {}

class ActionLog extends Model<ActionLogAttributes, ActionLogCreationAttributes> implements ActionLogAttributes {
  public id!: number;
  public userId!: number;
  public command!: string;
  public result!: string;
  public status!: string;
  public createdAt!: Date;
}

ActionLog.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  command: { type: DataTypes.STRING, allowNull: false },
  result: { type: DataTypes.TEXT, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
  sequelize,
  modelName: 'action_log'
});

export default ActionLog;
