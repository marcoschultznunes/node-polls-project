const { Sequelize } = require('sequelize/types');
const db = require('../db')

const Poll = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    started: {
        type: Sequelize.DATE,
        allowNull: false
    },
    finished: {
        type: Sequelize.DATE,
        allowNull: false
    }
    
    // And a list of options
});

module.exports = Poll
