module.exports = (sequelize, Sequelize) => {
    const Shop = sequelize.define("shop", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Shop;
  };