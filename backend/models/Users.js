module.exports = (sequelize, DataTypes) => {
    
    const Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    Users.associate = (models) => {
        Users.hasMany(models.Posts, {
            onDelete: "cascade",
        });
    }

    return Users;
};