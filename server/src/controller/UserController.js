const Knex = require('../database/connection');
const generateUniqueId = require('../utils/genereteUniqueId');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto')
const saltRounds = 10;
const mailer = require('../modules/mailer')
const authConfig = require('../config/auth.json')

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400, // UM DIA
  });
}


module.exports = {



  //Listar Usuario
  async index(request, response, next) {
    try {
      const user = await Knex('user').select
        ('name', 'email');


      return response.json(user)
    } catch (error) {
      next(error)
    }
  },



  //CRIAR USER

  async create(request, response, next) {
    try {


      const { name, surname, email, password } = request.body;

      const emailUser = await Knex('user').where('email', email).first();

      if (emailUser) {
        return response.status(400).json({ message: 'Email ja existe.' });
      }

      const surnameUser = await Knex('user').where('surname', surname).first();

      if (surnameUser) {
        return response.status(400).json({ message: 'Surname ja existe.' });
      }

      //criptografar a senha no banco
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        const password = hash

        const user = await Knex('user')
          .insert({ name, surname, email, password })
        return response.json({
          user: {
            name,
            surname,
            email,
          },
          token: generateToken({ id: user.id })
        })


      });

    } catch (error) {
      next(error) //mostrao erro no servidor
    }

  },

  //ATUALIZAR DADOS

  async update(request, response, next) {
    try {
      const { name, surname, email } = request.body;
      const { id } = request.params;

      await Knex('user')
        .update({ name, surname, email, password })
        .where({ id })


      return response.status(201).send({ message: 'Alterado com sucesso!' })

    } catch (error) {
      next(error)
    }

  },
  //DELETAR 

  async delete(request, response, next) {

    const token = request.headers.authorization;
    try {
      const { id } = request.params;

      await Knex('user')
        .where({ id: id })
        .del()


      if (token !== user.id) {
        return response.status(401).json({ error: 'Operation not permitted.' })
      }
      return response.status(201).send({ message: 'Deletado com sucesso!' })

    } catch (error) {
      next(error)
    }

  },

  //AUTENTICAÇÃO


  async index(require, response, next) {
    try {

      const { email, password } = require.body;

      const user = await Knex('user')
        .where('email', email)
        .first()

      if (!user)
        return response.status(400).send({ error: 'Usuario não existe!!' });

      if (!await bcrypt.compare(password, user.password))
        return response.status(400).send({ error: 'Senha Inválida' });

      user.password = undefined;




      response.send({
        user,
        token: generateToken({ id: user.id }),
      });
    } catch (error) {
      next(error)
    }
  },


  /*
    //Senha esquecida//
    async create(require, response) {
      const { email } = require.body;
  
      try {
  
  
        const user = await Knex('user')
          .where('email', email)
          .first()
  
        if (!user)
          return response.status(400).send({ error: 'Email não existe!!' });
  
        const token = crypto.randomBytes().toString('hex');
  
        const now = new Date();
        now.setHours(now.getHours() + 2); //tempo de expiração do  token 2hs
  
        await Knex('user').update('id');
        (user.id, {
          '$set': {
            passwordResetToken: token,
            passwordResetExpires: now,
          }
        });
  
        mailer.sendMail({
          to: email,
          from: 'sdavi28@hotmail.com',
          subject: "Recupere sua senha",
          text: 'Use o código para recuperar '
            + 'a sua senha use o este código: ' + token + '. Este código expira em :' + now + ' horas',
  
        },
  
  
  
          (err) => {
            if (err)
              return response.status(400).send({ error: 'Cannot send forgot password email' })
  
            return response.send();
          })
  
      } catch (error) {
        next(error);
  
        return response.status(400).send({ error: 'Error ao recuperar a senha' });
  
      }
  
    },
  */
  /*
 
   // Mudar Senha/
   async create(require, response, next) {
     const { email, token, password } = require.body;
 
     try {
 
       const user = await knex('user').where('email', email)
         .select('passwordResetToken passwordResetExpires');
 
       if (!user)
         return response.status(400).send({ error: 'User não existe!!' });
 
       if (token !== user.passwordResetToken)
 
         return response.status(400).send({ error: 'Token Invalid' });
 
       const now = new Date();
 
       if (now > user.passwordResetExpires)
         return response.status(400).send({ error: 'Token expired, generate ' });
 
       user.password = password;
 
       await knex('user').insert({ user });
 
       response.send('ok');
 
 
     } catch (error) {
       next(error)
     }
     
   },*/
}







