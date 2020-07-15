
const bcrypt = require('bcrypt')

module.exports = function generateUniqueId() {
  bcrypt.hash(10, (err, salt) => {

  })
}



