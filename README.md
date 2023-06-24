# saysomething

Node.js Express.js API to saysomething 

https://saysomething-ten.vercel.app/

## dev

`npm install`

`npm start`

http://localhost:4567/

Make changes.

`vercel login`

`vercel deploy`

### dev requests

**GET** request: `curl http://localhost:4567/`

**POST** request: `curl -X POST -H "Content-Type: application/json" -d '{"string": "something new"}' http://localhost:4567/`

## prod requests

**GET** request: `curl https://saysomething-ten.vercel.app/`

**POST** request: `curl -X POST -H "Content-Type: application/json" -d '{"string": "something new"}' https://saysomething-ten.vercel.app/` and update the page.

