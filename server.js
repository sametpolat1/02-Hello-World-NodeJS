const http = require("http");

const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    if (request.url === "/") {
      response.write("<html><body><h1>This is Home Page</h1></body></html>");
      
    } else if (request.url === "/student") {
      response.write("<html><body><h1>This is Student Page</h1></body></html>");
      
    } else if (request.url === "/admin") {
      response.write("<html><body><h1>This is Admin Page</h1></body></html>");
     
    } else if (request.url === "/data") {
      response.setHeader("Content-Type", "application/json");
      response.writeHead(200);
      response.end(`{"message": "This is a JSON response"}`);
    } else {
      response.write("<html><body><h1>404 Not Found!</h1></body></html>");
      
    }response.end()
  }
});

server.listen(5000);
