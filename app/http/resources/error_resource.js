const Resource = require('resources.js')

class ErrorResource extends Resource {
  toArray () {
    return {
      message: this.message,
    }
  }
}

module.exports = ErrorResource

