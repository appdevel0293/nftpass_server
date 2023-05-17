const http = require("http")
const PORT = process.env.PORT || 8080
const server = http.createServer()
const url = require('url');
const querystring = require('querystring');



server.on("request", (request, response) => {
  
    const parsedUrl = url.parse(request.url);
    const queryParams = querystring.parse(parsedUrl.query);
    const id = queryParams.id;


  response.statusCode = 200
  response.write(`we got this id ${id}`) 
  response.end()
})
server.listen(PORT, err => {
  err ? console.error(err) : console.log(`listening on port ${PORT}`)
})