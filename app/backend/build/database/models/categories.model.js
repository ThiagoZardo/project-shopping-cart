"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Categories extends sequelize_1.Model {
}
Categories.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nameCategory: {
        type: sequelize_1.STRING,
    },
}, {
    sequelize: _1.default,
    modelName: 'categories',
    underscored: true,
    timestamps: false,
});
exports.default = Categories;
//# sourceMappingURL=categories.model.js.map