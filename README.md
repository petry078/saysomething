# saysomething

Node.js Express.js API to saysomething, in notes format.

## Dev

Clone this repository and inside the saysometing directory, run:

`npm install`

`npm start`

It will build locally: http://localhost:3000/

## CRUD & endpoints

There is only one endpoint at the moment: https://saysomething-api.vercel.app/

### GET all

Use this curl to GET all notes.

`curl https://saysomething-api.vercel.app/`

### GET by id

Use this curl to GET an specific note.

`curl https://saysomething-api.vercel.app/<note-id>`

### POST

Use this curl to POST an note.

`curl -X POST -H "Content-Type: application/json" -d '{"noted": "your note"}' https://saysomething-api.vercel.app/`

Expected stdout: `{"id":12,"createdAt":"2023-07-21T02:08:30.404Z","noted":"stdout"}`

### PUT

Use this curl to update  an note.

`curl -X PUT -H "Content-Type: application/json" -d '{"noted": "your updated note"}' https://saysomething-api.vercel.app/<note-id>`

Expected stdout: `{"id":12,"createdAt":"2023-07-21T02:08:30.404Z","noted":"your updated note"}`

### DELETE

Use this curl to DELETE an specific note.

`curl -X DELETE https://saysomething-api.vercel.app/<note-id>`

Expected stdout: `Note 12 deleted.`

## Future work

- [x] Implement an actual serverless database to finally end this injection hallucination of storing the user input inside this poor helpless string variable
- [ ] User authentication. What do you think of JWT?
- [ ] It is all about the headers, right? Implement security with Helmet.js (cool stuff...)
- [ ] Error handling, obviously...
