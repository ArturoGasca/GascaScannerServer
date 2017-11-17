
module.exports = (sequelize, DataTypes) => {
  const ListDetail = sequelize.define('detlista', {
  barcode: {
    field: 'cdbar',
    type: DataTypes.STRING,
    unique: 'compositeIndex'
  },
  key: {
    field: 'llave',
    type: DataTypes.STRING,
    unique: 'compositeIndex',
    references: {
      model: 'List',
      key: 'llave'
    }
  },
	description:{
	  field: 'descp',
      type: DataTypes.STRING
	},
	price: {
	  field: 'preci',
      type: DataTypes.DOUBLE
	},
	quantity: {
	  field: 'cntpn',
      type: DataTypes.INTEGER
	},
	existences:{
	  field: 'exstn',
      type: DataTypes.INTEGER
	}
  },{
    tableName: 'detlista',
    timestamps: false
  })

  ListDetail.modelName = "ListDetail"
  ListDetail.removeAttribute('id')
  return ListDetail
}
