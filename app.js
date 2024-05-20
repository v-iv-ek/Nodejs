const http = require("http");
const request = require("./request");
console.log(request)

const server = http.createServer(request);

server.listen(3000);
