import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/product") {
    res.write(`
      <h1>Iphone XL</h1>
      <h2>Price: 90000</h2>
      <h3>Discount: 30%</h3>
    `);
    res.end();
  } else if (req.url === "/contact") {
    res.end("<h1>Contact Us</h1>");
  } else if (req.url === "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const product = [
      { name: "Iphone", price: 85000, qty: 2, discount: 15 },
      { name: "HP Laptop", price: 95000, qty: 1, discount: 25 },
    ];
    res.end(JSON.stringify(product));
  } else {
    res.statusCode = 404;
    res.end(`
      <h1>Page not found</h1>
      <a href="/">Home</a>
    `);
  }
});

server.listen(3000, () => console.log("Server runs on port 3000..."));
