const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const PointsControllers = require('./controller/PointsController');
const UserControllers = require('./controller/UserController');
const ProdutoPointsController = require('./controller/ProdutoPointsController');
const ItemsControllers = require('./controller/ItemsController');
const { celebrate, Joi } = require('celebrate');

const routes = express.Router();

const upload = multer(multerConfig);



routes.get('/items', ItemsControllers.index)

//ROTAS DE PONTOS

routes.post('/points', upload.single('image')
  , celebrate({
    body: Joi.object().keys({
      name: Joi.string().required('obrigatório').max(30),
      email: Joi.string().required().lowercase(),
      whatsapp: Joi.number().required(),
      departament: Joi.string().required().max(30),
      salesmn: Joi.string().required().max(30),
      longitude: Joi.number().required(),
      latitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().max(2),
      items: Joi.string().required()
    })
  }, {
    abortEarly: false
  }), PointsControllers.create)

routes.get('/points', PointsControllers.index)
routes.get('/points/:id', PointsControllers.show)

routes.post('/produto', upload.single('image'),
  ProdutoPointsController.create)



routes.get('/produto', ProdutoPointsController.index)



//ROTAS USUARIOS
routes.post('/user', UserControllers.create)
routes.get('/users', UserControllers.show)
routes.put('/users/:id', UserControllers.update)
routes.delete('/users/:id', UserControllers.delete)

routes.post('/authenticate', UserControllers.index)
routes.post('/user/auth', UserControllers.update)
routes.post('/forgot_password', UserControllers.update)





module.exports = routes;   