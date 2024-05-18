const http = require("http");
const server = http.createServer(function (req, res) {
  if (req.url == "/home") {
    res.write("<html>");
    res.write("<head><title>Req and Res</title></head>");
    res.write("<body><h1>Welcome home</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (req.url == "/about") {
    res.write("<html>");
    res.write("<head><title>Req and Res</title></head>");
    res.write("<body><h1>Welcome to  About Us page  </h1></body>");
    res.write("</html>");
    res.end();
  }
  if (req.url == "/node") {
    res.write("<html>");
    res.write("<head><title>Req and Res</title></head>");
    res.write("<body><h1>Welcome to my NodeJS Project</h1></body>");
    res.write("</html>");
    res.end();
  }
  // process.exit()
});
server.listen(4000);
