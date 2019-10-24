const express = require('express')
const teams = require('./teams.json')

const app = express()

app.get('/teams/:id', (request, response) => {
    const id = request.params.id

    const matchingTeam = teams.filter((team) => {
        return team.id === Number(id) || team.abbreviation === id
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

app.all('*', (request, response) => {
    response.sendStatus(404)
})

const server = app.listen(8080, () => { console.log('Listening on port 8080...') })

module.exports = server