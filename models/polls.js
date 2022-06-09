const { Sequelize } = require('sequelize');
const db = require('../db')

const Option = require('./options')

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

Option.belongsTo(Poll, {constraints: true, onDelete: 'CASCADE'})
Poll.hasMany(Option)

module.exports = Poll
