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

const show = async (req, res, next) => {
  const id = req.params.id
  const data  = await userRepository.findOne({
    uuid : id
  })
  if(!data){
    res.sendStatus(404)
  }
  res.send(new UserResource(data).exec())
}

const create = async (req, res, next) => {
  const user = await userRepository.store(req.body)
  res.send(new UserResource(user).exec())
}

const update = async (req, res, next) => {
  const id = req.params.id
  const data  = await userRepository.findOne({
    uuid : id
  })
  if(!data){
    res.sendStatus(404)
  }
  await userRepository.update(req.body, {uuid : id})
  res.send(new UserResource(req.body).exec())
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