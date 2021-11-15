const { User } = require('../models')

const store = (data) => {
  return User.create(data)
}

const update = (data, where) => {
  return User.update(data, { where: where })
}

const findAndCountAll = (params) => {
  const options = {}
  const order = []

  if (params) {
    const page = params.page
    const perPage = params.perPage

    if (page && perPage) {
      options.limit = perPage
      options.offset = (page - 1) * perPage
    }

    if (!params.order)
      order.push(['id', 'ASC'])

    options.order = order

  }

  return User.findAndCountAll(
    options,
  )
}

const findOne = params => {
  const options = {}

  if (params) {
    const where = {}
    if (params.email) {
      where.email = params.email
    }
    if (params.username) {
      where.username = params.username
    }
    if (params.password) {
      where.password = params.password
    }
    if (params.uuid) {
      where.uuid = params.uuid
    }
    options.where = where
  }

  return User.findOne(options)
}

module.exports = {
  store,
  update,
  findAndCountAll,
  findOne,
}