module.exports = (sequelize, DataTypes) => {
  const PriceHolder = sequelize.define('articulo', {
    description: {
      field: 'descrip',
      type: DataTypes.STRING
    },
    barcode: {
      field: 'codigo',
      type: DataTypes.STRING
    },
    price: {
      field: 'precio',
      type: DataTypes.DOUBLE
    },
    quantity: {
      field: 'cantidad',
      type: DataTypes.INTEGER
    }
  },{
    tableName: 'portaprecio',
    timestamps: false
  })

  PriceHolder.modelName = "PriceHolder"
  PriceHolder.removeAttribute('id')

  return PriceHolder
}
