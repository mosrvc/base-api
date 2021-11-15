const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = async () => {
    console.log('\n==== Teardown Test ====\n\n')
    await migrateUndo();
    await dropDB();
    console.log('\n==== Teardown Test Done ====\n\n')
}

const migrateUndo = async () => {
    const { stdout, stderr } = await exec('sequelize db:migrate:undo:all')
    console.log('stdout:', stdout)
    console.log('stderr:', stderr)
}

const dropDB = async () => {
    const { stdout, stderr } = await exec('sequelize db:drop')
    console.log('stdout:', stdout)
    console.log('stderr:', stderr)
}
