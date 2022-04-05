const BaseResource = require('./base_resource')

class UserResource extends BaseResource {
  toArray () {
    return this.transformDefault({
      id: this.uuid,
      username: this.username,
      email: this.email,
      name: this.name,
      phone: this.phone,
      activation_code: this.activation_code,
    })
  }
}

module.exports = UserResource

