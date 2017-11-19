module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('articulos', {
        sku: {
            field: 'sku',
            primaryKey: true,
            type: DataTypes.STRING(15)
        },
        description:{
            field: 'item',
            type: DataTypes.STRING(45),
            allowNull: false, 
            defaultValue: ''
        },
        line: {
            type: DataTypes.STRING(20),
            allowNull: false, 
            defaultValue: ''
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false, 
            defaultValue: 0.0
        },
        offerPrice: {
            field: 'ofrprc',
            type: DataTypes.DOUBLE,
            allowNull: false, 
            defaultValue: 0.0
        },
        startDate: {
            field: 'ofrini',
            type: DataTypes.DATE,
            allowNull: false, 
            defaultValue: '2001-01-01'
        },
        endDate: {
            field: 'ofrter',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '2001-01-01'
        }
    },{
        tableName: 'articulos',
        timestamps: false
    })

    Product.modelName = "Product"

    return Product
}
