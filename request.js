const fs = require("fs");
const request = (req, res) => {
  if (req.url === "/") {
    let dataFromFile;
    try {
      dataFromFile = fs.readFileSync("message.txt", { encoding: "utf-8" });
    } catch (err) {
      console.log(err);
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write(`<body>${dataFromFile}</body>`);
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/message" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const splitArr = parseBody.split("=")[1];
      fs.writeFileSync("message.txt", splitArr);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Home Page</title></head>");
  res.write("<body><p>Rest of the code</p></body>");
  res.write("</html>");
  res.end();
};

module.exports = request;