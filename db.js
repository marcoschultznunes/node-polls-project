const {Sequelize} = require('sequelize')
const env = require('./env')

// Make an env.js file with the following attributes db (schema name), user (db user), password (db)
const sequelize = new Sequelize(env.db, env.user, env.password, {
    dialect: "mysql",
    host: "localhost",
})

module.exports = sequelize
