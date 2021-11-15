const userRepository = require('../../repositories/user_repository')
const UserResource = require('../resources/user_resource')
const Paginator = require('../resources/paginator')

const index = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1
  const perPage = parseInt(req.query.per_page) || 25

  const { rows, count } = await userRepository.findAndCountAll({
    page,
    perPage
  })

  res.send(UserResource.collection(new Paginator({
    data: rows,
    page,
    perPage,
    total: count,
  })))
}

const show = (req, res, next) => {
  const id = req.params.id
  res.send({
    data: {
      id: id
    }
  })
}

const create = (req, res, next) => {
  res.send(req.body)
}

const update = (req, res, next) => {
  res.send(req.body)
}

const destroy = (req, res, next) => {
  res.send(req.body)
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}