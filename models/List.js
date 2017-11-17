module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('lista', {
    key: {
      field: 'llave',
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    list: {
      field: 'lista',
      type: DataTypes.STRING
    }
  },{
    tableName: 'listas',
    timestamps: false
  })

  List.modelName = "List"


	List.associate = function(models) {
		List.hasMany(models.ListDetail, {
		  as: 'details',
		  foreignKey: 'llave'
		});
  }


  return List
}
