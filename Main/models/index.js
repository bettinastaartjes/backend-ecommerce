// import models
const Product = require('./product-seeds');
const Category = require('./category-seeds');
const Tag = require('./tag-seeds');
const ProductTag = require('./product-tag-seeds');


//first sync the database then call teh function

// ** Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// ** Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// ** Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// (( Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
};
