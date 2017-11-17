module.exports = (sequelize, DataTypes) => {
  const Barcode = sequelize.define('codebar', {
    barcode: {
      field: 'codebar',
      primaryKey: true,
      type: DataTypes.STRING,
      references:{
        model: 'Product',
        key: 'codebar'
      }
    },
    description: {
      field: 'descp',
      type: DataTypes.STRING
    }
  },{
    tableName: 'codebar',
    timestamps: false
  })

  Barcode.modelName = "Barcode"


  return Barcode
}
