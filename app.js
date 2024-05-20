const http = require("http");
const requestUrl=require('./request')


const server = http.createServer(requestUrl);

server.listen(4000);
