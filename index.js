// Import http library
const http = require("http")
// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 8080
//create our server object
const server = http.createServer()
// We define a function that runs in response a request event
server.on("request", (request, response) => {
  
    const id = request.params.id



  response.statusCode = 200
  response.write(`we got this id ${id}`) 
  response.end()
})
server.listen(PORT, err => {
  err ? console.error(err) : console.log(`listening on port ${PORT}`)
})