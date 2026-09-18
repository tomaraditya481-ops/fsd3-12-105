import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify({ msg: "Show users" }));

  } else if (req.url === "/api/users" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const user = JSON.parse(body);
      console.log(user);

      res.end(
        JSON.stringify({
          msg: "Add user",
          user: user,
        })
      );
    });

  } else if (req.url === "/api/users/1" && req.method === "GET") {
    res.end(JSON.stringify({ msg: "Show user with id 1" }));

  } else if (req.url === "/api/users/1" && req.method === "PUT") {
    res.end(JSON.stringify({ msg: "Replace user 1" }));

  } else if (req.url === "/api/users/1" && req.method === "DELETE") {
    res.end(JSON.stringify({ msg: "Delete user 1" }));

  } else if (req.url === "/api/users/1" && req.method === "PATCH") {
    res.end(JSON.stringify({ msg: "Partially update user 1" }));

  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(5555, () => {
  console.log("Server prg7 running ...");
});