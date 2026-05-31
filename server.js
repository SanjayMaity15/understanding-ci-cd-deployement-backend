import http from "http"

const server = http.createServer((req, res) => {
    res.end("Server is running")
})

server.listen(8000, () => {
    console.log(`
=======================================\n
            Server is running\n
=======================================\n
        `);
})