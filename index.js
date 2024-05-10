
const http = require('http');

const server = http.createServer(async (req, res) => {
    if (req.url === '/' && req.method === "GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({"message": "Hello"}));
        res.end();
        return;
    }

    res.writeHead(404, {"Content-Type": "application/json"});
    res.end(JSON.stringify({"message": "Not Found"}));
});

server.listen(3002, ()=> {
    console.log("Server started on port 3002")
});

