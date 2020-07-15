const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

//Upload de ARQUIVOS //
module.exports = {
  storage: multer.diskStorage({
    destination:
      path.resolve(__dirname, '..', '..', 'uploads'),
    filename(request, file, callback) {
      const hash = crypto.randomBytes(2).toString('hex');

      const filename = `${file.originalname}-${hash}`;

      callback(null, filename);
    }
  })
}