const { Sequelize } = require('sequelize/types');
const db = require('../db')

const Option = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    votes: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    // And the poll id
});

module.exports = Option
