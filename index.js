const express = require('express')
const bodyParser = require('body-parser')
const models = require('./models')
const app = express()
const Op = require('sequelize')


app.get('/teams', async (request, response) => {
  const teams = await models.teams.findAll()
  response.send(teams)
})

app.get('/teams/:id', async (request, response) => {
  const { id } = request.params.id

  const matchingTeam = await models.teams.findAll({
    where: {
      [Op.or]: [{ id: id }, { abbreviation: id.toUpperCase() }]
    }
  })

  if (matchingTeam.length) {
    response.send(matchingTeam)
  } else {
    response.sendStatus(418)
  }
})

app.post('/teams', bodyParser.json(), async (request, response) => {
  const { id, location, mascot, abbreviation, conference, division } = request.body

  if (!id || !location || !mascot || !abbreviation || !conference || !division) {
    response.status(400).send('The following attributes are required: id, location, mascot, abbreviation, conference, division')
  } else {

    const newTeam = await models.teams.create({
      id, location, mascot, abbreviation, conference, division
    })
    response.status(201).send(newTeam)
  }
})

app.all('*', (request, response) => {
  response.sendStatus(404)
})

const server = app.listen(8080, () => { console.log('Listening on port 8080...') })

module.exports = server