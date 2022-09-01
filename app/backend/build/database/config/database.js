"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
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
};
module.exports = config;
//# sourceMappingURL=database.js.map