'use strict'

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('teams', [
      {
        location: 'Buffalo',
        mascot: 'Bills',
        abbreviation: 'BUF',
        conference: 'AFC',
        division: 'East'
      },
      {
        location: 'Miami',
        mascot: 'Dolphins',
        abbreviation: 'MIA',
        conference: 'AFC',
        division: 'East'
      },
      {
        location: 'New England',
        mascot: 'Patriots',
        abbreviation: 'NE',
        conference: 'AFC',
        division: 'East'
      },
      {
        location: 'New York',
        mascot: 'Jets',
        abbreviation: 'NYJ',
        conference: 'AFC',
        division: 'East'
      },
      {
        location: 'Baltimore',
        mascot: 'Ravens',
        abbreviation: 'BAL',
        conference: 'AFC',
        division: 'North'
      },
      {
        location: 'Cincinnati',
        mascot: 'Bengals',
        abbreviation: 'CIN',
        conference: 'AFC',
        division: 'North'
      },
      {
        location: 'Cleveland',
        mascot: 'Browns',
        abbreviation: 'CLE',
        conference: 'AFC',
        division: 'North'
      },
      {
        location: 'Pittsburgh',
        mascot: 'Steelers',
        abbreviation: 'PIT',
        conference: 'AFC',
        division: 'North'
      },
      {
        location: 'Houston',
        mascot: 'Texans',
        abbreviation: 'HOU',
        conference: 'AFC',
        division: 'South'
      },
      {
        location: 'Indianapolis',
        mascot: 'Colts',
        abbreviation: 'IND',
        conference: 'AFC',
        division: 'North'
      },
      {
        location: 'Jacksonville',
        mascot: 'Jaguars',
        abbreviation: 'JAX',
        conference: 'AFC',
        division: 'North'
      },
      {
        location: 'Tennessee',
        mascot: 'Titans',
        abbreviation: 'TEN',
        conference: 'AFC',
        division: 'North'
      },
      {
        location: 'Denver',
        mascot: 'Broncos',
        abbreviation: 'DEN',
        conference: 'AFC',
        division: 'West'
      },
      {
        location: 'Kansas City',
        mascot: 'Chiefs',
        abbreviation: 'KC',
        conference: 'AFC',
        division: 'West'
      },
      {
        location: 'Los Angeles',
        mascot: 'Chargers',
        abbreviation: 'LAC',
        conference: 'AFC',
        division: 'West'
      },
      {
        location: 'Oakland',
        mascot: 'Raiders',
        abbreviation: 'OAK',
        conference: 'AFC',
        division: 'West'
      },
      {
        location: 'Dallas',
        mascot: 'Cowboys',
        abbreviation: 'DAL',
        conference: 'NFC',
        division: 'East'
      },
      {
        location: 'New York',
        mascot: 'Giants',
        abbreviation: 'NYG',
        conference: 'NFC',
        division: 'East'
      },
      {
        location: 'Philadelphia',
        mascot: 'Eagles',
        abbreviation: 'PHI',
        conference: 'NFC',
        division: 'East'
      },
      {
        location: 'Washington',
        mascot: 'Redskins',
        abbreviation: 'WSH',
        conference: 'NFC',
        division: 'East'
      },
      {
        location: 'Chicago',
        mascot: 'Bears',
        abbreviation: 'CHI',
        conference: 'NFC',
        division: 'North'
      },
      {
        location: 'Detriot',
        mascot: 'Lions',
        abbreviation: 'DET',
        conference: 'NFC',
        division: 'North'
      },
      {
        location: 'Green Bay',
        mascot: 'Packers',
        abbreviation: 'GB',
        conference: 'NFC',
        division: 'North'
      },
      {
        location: 'Minnesota',
        mascot: 'Vikings',
        abbreviation: 'MIN',
        conference: 'NFC',
        division: 'North'
      },
      {
        location: 'Atlanta',
        mascot: 'Falcons',
        abbreviation: 'ATL',
        conference: 'NFC',
        division: 'South'
      },
      {
        location: 'Carolina',
        mascot: 'Panthers',
        abbreviation: 'CAR',
        conference: 'NFC',
        division: 'South'
      },
      {
        location: 'New Orleans',
        mascot: 'Saints',
        abbreviation: 'NO',
        conference: 'NFC',
        division: 'South'
      },
      {
        location: 'Tampa Bay',
        mascot: 'Buccaneers',
        abbreviation: 'TB',
        conference: 'NFC',
        division: 'South'
      },
      {
        location: 'Arizona',
        mascot: 'Cardinals',
        abbreviation: 'ARI',
        conference: 'NFC',
        division: 'West'
      },
      {
        location: 'Los Angeles',
        mascot: 'Rams',
        abbreviation: 'LAR',
        conference: 'NFC',
        division: 'West'
      },
      {
        location: 'San Francisco',
        mascot: '49ers',
        abbreviation: 'SF',
        conference: 'NFC',
        division: 'West'
      },
      {
        location: 'Seattle',
        mascot: 'Seahawks',
        abbreviation: 'SEA',
        conference: 'NFC',
        division: 'West'
      }])

  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
   
      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('teams', null, {})
  }
}
