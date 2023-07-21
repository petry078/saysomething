const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()
const PORT = 3000
let something = 'something'

//json parse
app.use(express.json())

//get findALl
app.get('/', async (req, res) => {
  const notes = await prisma.note.findMany()
  return res.json(notes)
})

//get byId
app.get('/:id', async (req, res) => {
  const id = req.params.id
  const noted = await prisma.note.findUnique({
    where: {
      id: Number(id),
    },
  })
  return res.json(noted)
})

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
