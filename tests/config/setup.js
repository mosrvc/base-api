const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = async () => {
    console.log('\n==== Setup Test ====\n\n')

    await createDB()
    await migrate()
    await seed()

    console.log('\n==== Setup Test Done ====\n\n')
}

const createDB = async () => {
    const { stdout, stderr } = await exec('sequelize db:create')
    console.log('stdout:', stdout)
    console.log('stderr:', stderr)
}

const migrate = async () => {
    const { stdout, stderr } = await exec('sequelize db:migrate')
    console.log('stdout:', stdout)
    console.log('stderr:', stderr)
}

const seed = async () => {
    const { stdout, stderr } = await exec('sequelize db:seed:all')
    console.log('stdout:', stdout)
    console.log('stderr:', stderr)
}