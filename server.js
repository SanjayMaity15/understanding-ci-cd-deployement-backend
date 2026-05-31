import http from "http"

const server = http.createServer((req, res) => {
    console.log(req)
    res.end("Server is running")

})

server.listen(8000, () => {
    console.log(`
=======================================\n
            Server is running\n
=======================================\n
        `);
})