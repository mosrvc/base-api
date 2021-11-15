const Sequelize = require('sequelize')

module.exports = {
    id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    uuid: {
        type: Sequelize.UUID,
        allowNull: false,
    },
}