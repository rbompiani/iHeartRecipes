
// Model for the Users Table
module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            len: {
                args: [1, 100]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            len: {
                args: [1, 50]
            }
        },
        first: {
            type: DataTypes.STRING,
            allowNull: false,
            len: {
                args: [1,50]
            }
        },
        last: {
            type: DataTypes.STRING,
            allowNull: false,
            len: {
                args: [1,50]
            }
        },
        joined: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    });
    return Users;
}


