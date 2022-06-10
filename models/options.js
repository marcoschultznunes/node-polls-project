const { Sequelize } = require('sequelize');
const db = require('../db')

const Option = db.define('option', {
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
        allowNull: false,
        defaultValue: 0
    },
    
    // And the poll id
});

module.exports = Option
