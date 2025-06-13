import { Sequelize } from 'sequelize';

const dbUrl = process.env.DATABASE_URL || 'postgres://root:password@localhost:5432/sapdb';

const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
  logging: false,
  define: {
    underscored: true,
    freezeTableName: true,
    timestamps: true
  }
});

export default sequelize;
