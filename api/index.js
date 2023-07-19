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
  const note = await prisma.note.findUnique({
    where: {
      id: Number(id),
    },
  })
  return res.json(note)
})

//post
app.post('/', async (req, res) => {
  const newNote = await prisma.note.create({
    data: {
      note: req.body.message,
    },
  })

  return res.json(newNote)
})

//npm start log
app.listen(PORT, () => {
  console.log(`port ${PORT}`)
})
