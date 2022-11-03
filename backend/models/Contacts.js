module.exports = (sequelize, DataTypes) => {
    
    const Contact = sequelize.define("Contact", {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        time: {
            type: DataTypes.DATE,
        }

    });

    return Contact;
};