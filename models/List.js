
module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define('pplisthead', {
        code: {
            type: DataTypes.STRING(12),
            primaryKey: true
        },
        type: {
            field: 'lsttp',
            type: DataTypes.STRING(5),
            allowNull: false, 
            defaultValue: ''
        },
        name: {
            field: 'lstnm',
            type: DataTypes.STRING(80),
            allowNull: false, 
            defaultValue: ''
        }
    },{
        tableName: 'pplisthead',
        timestamps: true,
        createdAt: 'lstdt',
        updatedAt: false,
    })

    List.modelName = "List"
    
	List.associate = function(models) {
		List.hasMany(models.ListDetail, {
		  as: 'details',
		  foreignKey: 'code'
		});
  }


  return List
}
