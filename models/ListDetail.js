
module.exports = (sequelize, DataTypes) => {
    const ListDetail = sequelize.define('pplistdetl', {
        sku: {
            field: 'sku',
            type: DataTypes.STRING(15),
            unique: 'compositeIndex'
        },
        code: {
            field: 'code',
            type: DataTypes.STRING(12),
            unique: 'compositeIndex',
            references: {
                model: 'List',
                key: 'code'
            }
        },
        rowNumber: {
            field: 'nrow',
            type: DataTypes.INTEGER,
            allowNull: false, 
            defaultValue: 0
        },
        description:{
            field: 'item',
            type: DataTypes.STRING(80),
            allowNull: false,
            defaultValue: ''
        },
        stock: {
            field: 'stck',
            type: DataTypes.INTEGER,
            allowNull: false, 
            defaultValue: 0
        },
        price: {
            field: 'pric',
            type: DataTypes.DOUBLE,
            allowNull: false, 
            defaultValue: 0.0
        },
        offerPrice: {
            field: 'offr',
            type: DataTypes.DOUBLE,
            allowNull: false, 
            defaultValue: 0.0
        },
        quantity: {
            field: 'cpnt',
            type: DataTypes.INTEGER,
            allowNull: false, 
            defaultValue: 1
        }
    },{
        tableName: 'pplistdetl',
        timestamps: false
    })

    ListDetail.modelName = "ListDetail"
    ListDetail.removeAttribute('id')
    return ListDetail
}
