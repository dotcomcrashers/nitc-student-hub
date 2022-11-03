module.exports = (sequelize, DataTypes) => {
    
    const LastKnown = sequelize.define("LastKnown", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        time: {
            type: DataTypes.DATE,
            allowNull: true,
        },

    });

    return LastKnown;
};