const Resource = require('resources.js')

const lodashMerge = require('lodash/merge')

class BaseResource extends Resource {
  transformDefault (obj) {
    return lodashMerge(obj, {
      created_at: this.created_at,
      updated_at: this.updated_at,
      deleted_at: this.deleted_at,
    })
  }
}

module.exports = BaseResource

