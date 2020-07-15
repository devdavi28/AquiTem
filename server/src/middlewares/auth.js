const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json')

module.exports = (require, response, next) => {
  const authHeader = require.headers.authorization;

  if (!authHeader)
    return response.status(401).send({ error: 'Token não informado' });

  const parts = authHeader.split(' ');

  if (!parts.length === 2)
    return response.status(401).send({ error: 'Token errado' });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return response.status(401).send({ error: 'Token mal informado!' })


  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err)
      return response.status(401).send({ error: 'Token invalido' });

    require.user.id = decoded.id;

    return next();

  })
};