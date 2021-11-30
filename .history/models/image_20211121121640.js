'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  Image.init({
    imageable_type:{
      type:DataTypes.STRING(30),
      allowNull: false
    },
    imageable_id: 
    {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    image_type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    title: {
      type:DataTypes.STRING(30),
      allowNull: false
    },
    src: {
      type:DataTypes.STRING(30),
      allowNull: false,
      get() {
        const imageUrl = this.getDataValue('src');
        return process.env.BASE_URL + '/' + imageUrl;
      }
    },
    mime_type: {
      type:DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};