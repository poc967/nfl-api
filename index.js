const express = require('express')
const teams = require('./teams.json')
const bodyParser = require('body-parser')

const app = express()

app.get('/teams/:id', (request, response) => {
  const id = request.params.id

  const matchingTeam = teams.filter((team) => {
    return team.id === Number(id) || team.abbreviation === id.toUpperCase()
  })

  if (matchingTeam.length) {
    response.send(matchingTeam)
  } else {
    response.sendStatus(418)
  }
})

app.get('/teams', (request, response) => {
  response.send(teams)
})

app.post('/teams', bodyParser.json(), (request, response) => {
  const { id, location, mascot, abbreviation, conference, division } = request.body

  if (!id || !location || !mascot || !abbreviation || !conference || !division) {
    response.status(400).send('The following attributes are required: id, location, mascot, abbreviation, conference, division')
  } else {
    const newTeam = { id, location, mascot, abbreviation, conference, division }
    teams.push(newTeam)
    response.status(201).send(newTeam)
  }
})

app.all('*', (request, response) => {
  response.sendStatus(404)
})

const server = app.listen(8080, () => { console.log('Listening on port 8080...') })

module.exports = server