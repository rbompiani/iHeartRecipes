// Model for the Recipe Table
module.exports = function(sequelize, DataTypes) {

  const Recipes = sequelize.define('Recipe', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 50]      
        }
      },
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 100]      
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 20]      
        }
      }
    },
    img: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 160]      
        }
      }
    },
    yield: {
      type: DataTypes.INTEGER,
    },
    time: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 40]      
        }
      }
    },
    ingredients: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [1, 5000]      
        }
      }
    },    
    instructions: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [1, 5000]      
        }
      }
    },
    notes: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [1, 1000]      
        }
      }
    }
  });
  return Recipes;

};

  
