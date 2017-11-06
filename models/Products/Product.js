module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('articulo', {
    description: {
      field: 'descrip',
      type: DataTypes.STRING
    },
    barcode: {
      field: 'codigo',
      primaryKey: true,
      type: DataTypes.STRING
    },
    price: {
      field: 'precio',
      type: DataTypes.DOUBLE
    },
    offerPrice: {
      field: 'precioOfr',
      type: DataTypes.DOUBLE
    },
    startDate: {
      field: 'inicia',
      type: DataTypes.DATE
    },
    endDate: {
      field: 'vigencia',
      type: DataTypes.DATE
    },
    line: {
      field: 'linea',
      type: DataTypes.STRING
    }
  },{
    tableName: 'articulo',
    timestamps: false
  })

  Item.modelName = "Product"
  Item.odelName = process.env.DATABASE_NAME

  return Item
}
