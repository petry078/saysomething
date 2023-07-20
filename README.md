# saysomething

Node.js Express.js API to saysomething, literally just POST something you want to say. It is all.

1. Open it on browser: https://saysomething-api.vercel.app/
2. Try: `curl -X POST -H "Content-Type: application/json" -d '{"noted": "your message"}' https://saysomething-api.vercel.app/`

Expected result (*stdout*): `{"id":<id>,"createdAt":"<date>","noted":"your message"}`

Code has nothing but this GET and POST, no error handling, no nothing. Feel free to break it :D 

I think Vercel is rebuilding it after some hours, restarting the `something` variable (and everything), and for this (not good) reason POST is not very persistent, you can do it, but it will be there for some time only. My shot is that I need an actual database... 

> It is not secure to make a POST change a hardcoded value of a variable on the code itself, I know kkkkk

## Dev

Clone this repository and inside the saysometing directory, run:

`npm install`

`npm start`

It will build locally: http://localhost:4567/

Make changes. 

Run:

`vercel login` //to login

`vercel deploy` //to deploy it :D

### Dev requests

**GET** request: `curl http://localhost:4567/`

**POST** request: `curl -X POST -H "Content-Type: application/json" -d '{"string": "something new"}' http://localhost:4567/`

## Prod

## Prod requests

**GET** request: `curl https://saysomething-ten.vercel.app/`

**POST** request: `curl -X POST -H "Content-Type: application/json" -d '{"string": "something new"}' https://saysomething-api.vercel.app/` and update the page.

## Future work

- [ ] It is all about the headers, right? Implement security with Helmet.js (cool stuff...)
- [x] Implement an actual serverless database to finally end this injection hallucination of storing the user input inside this poor helpless string variable
- [ ] Error handling, obviously...
