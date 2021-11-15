class Paginator {
  constructor (params) {
    return {
      data: params.data,
      meta: {
        count: params.data ? params.data.length : 0,
        total: params.total ? params.total : 0,
        page: params.page,
        per_page: params.perPage,
      },
    }
  }
}

module.exports = Paginator