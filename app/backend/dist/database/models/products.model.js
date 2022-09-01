"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const categories_model_1 = __importDefault(require("./categories.model"));
class Products extends sequelize_1.Model {
}
Products.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    productName: {
        type: sequelize_1.STRING,
    },
    description: {
        type: sequelize_1.STRING,
    },
    image: {
        type: sequelize_1.STRING,
    },
    category: {
        type: sequelize_1.INTEGER,
    },
    price: {
        type: sequelize_1.INTEGER,
    },
    quantity: {
        type: sequelize_1.INTEGER,
    },
}, {
    sequelize: _1.default,
    modelName: 'products',
    underscored: true,
    timestamps: false,
});
categories_model_1.default.belongsTo(Products, { foreignKey: 'category' });
Products.hasMany(categories_model_1.default, { foreignKey: 'category' });
exports.default = Products;
