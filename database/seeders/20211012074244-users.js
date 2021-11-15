'use strict'
const uuid = require('uuid')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        uuid: uuid.v4(),
        name: 'Roni',
      }, {
        uuid: uuid.v4(),
        name: 'Billy',
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  },
}