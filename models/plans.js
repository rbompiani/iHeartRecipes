// Model for the Plans Table
module.exports = function(sequelize, DataTypes) {
    const Plans = sequelize.define('Plans', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        day: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        recipeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
               model: 'Recipes',
                key: 'id'
            }
        }
    });
    return Plans;
}
