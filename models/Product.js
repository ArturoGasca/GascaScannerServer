module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('articulo', {
    barcode: {
      field: 'codebar',
      primaryKey: true,
      type: DataTypes.STRING
    },
    price: {
      field: 'precio',
      type: DataTypes.DOUBLE
    }
  },{
    tableName: 'articulos',
    timestamps: false
  })

  Item.modelName = "Product"
  Item.associate = function(models) {
		Item.hasOne(models.Barcode, {
		  as: 'details',
		  foreignKey: 'barcode'
		});
  }

  return Item
}
