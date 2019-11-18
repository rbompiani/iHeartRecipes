// Model for the recipeBox Table


module.exports = function(sequelize, DataTypes) {
    const Favorites = sequelize.define('Favorites', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        recipeID: {
            type: DataTypes.INTEGER,
            references: {
               model: 'Recipes',
                key: 'id'
            }
        }
    });
    return Favorites;
}



