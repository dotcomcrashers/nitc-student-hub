module.exports = (sequelize, DataTypes) => {
    
    const Posts = sequelize.define("Posts", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        image: {
            type: DataTypes.TEXT("long"),
            allowNull: true,
        },

        author_email: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Posts.associate = (models) => {
        Posts.hasOne(models.LastKnown, {
            onDelete: "cascade",
        });
    };

    Posts.associate = (models) => {
        Posts.hasOne(models.Price, {
            onDelete: "cascade",
        });
    };

    Posts.associate = (models) => {
        Posts.hasOne(models.Contact, {
            onDelete: "cascade",
        });
    };

    return Posts;
};
