import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../db';

export enum Platform {
  INSTAGRAM = 'instagram',
  YOUTUBE = 'youtube',
  TWITTER = 'twitter'
}

interface SocialMediaAccountAttributes {
  id: number;
  platform: Platform;
  username: string;
  encryptedAuth: string;
  userId: number;
  createdAt?: Date;
}

interface SocialMediaAccountCreationAttributes extends Optional<SocialMediaAccountAttributes, 'id' | 'createdAt'> {}

class SocialMediaAccount extends Model<SocialMediaAccountAttributes, SocialMediaAccountCreationAttributes> implements SocialMediaAccountAttributes {
  public id!: number;
  public platform!: Platform;
  public username!: string;
  public encryptedAuth!: string;
  public userId!: number;
  public createdAt!: Date;
}

SocialMediaAccount.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  platform: { type: DataTypes.ENUM(...Object.values(Platform)), allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false },
  encryptedAuth: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
  sequelize,
  modelName: 'social_media_account'
});

export default SocialMediaAccount;
