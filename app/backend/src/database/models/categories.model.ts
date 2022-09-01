import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class Categories extends Model {
  id?: number;
  nameCategory?: string;
}

Categories.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameCategory: {
    type: STRING,
  },
}, {
  sequelize: db,
  modelName: 'categories',
  underscored: true,
  timestamps: false,
});

export default Categories;
