module.exports = (sequelize, DataTypes) => {
    
    const Price = sequelize.define("Price", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    });

    return Price;
};