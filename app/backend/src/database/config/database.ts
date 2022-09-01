import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: 'root',
  password: '123456',
  database: 'SHOPPING_CART',
  host: 'localhost',
  port: 3002,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;