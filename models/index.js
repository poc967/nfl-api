const Sequelize = require('sequelize')
const teamsModel = require('./teams')
const allConfigs = require('../config/sequelize')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const { host, database, username, password, dialect } = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

const teams = teamsModel(connection, Sequelize)

module.exports = {
  teams
}