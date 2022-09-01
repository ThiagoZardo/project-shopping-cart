import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import Categories from './categories.model';

class Products extends Model {
  id?: number;
  productName?: string;
  description?: string;
  image?: string;
  category?: number;
  price?: number;
  quantity?: number;
}

Products.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: STRING,
  },
  description: {
    type: STRING,
  },
  image: {
    type: STRING,
  },
  category: {
    type: INTEGER,
  },
  price: {
    type: INTEGER,
  },
  quantity: {
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'products',
  underscored: true,
  timestamps: false,
});

Categories.belongsTo(Products, { foreignKey: 'category' });
Products.hasMany(Categories, { foreignKey: 'category' });

export default Products;
