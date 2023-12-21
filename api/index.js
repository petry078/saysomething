const express = require('express')
const { PrismaClient } = require('@prisma/client')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const app = express()
const prisma = new PrismaClient()
const PORT = 3000
let something = 'something'

//json parse
app.use(express.json())

// REGISTER
app.post('/register', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.send({ message: 'all fields required' })
    return
  }

  const newSalt = salt()

  const user = await prisma.usuario.create({
    data: {
      username: req.body.username,
      hash: criptHashPassword(req.body.password, newSalt),
      salt: newSalt,
    },
  })

  const jwt = generateJwt(user)

  res.json({ token: jwt })
})

// LOGIN
app.post('/login', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.send({ message: 'all fields required' })
    return
  }

  const user = await prisma.usuario.findUnique({
    where: {
      username: req.body.username,
    },
  })

  const isPasswordValid = validPassword(req.body.password, user)

  if (!user || !isPasswordValid) {
    res.status(401).json({
      message: 'Usuario ou senha incorreto',
    })
  }

  res.json({ token: generateJwt(user) })
})

//get findALl
app.get('/', async (req, res) => {
  const notes = await prisma.note.findMany()
  return res.json(notes)
})

//get byId
// app.get('/:id', async (req, res) => {
//   const id = req.params.id
//   const noted = await prisma.note.findUnique({
//     where: {
//       id: Number(id),
//     },
//   })
//   return res.json(noted)
// })

//post
app.post('/', async (req, res) => {
  const newNoted = await prisma.note.create({
    data: {
      noted: req.body.noted,
    },
  })

  return res.json(newNoted)
})

// put
app.put('/:id', async (req, res) => {
  const id = req.params.id
  const noted = req.body.noted

  const updatedNote = await prisma.note.update({
    where: {
      id: Number(id),
    },
    data: {
      noted: noted,
    },
  })

  return res.json(updatedNote)
})

// delete
app.delete('/:id', async (req, res) => {
  const id = req.params.id

  await prisma.note.delete({
    where: { id: Number(id) },
  })

  res.json(`Note ${id} deleted.`)
})

//npm start log
app.listen(PORT, () => {
  console.log(`port ${PORT}`)
})

function criptHashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 1000, 512, 'sha512').toString('hex')
}

function salt() {
  return crypto.randomBytes(16).toString('hex')
}

function validPassword(password, user) {
  const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 512, 'sha512').toString('hex')
  console.log('hash', hash)
  return user.hash === hash
}

function generateJwt(user) {
  const expiry = new Date()
  expiry.setDate(expiry.getDate() + 360)

  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      exp: parseInt(expiry.getTime() / 1000),
    },
    'UMA_SENHA_SECRETA'
  )
}
